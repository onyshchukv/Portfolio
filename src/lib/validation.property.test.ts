import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { validateProject } from './types';

/**
 * Feature: ux-portfolio-website, Property 2: Project validation filters correctly
 * Validates: Requirements 7.5, 1.2
 *
 * For any list of project entries (each with arbitrary field presence/absence),
 * the validation function SHALL return exactly those entries where title is a
 * non-empty string ≤ 100 characters, description is a non-empty string ≤ 5000
 * characters, shortDescription is a non-empty string ≤ 120 characters, and
 * screenshots is a non-empty array of 1-20 items each with valid src and alt
 * fields. No valid entry SHALL be excluded, and no invalid entry SHALL be included.
 */

// --- Generators ---

/** Generates a valid slug: lowercase alphanumeric with hyphens */
const validSlug = fc.stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/).filter((s) => s.length > 0 && s.length <= 50);

/** Generates a valid screenshot with non-empty src and alt */
const validScreenshot = fc.record({
  src: fc.string({ minLength: 1, maxLength: 200 }),
  alt: fc.string({ minLength: 1, maxLength: 200 }),
  caption: fc.string({ maxLength: 200 }),
});

/** Generates a fully valid project entry that must pass validation */
const validProjectArb = fc.record({
  slug: validSlug,
  title: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 1, maxLength: 5000 }),
  shortDescription: fc.string({ minLength: 1, maxLength: 120 }),
  featured: fc.boolean(),
  order: fc.integer({ min: 0, max: 100 }),
  screenshots: fc.array(validScreenshot, { minLength: 1, maxLength: 20 }),
  createdAt: fc.date().map((d) => d.toISOString()),
});

/** Generates an invalid project by corrupting one or more fields */
const invalidProjectArb = fc.oneof(
  // Missing title (empty string)
  validProjectArb.map((p) => ({ ...p, title: '' })),
  // Title too long
  validProjectArb.chain((p) =>
    fc.string({ minLength: 101, maxLength: 200 }).map((title) => ({ ...p, title }))
  ),
  // Missing description (empty string)
  validProjectArb.map((p) => ({ ...p, description: '' })),
  // Description too long
  validProjectArb.chain((p) =>
    fc.string({ minLength: 5001, maxLength: 5100 }).map((description) => ({ ...p, description }))
  ),
  // Missing shortDescription (empty string)
  validProjectArb.map((p) => ({ ...p, shortDescription: '' })),
  // shortDescription too long
  validProjectArb.chain((p) =>
    fc.string({ minLength: 121, maxLength: 200 }).map((shortDescription) => ({ ...p, shortDescription }))
  ),
  // Empty screenshots array
  validProjectArb.map((p) => ({ ...p, screenshots: [] })),
  // Too many screenshots (21+)
  validProjectArb.chain((p) =>
    fc.array(validScreenshot, { minLength: 21, maxLength: 25 }).map((screenshots) => ({ ...p, screenshots }))
  ),
  // Screenshot with empty src
  validProjectArb.map((p) => ({
    ...p,
    screenshots: [{ src: '', alt: 'valid alt', caption: '' }],
  })),
  // Screenshot with empty alt
  validProjectArb.map((p) => ({
    ...p,
    screenshots: [{ src: '/valid/path.webp', alt: '', caption: '' }],
  })),
  // Non-object input
  fc.oneof(fc.constant(null), fc.constant(undefined), fc.integer(), fc.string())
);

describe('Property 2: Project validation filters correctly', () => {
  it('valid projects are always accepted', () => {
    fc.assert(
      fc.property(validProjectArb, (project) => {
        const result = validateProject(project);
        expect(result.valid).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it('invalid projects are always rejected', () => {
    fc.assert(
      fc.property(invalidProjectArb, (entry) => {
        const result = validateProject(entry);
        expect(result.valid).toBe(false);
      }),
      { numRuns: 100 }
    );
  });

  it('filtering a mixed list includes exactly the valid entries', () => {
    fc.assert(
      fc.property(
        fc.array(fc.oneof(validProjectArb, invalidProjectArb), { minLength: 1, maxLength: 20 }),
        (entries) => {
          const accepted = entries.filter((entry) => validateProject(entry).valid);
          const rejected = entries.filter((entry) => !validateProject(entry).valid);

          // Every accepted entry must satisfy all constraints
          for (const entry of accepted) {
            const obj = entry as Record<string, unknown>;
            expect(typeof obj.title).toBe('string');
            expect((obj.title as string).length).toBeGreaterThanOrEqual(1);
            expect((obj.title as string).length).toBeLessThanOrEqual(100);

            expect(typeof obj.description).toBe('string');
            expect((obj.description as string).length).toBeGreaterThanOrEqual(1);
            expect((obj.description as string).length).toBeLessThanOrEqual(5000);

            expect(typeof obj.shortDescription).toBe('string');
            expect((obj.shortDescription as string).length).toBeGreaterThanOrEqual(1);
            expect((obj.shortDescription as string).length).toBeLessThanOrEqual(120);

            expect(Array.isArray(obj.screenshots)).toBe(true);
            const screenshots = obj.screenshots as Array<Record<string, unknown>>;
            expect(screenshots.length).toBeGreaterThanOrEqual(1);
            expect(screenshots.length).toBeLessThanOrEqual(20);
            for (const s of screenshots) {
              expect(typeof s.src).toBe('string');
              expect((s.src as string).length).toBeGreaterThanOrEqual(1);
              expect(typeof s.alt).toBe('string');
              expect((s.alt as string).length).toBeGreaterThanOrEqual(1);
            }
          }

          // Every rejected entry must violate at least one constraint
          for (const entry of rejected) {
            if (typeof entry !== 'object' || entry === null) continue;
            const obj = entry as Record<string, unknown>;
            const titleBad =
              typeof obj.title !== 'string' || obj.title.length < 1 || obj.title.length > 100;
            const descBad =
              typeof obj.description !== 'string' ||
              obj.description.length < 1 ||
              obj.description.length > 5000;
            const shortDescBad =
              typeof obj.shortDescription !== 'string' ||
              obj.shortDescription.length < 1 ||
              obj.shortDescription.length > 120;
            const screenshotsBad =
              !Array.isArray(obj.screenshots) ||
              obj.screenshots.length < 1 ||
              obj.screenshots.length > 20 ||
              !(obj.screenshots as unknown[]).every(
                (s: unknown) =>
                  typeof s === 'object' &&
                  s !== null &&
                  typeof (s as Record<string, unknown>).src === 'string' &&
                  ((s as Record<string, unknown>).src as string).length > 0 &&
                  typeof (s as Record<string, unknown>).alt === 'string' &&
                  ((s as Record<string, unknown>).alt as string).length > 0
              );
            const slugBad =
              typeof obj.slug !== 'string' ||
              obj.slug.length === 0 ||
              !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(obj.slug);

            expect(titleBad || descBad || shortDescBad || screenshotsBad || slugBad).toBe(true);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('no valid entry is excluded by validation', () => {
    fc.assert(
      fc.property(
        fc.array(validProjectArb, { minLength: 1, maxLength: 10 }),
        (validEntries) => {
          // All entries in this list are valid — none should be rejected
          const results = validEntries.map((entry) => validateProject(entry));
          const allAccepted = results.every((r) => r.valid);
          expect(allAccepted).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});
