import { NavLink } from './types';

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', isActive: false },
  { label: 'Projects', href: '/projects', isActive: false },
];

/**
 * Resolves which navigation link is active based on the current path.
 * Uses prefix matching: a link is active if the current path starts with its href.
 * Special case: "/" only matches exactly "/" to avoid matching all paths.
 * Exactly one link is always marked active. If no prefix matches, Home is the fallback.
 */
export function resolveActiveNavLinks(currentPath: string): NavLink[] {
  // Find the best match: longest href that is a prefix of currentPath.
  // "/" is only a match for exact "/".
  let activeIndex = -1;
  let longestMatch = 0;

  for (let i = 0; i < NAV_LINKS.length; i++) {
    const link = NAV_LINKS[i];

    if (link.href === '/') {
      if (currentPath === '/') {
        // Exact match for home — treat as length 1 match
        if (longestMatch < 1) {
          activeIndex = i;
          longestMatch = 1;
        }
      }
    } else {
      // Prefix match: currentPath starts with href, and the next char (if any) is "/"
      if (
        currentPath === link.href ||
        currentPath.startsWith(link.href + '/')
      ) {
        if (link.href.length > longestMatch) {
          activeIndex = i;
          longestMatch = link.href.length;
        }
      }
    }
  }

  // Fallback to Home if nothing matched
  if (activeIndex === -1) {
    activeIndex = 0;
  }

  return NAV_LINKS.map((link, i) => ({
    ...link,
    isActive: i === activeIndex,
  }));
}
