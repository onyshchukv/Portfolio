import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { computeImageDisplaySize } from './image-utils';

/**
 * Feature: ux-portfolio-website, Property 5: Image dimension scaling preserves minimum width
 * Validates: Requirements 5.3
 *
 * For any image with original dimensions (width, height) and any viewport width
 * from 320px to 2560px, the computed display width SHALL be at least 80px and
 * SHALL not exceed the available container width. The aspect ratio SHALL be
 * preserved (height/width ratio unchanged within 1px rounding tolerance).
 */
describe('Property 5: Image dimension scaling preserves minimum width', () => {
  const imageWidth = fc.integer({ min: 80, max: 4000 });
  const imageHeight = fc.integer({ min: 80, max: 4000 });
  const viewportWidth = fc.integer({ min: 320, max: 2560 });

  it('display width is at least 80px', () => {
    fc.assert(
      fc.property(imageWidth, imageHeight, viewportWidth, (w, h, vw) => {
        const { displayWidth } = computeImageDisplaySize(w, h, vw);
        expect(displayWidth).toBeGreaterThanOrEqual(80);
      }),
      { numRuns: 100 }
    );
  });

  it('display width does not exceed container width', () => {
    fc.assert(
      fc.property(imageWidth, imageHeight, viewportWidth, (w, h, vw) => {
        const { displayWidth } = computeImageDisplaySize(w, h, vw);
        expect(displayWidth).toBeLessThanOrEqual(vw);
      }),
      { numRuns: 100 }
    );
  });

  it('aspect ratio is preserved within 1px rounding tolerance', () => {
    fc.assert(
      fc.property(imageWidth, imageHeight, viewportWidth, (w, h, vw) => {
        const { displayWidth, displayHeight } = computeImageDisplaySize(w, h, vw);
        const originalRatio = h / w;
        const computedRatio = displayHeight / displayWidth;
        const tolerance = 1 / displayWidth;
        expect(Math.abs(originalRatio - computedRatio)).toBeLessThanOrEqual(tolerance);
      }),
      { numRuns: 100 }
    );
  });
});
