import { describe, it, expect } from 'vitest';
import { resolveActiveNavLinks } from './navigation';

describe('resolveActiveNavLinks', () => {
  it('marks Home as active for exact "/" path', () => {
    const links = resolveActiveNavLinks('/');
    const active = links.filter((l) => l.isActive);
    expect(active).toHaveLength(1);
    expect(active[0].label).toBe('Home');
    expect(active[0].href).toBe('/');
  });

  it('marks Projects as active for "/projects"', () => {
    const links = resolveActiveNavLinks('/projects');
    const active = links.filter((l) => l.isActive);
    expect(active).toHaveLength(1);
    expect(active[0].label).toBe('Projects');
    expect(active[0].href).toBe('/projects');
  });

  it('marks Projects as active for "/projects/some-slug"', () => {
    const links = resolveActiveNavLinks('/projects/some-slug');
    const active = links.filter((l) => l.isActive);
    expect(active).toHaveLength(1);
    expect(active[0].label).toBe('Projects');
  });

  it('marks Projects as active for deeply nested project paths', () => {
    const links = resolveActiveNavLinks('/projects/my-project/details');
    const active = links.filter((l) => l.isActive);
    expect(active).toHaveLength(1);
    expect(active[0].label).toBe('Projects');
  });

  it('does not mark Home active for paths starting with "/"', () => {
    const links = resolveActiveNavLinks('/projects');
    const home = links.find((l) => l.label === 'Home');
    expect(home?.isActive).toBe(false);
  });

  it('falls back to Home for unknown paths', () => {
    const links = resolveActiveNavLinks('/unknown-page');
    const active = links.filter((l) => l.isActive);
    expect(active).toHaveLength(1);
    expect(active[0].label).toBe('Home');
  });

  it('always returns exactly one active link', () => {
    const paths = ['/', '/projects', '/projects/slug', '/random', '/about'];
    for (const path of paths) {
      const links = resolveActiveNavLinks(path);
      const activeCount = links.filter((l) => l.isActive).length;
      expect(activeCount).toBe(1);
    }
  });

  it('returns all expected nav links', () => {
    const links = resolveActiveNavLinks('/');
    expect(links).toHaveLength(2);
    expect(links.map((l) => l.label)).toEqual(['Home', 'Projects']);
  });
});
