import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from './ProjectCard';
import type { ProjectSummary } from '@/lib/types';

// Mock next/link to render a plain anchor
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next/image to render a plain img element
vi.mock('next/image', () => ({
  default: ({ priority, blurDataURL, placeholder, ...props }: Record<string, unknown>) => {
    void blurDataURL;
    void placeholder;
    void priority;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

const mockProject: ProjectSummary = {
  slug: 'test-project',
  title: 'My Test Project',
  shortDescription: 'A short description of the project.',
  thumbnail: '/images/projects/test-thumb.jpg',
};

describe('ProjectCard', () => {
  it('renders a link to the project detail page', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('My Test Project')).toBeInTheDocument();
  });

  it('renders the short description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A short description of the project.')).toBeInTheDocument();
  });

  it('renders the thumbnail image', () => {
    render(<ProjectCard project={mockProject} />);
    const img = screen.getByRole('img', { name: /thumbnail for my test project/i });
    expect(img).toHaveAttribute('src', '/images/projects/test-thumb.jpg');
  });

  it('truncates title longer than 60 characters', () => {
    const longTitle = 'A'.repeat(80);
    const project: ProjectSummary = { ...mockProject, title: longTitle };
    render(<ProjectCard project={project} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.textContent!.length).toBeLessThanOrEqual(60);
    expect(heading.textContent).toContain('\u2026');
  });

  it('truncates description longer than 120 characters', () => {
    const longDesc = 'B'.repeat(150);
    const project: ProjectSummary = { ...mockProject, shortDescription: longDesc };
    render(<ProjectCard project={project} />);
    const paragraph = screen.getByText(/B+/);
    expect(paragraph.textContent!.length).toBeLessThanOrEqual(120);
    expect(paragraph.textContent).toContain('\u2026');
  });

  it('remains interactive when image fails to load', () => {
    render(<ProjectCard project={mockProject} />);
    const img = screen.getByRole('img', { name: /thumbnail for my test project/i });
    fireEvent.error(img);

    // Card link should still be present and clickable
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
    // Title and description should still be visible
    expect(screen.getByText('My Test Project')).toBeInTheDocument();
    expect(screen.getByText('A short description of the project.')).toBeInTheDocument();
  });
});
