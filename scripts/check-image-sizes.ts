/**
 * Build-time check: ensures no image exceeds the 500KB budget.
 *
 * Usage: npx tsx scripts/check-image-sizes.ts
 *
 * Scans public/images/ for image files and reports any that exceed
 * the IMAGE_SIZE_BUDGET_BYTES limit (500KB). Exits with code 1 if
 * any image is over budget.
 */

import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const IMAGE_SIZE_BUDGET_BYTES = 500 * 1024; // 500KB
const IMAGE_DIR = join(process.cwd(), 'public', 'images');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);

function getImageFiles(dir: string): string[] {
  const files: string[] = [];

  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...getImageFiles(fullPath));
      } else if (IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  } catch {
    // Directory doesn't exist yet — that's fine
  }

  return files;
}

function checkImageSizes(): void {
  const images = getImageFiles(IMAGE_DIR);
  const violations: { path: string; sizeKB: number }[] = [];

  for (const imagePath of images) {
    const stat = statSync(imagePath);
    if (stat.size > IMAGE_SIZE_BUDGET_BYTES) {
      violations.push({
        path: imagePath.replace(process.cwd() + '/', ''),
        sizeKB: Math.round(stat.size / 1024),
      });
    }
  }

  if (violations.length === 0) {
    console.log(`✓ All ${images.length} images are within the 500KB budget.`);
    return;
  }

  console.error(`✗ ${violations.length} image(s) exceed the 500KB budget:\n`);
  for (const v of violations) {
    console.error(`  ${v.path} — ${v.sizeKB}KB (limit: 500KB)`);
  }
  console.error('');
  console.error('Optimize these images before building.');
  process.exit(1);
}

checkImageSizes();
