import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders the provided message', () => {
    render(<EmptyState message="No projects are available" />);
    expect(screen.getByText('No projects are available')).toBeInTheDocument();
  });

  it('has role="status" for accessibility', () => {
    render(<EmptyState message="Nothing here yet" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders message inside a paragraph element', () => {
    render(<EmptyState message="Empty gallery" />);
    const message = screen.getByText('Empty gallery');
    expect(message.tagName).toBe('P');
  });
});
