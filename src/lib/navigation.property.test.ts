import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { resolveActiveNavLinks } from './navigation';

/**
 * Feature: ux-portfolio-website, Property 4: Active navigation link matches current path
 * Validates: Requirements 4.4
 *
 * For any valid route path in the site (/, /projects, /projects/[slug]),
 * exactly one navigation link SHALL be marked as active, and its `href`
 * SHALL be a prefix match of the current path. All other links SHALL be
 * marked inactive.
 */
describe('Property 4: Active navigation link matches current path', () => {
  // Generator for valid route paths: /, /projects, /projects/[slug]
  const validRoutePath = fc.oneof(
    fc.constant('/'),
    fc.constant('/projects'),
    fc
      .string({ minLength: 1, maxLength: 30 })
      .filter((s) => /^[a-z0-9-]+$/.test(s))
      .map((slug) => `/projects/${slug}`)
  );

  it('exactly one navigation link is marked active for any valid route', () => {
    fc.assert(
      fc.property(validRoutePath, (path) => {
        const links = resolveActiveNavLinks(path);
        const activeLinks = links.filter((l) => l.isActive);
        expect(activeLinks).toHaveLength(1);
      }),
      { numRuns: 100 }
    );
  });

  it('active link href is a prefix match of the current path', () => {
    fc.assert(
      fc.property(validRoutePath, (path) => {
        const links = resolveActiveNavLinks(path);
        const activeLink = links.find((l) => l.isActive)!;

        // The active link's href should be a prefix of the current path.
        // Special case: "/" matches only exact "/".
        if (activeLink.href === '/') {
          expect(path).toBe('/');
        } else {
          expect(
            path === activeLink.href || path.startsWith(activeLink.href + '/')
          ).toBe(true);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('all non-active links are marked inactive', () => {
    fc.assert(
      fc.property(validRoutePath, (path) => {
        const links = resolveActiveNavLinks(path);
        const inactiveLinks = links.filter((l) => !l.isActive);

        for (const link of inactiveLinks) {
          expect(link.isActive).toBe(false);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('active link count is exactly one and inactive count is the rest', () => {
    fc.assert(
      fc.property(validRoutePath, (path) => {
        const links = resolveActiveNavLinks(path);
        const activeCount = links.filter((l) => l.isActive).length;
        const inactiveCount = links.filter((l) => !l.isActive).length;

        expect(activeCount).toBe(1);
        expect(inactiveCount).toBe(links.length - 1);
      }),
      { numRuns: 100 }
    );
  });
});
