import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { truncate } from './utils';

/**
 * Feature: ux-portfolio-website, Property 1: Text truncation preserves length invariant
 * Validates: Requirements 2.2
 *
 * For any string input and maximum length N, the truncation function SHALL return
 * a string of at most N characters. If the input exceeds N characters, the output
 * SHALL end with an ellipsis ("…") and the total length including ellipsis SHALL
 * not exceed N. If the input is N characters or fewer, the output SHALL equal the
 * input unchanged.
 */
describe('Property 1: Text truncation preserves length invariant', () => {
  it('output length never exceeds maxLength', () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.integer({ min: 1, max: 1000 }),
        (text, maxLength) => {
          const result = truncate(text, maxLength);
          expect(result.length).toBeLessThanOrEqual(maxLength);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('input exceeding maxLength produces output ending with ellipsis', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 2 }),
        fc.integer({ min: 1, max: 999 }),
        (text, maxLength) => {
          fc.pre(text.length > maxLength);
          const result = truncate(text, maxLength);
          expect(result.endsWith('\u2026')).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('input within maxLength is returned unchanged', () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.integer({ min: 1, max: 1000 }),
        (text, maxLength) => {
          fc.pre(text.length <= maxLength);
          const result = truncate(text, maxLength);
          expect(result).toBe(text);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('truncated output length including ellipsis does not exceed maxLength', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 2 }),
        fc.integer({ min: 1, max: 999 }),
        (text, maxLength) => {
          fc.pre(text.length > maxLength);
          const result = truncate(text, maxLength);
          expect(result.length).toBeLessThanOrEqual(maxLength);
          expect(result.length).toBeGreaterThanOrEqual(1);
        }
      ),
      { numRuns: 100 }
    );
  });
});
