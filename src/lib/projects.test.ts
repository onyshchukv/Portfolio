import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { getValidProjects, getFeaturedProjects, getProjectBySlug } from './projects';

vi.mock('fs');
vi.mock('path', async () => {
  const actual = await vi.importActual<typeof import('path')>('path');
  return {
    ...actual,
    join: (...args: string[]) => actual.join(...args),
  };
});

const validProject = {
  slug: 'test-project',
  title: 'Test Project',
  description: 'A test project description',
  shortDescription: 'Short desc',
  featured: true,
  order: 1,
  screenshots: [{ src: '/images/test.webp', alt: 'Test screenshot', caption: 'Caption' }],
  createdAt: '2024-01-01T00:00:00.000Z',
};

const validProject2 = {
  slug: 'another-project',
  title: 'Another Project',
  description: 'Another description',
  shortDescription: 'Another short',
  featured: false,
  order: 2,
  screenshots: [{ src: '/images/another.webp', alt: 'Another screenshot', caption: 'Cap' }],
  createdAt: '2024-02-01T00:00:00.000Z',
};

const validFeatured3 = {
  slug: 'featured-three',
  title: 'Featured Three',
  description: 'Description three',
  shortDescription: 'Short three',
  featured: true,
  order: 3,
  screenshots: [{ src: '/images/three.webp', alt: 'Three', caption: '' }],
  createdAt: '2024-03-01T00:00:00.000Z',
};

describe('getValidProjects', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns empty array when projects directory does not exist', () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    expect(getValidProjects()).toEqual([]);
  });

  it('returns empty array when directory has no JSON files', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['.gitkeep'] as unknown as fs.Dirent[]);
    expect(getValidProjects()).toEqual([]);
  });

  it('returns valid projects and skips invalid ones', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['valid.json', 'invalid.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
      if (String(filePath).endsWith('invalid.json')) {
        return JSON.stringify({ title: '' }); // invalid: missing required fields
      }
      return JSON.stringify(validProject);
    });

    const result = getValidProjects();
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe('test-project');
    expect(console.warn).toHaveBeenCalled();
  });

  it('skips files with invalid JSON and logs warning', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['broken.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockReturnValue('not valid json {{{');

    const result = getValidProjects();
    expect(result).toEqual([]);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('Invalid JSON'),
      expect.anything()
    );
  });

  it('skips files that cannot be read and logs warning', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['unreadable.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error('EACCES: permission denied');
    });

    const result = getValidProjects();
    expect(result).toEqual([]);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('Failed to read file'),
      expect.anything()
    );
  });

  it('returns multiple valid projects', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['a.json', 'b.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
      if (String(filePath).includes('a.json')) return JSON.stringify(validProject);
      return JSON.stringify(validProject2);
    });

    const result = getValidProjects();
    expect(result).toHaveLength(2);
  });
});

describe('getFeaturedProjects', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns only featured projects sorted by order', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['a.json', 'b.json', 'c.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
      if (String(filePath).includes('a.json')) return JSON.stringify(validFeatured3);
      if (String(filePath).includes('b.json')) return JSON.stringify(validProject2); // not featured
      return JSON.stringify(validProject); // featured, order 1
    });

    const result = getFeaturedProjects();
    expect(result).toHaveLength(2);
    expect(result[0].order).toBe(1);
    expect(result[1].order).toBe(3);
    expect(result.every((p) => p.featured)).toBe(true);
  });

  it('caps at 6 featured projects', () => {
    const featured = Array.from({ length: 8 }, (_, i) => ({
      ...validProject,
      slug: `project-${i}`,
      order: i,
    }));

    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(
      featured.map((_, i) => `p${i}.json`) as unknown as fs.Dirent[]
    );
    vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
      const idx = featured.findIndex((_, i) => String(filePath).includes(`p${i}.json`));
      return JSON.stringify(featured[idx]);
    });

    const result = getFeaturedProjects();
    expect(result.length).toBeLessThanOrEqual(6);
  });

  it('returns empty array when no featured projects exist', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['a.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(validProject2)); // not featured

    const result = getFeaturedProjects();
    expect(result).toEqual([]);
  });
});

describe('getProjectBySlug', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns the project matching the slug', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['a.json', 'b.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
      if (String(filePath).includes('a.json')) return JSON.stringify(validProject);
      return JSON.stringify(validProject2);
    });

    const result = getProjectBySlug('another-project');
    expect(result).toBeDefined();
    expect(result!.slug).toBe('another-project');
  });

  it('returns undefined when slug does not match any project', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readdirSync).mockReturnValue(['a.json'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(validProject));

    const result = getProjectBySlug('nonexistent');
    expect(result).toBeUndefined();
  });
});
