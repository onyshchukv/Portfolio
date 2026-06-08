import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navigation from './Navigation';

// Mock next/navigation
const mockPathname = vi.fn(() => '/');
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

// Mock next/link to render a plain anchor
vi.mock('next/link', () => ({
  default: ({ href, children, onClick, className, ...props }: any) => (
    <a href={href} onClick={onClick} className={className} {...props}>
      {children}
    </a>
  ),
}));

describe('Navigation', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');
  });

  it('renders navigation landmark', () => {
    render(<Navigation />);
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument();
  });

  it('renders Home and Projects links', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
  });

  it('marks Home as active on root path', () => {
    mockPathname.mockReturnValue('/');
    render(<Navigation />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('aria-current', 'page');
  });

  it('marks Projects as active on /projects path', () => {
    mockPathname.mockReturnValue('/projects');
    render(<Navigation />);
    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    expect(projectsLink).toHaveAttribute('aria-current', 'page');
  });

  it('marks Projects as active on /projects/some-slug path', () => {
    mockPathname.mockReturnValue('/projects/some-slug');
    render(<Navigation />);
    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    expect(projectsLink).toHaveAttribute('aria-current', 'page');
  });

  it('renders hamburger toggle button', () => {
    render(<Navigation />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('expands menu on toggle click', () => {
    render(<Navigation />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAttribute('aria-label', 'Close menu');
  });

  it('collapses menu on second toggle click', () => {
    render(<Navigation />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes menu when a link is clicked', () => {
    render(<Navigation />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    fireEvent.click(projectsLink);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggle controls the nav-menu element', () => {
    render(<Navigation />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-controls', 'nav-menu');
    expect(screen.getByRole('list')).toHaveAttribute('id', 'nav-menu');
  });
});
