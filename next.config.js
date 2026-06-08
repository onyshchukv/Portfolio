/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    /**
     * Static export requires unoptimized: true because Next.js image optimization
     * runs on a Node.js server at request time, which doesn't exist in static export.
     *
     * Image optimization strategy for this project:
     * - Images are pre-optimized at content creation time (WebP/AVIF with JPEG fallback)
     * - Maximum file size budget: 500KB per image (enforced by scripts/check-image-sizes.ts)
     * - Lazy loading: handled by next/image's loading="lazy" (default for non-priority images)
     * - Above-the-fold images: use priority prop to disable lazy loading
     * - Blur placeholders: enabled via placeholder="blur" in ImageWithFallback component
     * - Responsive sizing: handled via sizes prop in ImageWithFallback component
     */
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
