import { describe, it, expect } from 'vitest';
import { validateProject } from './types';
import type { Project } from './types';

function validProjectData(): Record<string, unknown> {
  return {
    slug: 'my-project',
    title: 'My Project',
    description: 'A detailed description of the project.',
    shortDescription: 'A short one.',
    featured: true,
    order: 1,
    screenshots: [{ src: '/images/shot.webp', alt: 'Screenshot of the app' , caption: 'Main view' }],
    createdAt: '2024-01-15T00:00:00.000Z',
  };
}

describe('validateProject', () => {
  it('accepts a valid project', () => {
    const result = validateProject(validProjectData());
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.project.slug).toBe('my-project');
      expect(result.project.featured).toBe(true);
    }
  });

  it('rejects non-object input', () => {
    const result = validateProject(null);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors[0].field).toBe('root');
    }
  });

  it('rejects empty title', () => {
    const data = validProjectData();
    data.title = '';
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    }
  });

  it('rejects title over 100 characters', () => {
    const data = validProjectData();
    data.title = 'a'.repeat(101);
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    }
  });

  it('accepts title at exactly 100 characters', () => {
    const data = validProjectData();
    data.title = 'a'.repeat(100);
    const result = validateProject(data);
    expect(result.valid).toBe(true);
  });

  it('rejects description over 5000 characters', () => {
    const data = validProjectData();
    data.description = 'x'.repeat(5001);
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'description')).toBe(true);
    }
  });

  it('rejects shortDescription over 120 characters', () => {
    const data = validProjectData();
    data.shortDescription = 'y'.repeat(121);
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'shortDescription')).toBe(true);
    }
  });

  it('rejects empty screenshots array', () => {
    const data = validProjectData();
    data.screenshots = [];
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'screenshots')).toBe(true);
    }
  });

  it('rejects more than 20 screenshots', () => {
    const data = validProjectData();
    data.screenshots = Array.from({ length: 21 }, (_, i) => ({
      src: `/images/shot-${i}.webp`,
      alt: `Screenshot ${i}`,
      caption: '',
    }));
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'screenshots')).toBe(true);
    }
  });

  it('rejects screenshot missing alt', () => {
    const data = validProjectData();
    data.screenshots = [{ src: '/images/shot.webp' }];
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'screenshots')).toBe(true);
    }
  });

  it('rejects invalid slug with uppercase', () => {
    const data = validProjectData();
    data.slug = 'My-Project';
    const result = validateProject(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some(e => e.field === 'slug')).toBe(true);
    }
  });

  it('rejects slug with spaces', () => {
    const data = validProjectData();
    data.slug = 'my project';
    const result = validateProject(data);
    expect(result.valid).toBe(false);
  });

  it('defaults featured to false when missing', () => {
    const data = validProjectData();
    delete data.featured;
    const result = validateProject(data);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.project.featured).toBe(false);
    }
  });

  it('defaults order to 0 when missing', () => {
    const data = validProjectData();
    delete data.order;
    const result = validateProject(data);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.project.order).toBe(0);
    }
  });
});
