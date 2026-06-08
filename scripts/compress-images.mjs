/**
 * Compress all PNG images that exceed the 500KB budget.
 * Converts them to optimized PNG with reduced quality while maintaining visual fidelity.
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const BUDGET_BYTES = 500 * 1024;
const IMAGE_DIR = join(process.cwd(), 'public', 'images');
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

function getImageFiles(dir) {
  const files = [];
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
    // ignore
  }
  return files;
}

async function compressImage(filePath) {
  const stat = statSync(filePath);
  if (stat.size <= BUDGET_BYTES) return null;

  const originalKB = Math.round(stat.size / 1024);
  const ext = extname(filePath).toLowerCase();

  let buffer;
  if (ext === '.png') {
    // Try progressive quality reduction
    for (const quality of [80, 60, 45]) {
      buffer = await sharp(filePath)
        .png({ quality, compressionLevel: 9, effort: 10 })
        .toBuffer();
      if (buffer.length <= BUDGET_BYTES) break;
    }
    // If still over budget, resize down
    if (buffer.length > BUDGET_BYTES) {
      const metadata = await sharp(filePath).metadata();
      const scale = Math.sqrt(BUDGET_BYTES / buffer.length) * 0.9;
      const newWidth = Math.round(metadata.width * scale);
      buffer = await sharp(filePath)
        .resize(newWidth)
        .png({ quality: 60, compressionLevel: 9, effort: 10 })
        .toBuffer();
    }
  } else {
    // JPEG/WebP
    buffer = await sharp(filePath)
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    if (buffer.length > BUDGET_BYTES) {
      buffer = await sharp(filePath)
        .jpeg({ quality: 60, mozjpeg: true })
        .toBuffer();
    }
  }

  await sharp(buffer).toFile(filePath);
  const newKB = Math.round(buffer.length / 1024);
  return { originalKB, newKB };
}

async function main() {
  const images = getImageFiles(IMAGE_DIR);
  const oversized = images.filter(f => statSync(f).size > BUDGET_BYTES);

  console.log(`Found ${oversized.length} images over 500KB budget. Compressing...\n`);

  for (const filePath of oversized) {
    const rel = filePath.replace(process.cwd() + '/', '');
    const result = await compressImage(filePath);
    if (result) {
      const savings = Math.round((1 - result.newKB / result.originalKB) * 100);
      console.log(`  ✓ ${rel}: ${result.originalKB}KB → ${result.newKB}KB (−${savings}%)`);
    }
  }

  // Verify
  const stillOver = oversized.filter(f => statSync(f).size > BUDGET_BYTES);
  if (stillOver.length === 0) {
    console.log(`\n✓ All images now within 500KB budget.`);
  } else {
    console.error(`\n✗ ${stillOver.length} image(s) still over budget:`);
    for (const f of stillOver) {
      console.error(`  ${f.replace(process.cwd() + '/', '')} — ${Math.round(statSync(f).size / 1024)}KB`);
    }
  }
}

main();
