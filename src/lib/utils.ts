import type { Project } from './types';

/**
 * Truncates text to a maximum length, appending an ellipsis ("…") if truncated.
 * The returned string (including ellipsis) never exceeds maxLength.
 * If the input fits within maxLength, it is returned unchanged.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 1) + '\u2026';
}

/**
 * Filters projects where featured === true, sorts by order ascending,
 * and returns at most 6 items.
 */
export function selectFeaturedProjects(projects: Project[]): Project[] {
  return projects
    .filter((p) => p.featured === true)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);
}
