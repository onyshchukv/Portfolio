// Data models for the UX Portfolio website

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  featured: boolean;
  order: number;
  screenshots: Screenshot[];
  createdAt: string;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
}

export interface NavLink {
  label: string;
  href: string;
  isActive: boolean;
}

// Validation

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface ValidationError {
  field: string;
  message: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function isValidScreenshot(item: unknown): item is Screenshot {
  if (typeof item !== 'object' || item === null) return false;
  const obj = item as Record<string, unknown>;
  return isNonEmptyString(obj.src) && isNonEmptyString(obj.alt);
}

export function validateProject(data: unknown): { valid: true; project: Project } | { valid: false; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  if (typeof data !== 'object' || data === null) {
    return { valid: false, errors: [{ field: 'root', message: 'Project data must be an object' }] };
  }

  const obj = data as Record<string, unknown>;

  // slug
  if (!isNonEmptyString(obj.slug) || !SLUG_PATTERN.test(obj.slug)) {
    errors.push({ field: 'slug', message: 'Required, lowercase alphanumeric + hyphens only' });
  }

  // title: 1-100 chars
  if (!isNonEmptyString(obj.title) || obj.title.length > 100) {
    errors.push({ field: 'title', message: 'Required, 1-100 characters' });
  }

  // description: 1-5000 chars
  if (!isNonEmptyString(obj.description) || obj.description.length > 5000) {
    errors.push({ field: 'description', message: 'Required, 1-5000 characters' });
  }

  // shortDescription: 1-120 chars
  if (!isNonEmptyString(obj.shortDescription) || obj.shortDescription.length > 120) {
    errors.push({ field: 'shortDescription', message: 'Required, 1-120 characters' });
  }

  // screenshots: 1-20 items, each with valid src and alt
  if (!Array.isArray(obj.screenshots) || obj.screenshots.length < 1 || obj.screenshots.length > 20) {
    errors.push({ field: 'screenshots', message: 'Required, 1-20 items' });
  } else {
    const allValid = obj.screenshots.every(isValidScreenshot);
    if (!allValid) {
      errors.push({ field: 'screenshots', message: 'Each screenshot must have a valid src and alt' });
    }
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  const project: Project = {
    slug: obj.slug as string,
    title: obj.title as string,
    description: obj.description as string,
    shortDescription: obj.shortDescription as string,
    featured: Boolean(obj.featured),
    order: typeof obj.order === 'number' ? obj.order : 0,
    screenshots: obj.screenshots as Screenshot[],
    createdAt: typeof obj.createdAt === 'string' ? obj.createdAt : new Date().toISOString(),
  };

  return { valid: true, project };
}
