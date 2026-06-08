# Implementation Plan: UX Portfolio Website

## Overview

Build a static Next.js portfolio website with TypeScript. The implementation follows a bottom-up approach: set up the project and data layer first, then build shared components, then compose pages, and finally wire everything together with navigation and performance optimizations. All code uses Next.js App Router with static export (`output: 'export'`).

## Tasks

- [x] 1. Set up project structure and configuration
  - [x] 1.1 Initialize Next.js project with TypeScript and configure static export
    - Create Next.js app with App Router and TypeScript
    - Configure `next.config.js` with `output: 'export'`
    - Set up directory structure: `content/projects/`, `public/images/projects/`, `src/components/`, `src/lib/`, `src/app/`
    - Install dependencies: `fast-check`, `vitest`, `@testing-library/react`, `playwright`
    - Configure Vitest for unit and property-based tests
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 1.2 Define design tokens and global styles
    - Create CSS custom properties file with all design tokens (typography, spacing, layout, colors, transitions)
    - Set up CSS Modules configuration
    - Define global reset and base styles with `--font-primary`, `--font-size-base: 16px`, `--content-max-width: 1200px`
    - Ensure maximum two typefaces and minimum 16px base font size
    - _Requirements: 1.3, 5.5_

  - [x] 1.3 Create TypeScript interfaces and data models
    - Define `Project`, `Screenshot`, `ProjectSummary`, `NavLink` interfaces in `src/lib/types.ts`
    - Implement validation rules (title 1-100 chars, description 1-5000 chars, shortDescription 1-120 chars, screenshots 1-20 items)
    - _Requirements: 7.1, 7.5_

- [x] 2. Implement data layer and utility functions
  - [x] 2.1 Implement project data loading and validation
    - Create `src/lib/projects.ts` with functions to read and parse JSON files from `content/projects/`
    - Implement schema validation that skips invalid entries and logs warnings
    - Implement `getValidProjects()`, `getFeaturedProjects()`, `getProjectBySlug()` functions
    - _Requirements: 7.1, 7.2, 7.3, 7.5_

  - [x] 2.2 Implement text truncation utility
    - Create `src/lib/utils.ts` with `truncate(text: string, maxLength: number): string`
    - If input exceeds maxLength, return substring ending with "…" where total length ≤ maxLength
    - If input is within maxLength, return unchanged
    - _Requirements: 2.2_

  - [x] 2.3 Implement featured project selection
    - Create function that filters projects where `featured === true`, sorts by `order`, and caps at 6 items
    - _Requirements: 1.2_

  - [x] 2.4 Implement active navigation link resolver
    - Create function that takes current path and returns NavLink array with exactly one active link determined by prefix matching
    - _Requirements: 4.4_

  - [x] 2.5 Write property test for text truncation
    - **Property 1: Text truncation preserves length invariant**
    - **Validates: Requirements 2.2**

  - [x] 2.6 Write property test for project validation
    - **Property 2: Project validation filters correctly**
    - **Validates: Requirements 7.5, 1.2**

  - [x] 2.7 Write property test for featured project selection
    - **Property 3: Featured project selection respects bounds**
    - **Validates: Requirements 1.2**

  - [x] 2.8 Write property test for active navigation link
    - **Property 4: Active navigation link matches current path**
    - **Validates: Requirements 4.4**

- [x] 3. Checkpoint - Core data layer
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Build shared UI components
  - [x] 4.1 Implement ImageWithFallback component
    - Create component using `next/image` with error state handling
    - On image load failure, display placeholder with "Image unavailable" message and accessible alt text
    - Support WebP/AVIF with JPEG fallback via Next.js image optimization
    - _Requirements: 2.5, 3.5, 6.2, 6.4_

  - [x] 4.2 Implement ProjectCard component
    - Create card component displaying thumbnail (via ImageWithFallback), truncated title (max 60 chars), and truncated short description (max 120 chars)
    - Card links to `/projects/[slug]`
    - Ensure card remains interactive even when image fails
    - _Requirements: 2.2, 2.3, 2.5_

  - [x] 4.3 Implement SkeletonCard component
    - Create loading placeholder matching ProjectCard dimensions to prevent layout shift
    - Accept `count` prop to render multiple placeholders
    - _Requirements: 2.4_

  - [x] 4.4 Implement EmptyState component
    - Display message when no projects are available
    - _Requirements: 2.6_

  - [x] 4.5 Implement Hero component
    - Display designer's full name and tagline (max 120 characters)
    - Ensure hero fits within initial viewport on heights ≥ 768px without scrolling
    - _Requirements: 1.1, 1.4_

  - [x] 4.6 Implement ScreenshotViewer component
    - Vertical scroll layout displaying 1-20 screenshots
    - Each screenshot rendered at minimum 800px display width with caption (max 200 chars)
    - Uses ImageWithFallback for error handling
    - _Requirements: 3.1, 3.2, 3.3, 3.5_

  - [x] 4.7 Write unit tests for shared components
    - Test Hero renders name and tagline
    - Test ProjectCard renders truncated title and description, handles image failure
    - Test SkeletonCard renders correct count
    - Test EmptyState renders message
    - Test ImageWithFallback displays fallback on error
    - Test ScreenshotViewer renders screenshots with captions
    - _Requirements: 1.1, 2.2, 2.4, 2.5, 2.6, 3.1, 3.5_

- [x] 5. Implement navigation
  - [x] 5.1 Implement Navigation component with mobile menu
    - Create site-wide navigation visible on every page in consistent position
    - Include links to Home and Projects at minimum
    - Visually indicate active page with distinct style
    - On viewports < 768px, collapse into toggle-activated hamburger menu
    - Toggle expands/collapses menu; selecting a link closes menu
    - Ensure tap targets ≥ 44×44px on mobile
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.4_

  - [x] 5.2 Write unit tests for Navigation component
    - Test correct links rendered
    - Test active page indication
    - Test mobile toggle open/close behavior
    - Test link click closes mobile menu
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 6. Compose page layouts
  - [x] 6.1 Implement root layout with Navigation
    - Create `src/app/layout.tsx` with Navigation component, global styles, and font loading
    - Ensure Navigation appears on every page
    - _Requirements: 4.1, 1.3_

  - [x] 6.2 Implement Landing Page (HomePage)
    - Create `src/app/page.tsx` with Hero section and featured projects Gallery (3-6 cards)
    - Load featured projects at build time
    - Responsive grid: 1 col < 600px, 2 cols 600-1023px, 3 cols ≥ 1024px
    - Maximum content width with ≥ 10% horizontal margin on viewports > 768px
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1_

  - [x] 6.3 Implement Gallery Page
    - Create `src/app/projects/page.tsx` with full responsive grid of all valid project cards
    - Responsive columns: 1 col < 600px, 2 cols 600-1023px, 3 cols ≥ 1024px
    - Show SkeletonCard placeholders during image loading
    - Show EmptyState when no valid projects exist
    - Single-column layout on viewports < 768px
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.2_

  - [x] 6.4 Implement Project Detail Page
    - Create `src/app/projects/[slug]/page.tsx` with `generateStaticParams` for static generation
    - Display project title, full description (up to 5000 chars), and screenshots via ScreenshotViewer
    - Include "Back to Gallery" navigation element
    - Handle invalid slugs with 404
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [x] 6.5 Implement 404 page
    - Create minimal not-found page with navigation back to home
    - _Requirements: 4.1_

- [x] 7. Checkpoint - Pages and components complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Performance and responsive polish
  - [x] 8.1 Configure image optimization and lazy loading
    - Configure `next/image` for static export with WebP/AVIF output and JPEG fallback
    - Ensure images not in initial viewport are lazy-loaded
    - Set maximum image file size budget of 500KB per image
    - Add blur placeholders for loading state
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 8.2 Implement responsive design refinements
    - Ensure no horizontal scrollbar or content overflow from 320px to 2560px
    - Scale images proportionally, never below 80px width
    - Ensure all interactive elements ≥ 44×44px tap target on mobile
    - Ensure body text ≥ 16px on mobile
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 8.3 Write property test for image dimension scaling
    - **Property 5: Image dimension scaling preserves minimum width**
    - **Validates: Requirements 5.3**

- [x] 9. Content management and sample data
  - [x] 9.1 Create sample project JSON files and images
    - Create 3-6 sample project JSON files in `content/projects/` following the schema
    - Add sample images in `public/images/projects/`
    - Include at least one project with `featured: true` and one with invalid data to verify filtering
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 10. Final checkpoint - Full build verification
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run build` and verify static output in `/out/` folder
  - Verify Gallery loads within 3 seconds with 20 projects

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All code uses TypeScript with Next.js App Router and static export
- CSS Modules with custom properties for styling — no runtime CSS-in-JS

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3", "2.4"] },
    { "id": 3, "tasks": ["2.5", "2.6", "2.7", "2.8"] },
    { "id": 4, "tasks": ["4.1", "4.4", "4.5"] },
    { "id": 5, "tasks": ["4.2", "4.3", "4.6", "5.1"] },
    { "id": 6, "tasks": ["4.7", "5.2", "6.1"] },
    { "id": 7, "tasks": ["6.2", "6.3", "6.4", "6.5"] },
    { "id": 8, "tasks": ["8.1", "8.2"] },
    { "id": 9, "tasks": ["8.3", "9.1"] }
  ]
}
```
