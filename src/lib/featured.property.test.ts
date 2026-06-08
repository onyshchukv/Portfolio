import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { selectFeaturedProjects } from './utils';
import type { Project } from './types';

/**
 * Property 3: Featured project selection respects bounds
 *
 * For any list of valid projects with varying `featured` flags, the featured
 * selection function SHALL return only projects where `featured` is true,
 * sorted by `order`, with a maximum of 6 items. The result SHALL never
 * include a non-featured project.
 *
 * Validates: Requirements 1.2
 */

const screenshotArb = fc.record({
  src: fc.stringMatching(/^[a-z0-9/_-]+\.(png|jpg|webp)$/),
  alt: fc.string({ minLength: 1, maxLength: 50 }),
  caption: fc.string({ minLength: 0, maxLength: 200 }),
});

const projectArb = fc.record({
  slug: fc.stringMatching(/^[a-z][a-z0-9-]{0,19}$/),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 1, maxLength: 500 }),
  shortDescription: fc.string({ minLength: 1, maxLength: 120 }),
  featured: fc.boolean(),
  order: fc.integer({ min: -1000, max: 1000 }),
  screenshots: fc.array(screenshotArb, { minLength: 1, maxLength: 5 }),
  createdAt: fc.date().map((d) => d.toISOString()),
});

const projectListArb = fc.array(projectArb, { minLength: 0, maxLength: 30 });

describe('Feature: ux-portfolio-website, Property 3: Featured project selection respects bounds', () => {
  it('returns only featured projects, sorted by order, capped at 6', () => {
    fc.assert(
      fc.property(projectListArb, (projects: Project[]) => {
        const result = selectFeaturedProjects(projects);

        // All returned projects must have featured === true
        for (const p of result) {
          expect(p.featured).toBe(true);
        }

        // Result length must not exceed 6
        expect(result.length).toBeLessThanOrEqual(6);

        // Result must be sorted by order ascending
        for (let i = 1; i < result.length; i++) {
          expect(result[i].order).toBeGreaterThanOrEqual(result[i - 1].order);
        }

        // Result length should equal min(featuredCount, 6)
        const featuredCount = projects.filter((p) => p.featured).length;
        expect(result.length).toBe(Math.min(featuredCount, 6));

        // No non-featured project should appear in result (use reference equality)
        for (const r of result) {
          const original = projects.find((p) => p === r);
          expect(original).toBeDefined();
          expect(original!.featured).toBe(true);
        }
      }),
      { numRuns: 100 },
    );
  });
});
