import fs from 'fs';
import path from 'path';
import { Project, validateProject } from './types';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

/**
 * Reads all JSON files from content/projects/, validates each entry,
 * skips invalid ones with a console warning, and returns valid projects.
 */
export function getValidProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.json'));
  const projects: Project[] = [];

  for (const file of files) {
    const filePath = path.join(PROJECTS_DIR, file);
    let raw: string;

    try {
      raw = fs.readFileSync(filePath, 'utf-8');
    } catch (err) {
      console.warn(`[projects] Failed to read file: ${file}`, err);
      continue;
    }

    let data: unknown;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      console.warn(`[projects] Invalid JSON in file: ${file}`, err);
      continue;
    }

    const result = validateProject(data);
    if (result.valid) {
      projects.push(result.project);
    } else {
      console.warn(
        `[projects] Skipping invalid project "${file}": ${result.errors.map((e) => `${e.field} - ${e.message}`).join(', ')}`
      );
    }
  }

  return projects;
}

/**
 * Returns featured projects sorted by order, capped at 6.
 */
export function getFeaturedProjects(): Project[] {
  return getValidProjects()
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);
}

/**
 * Returns a single project by slug, or undefined if not found.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return getValidProjects().find((p) => p.slug === slug);
}
