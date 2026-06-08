import { describe, it, expect } from 'vitest';
import { truncate, selectFeaturedProjects } from './utils';
import type { Project } from './types';

function makeProject(overrides: Partial<Project> = {}): Project {
  return {
    slug: 'test-project',
    title: 'Test Project',
    description: 'A test project description',
    shortDescription: 'Short desc',
    featured: false,
    order: 0,
    screenshots: [{ src: '/img.webp', alt: 'Screenshot', caption: '' }],
    createdAt: '2024-01-01T00:00:00Z',
    ...overrides,
  };
}

describe('selectFeaturedProjects', () => {
  it('returns only featured projects', () => {
    const projects = [
      makeProject({ slug: 'a', featured: true, order: 1 }),
      makeProject({ slug: 'b', featured: false, order: 2 }),
      makeProject({ slug: 'c', featured: true, order: 3 }),
    ];

    const result = selectFeaturedProjects(projects);

    expect(result).toHaveLength(2);
    expect(result.every((p) => p.featured === true)).toBe(true);
  });

  it('sorts by order ascending', () => {
    const projects = [
      makeProject({ slug: 'c', featured: true, order: 3 }),
      makeProject({ slug: 'a', featured: true, order: 1 }),
      makeProject({ slug: 'b', featured: true, order: 2 }),
    ];

    const result = selectFeaturedProjects(projects);

    expect(result.map((p) => p.slug)).toEqual(['a', 'b', 'c']);
  });

  it('caps at 6 items', () => {
    const projects = Array.from({ length: 10 }, (_, i) =>
      makeProject({ slug: `project-${i}`, featured: true, order: i })
    );

    const result = selectFeaturedProjects(projects);

    expect(result).toHaveLength(6);
  });

  it('returns empty array when no projects are featured', () => {
    const projects = [
      makeProject({ slug: 'a', featured: false }),
      makeProject({ slug: 'b', featured: false }),
    ];

    const result = selectFeaturedProjects(projects);

    expect(result).toHaveLength(0);
  });

  it('returns empty array for empty input', () => {
    expect(selectFeaturedProjects([])).toEqual([]);
  });

  it('returns fewer than 6 when fewer featured projects exist', () => {
    const projects = [
      makeProject({ slug: 'a', featured: true, order: 2 }),
      makeProject({ slug: 'b', featured: true, order: 1 }),
    ];

    const result = selectFeaturedProjects(projects);

    expect(result).toHaveLength(2);
    expect(result[0].slug).toBe('b');
    expect(result[1].slug).toBe('a');
  });
});


describe('truncate', () => {
  it('returns text unchanged when within maxLength', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('returns text unchanged when exactly at maxLength', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('truncates text exceeding maxLength with ellipsis', () => {
    const result = truncate('hello world', 10);
    expect(result).toBe('hello wor\u2026');
    expect(result.length).toBe(10);
  });

  it('handles single character maxLength', () => {
    const result = truncate('hello', 1);
    expect(result).toBe('\u2026');
    expect(result.length).toBe(1);
  });

  it('handles empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  it('truncates to 60 characters for project titles', () => {
    const longTitle = 'A'.repeat(80);
    const result = truncate(longTitle, 60);
    expect(result.length).toBe(60);
    expect(result.endsWith('\u2026')).toBe(true);
  });

  it('truncates to 120 characters for project descriptions', () => {
    const longDesc = 'B'.repeat(150);
    const result = truncate(longDesc, 120);
    expect(result.length).toBe(120);
    expect(result.endsWith('\u2026')).toBe(true);
  });
});
