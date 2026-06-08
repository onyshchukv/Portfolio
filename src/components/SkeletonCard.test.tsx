import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkeletonCard } from './SkeletonCard';

describe('SkeletonCard', () => {
  it('renders the correct number of placeholder cards', () => {
    const { container } = render(<SkeletonCard count={3} />);
    const cards = container.querySelectorAll('[aria-hidden="true"]');
    expect(cards).toHaveLength(3);
  });

  it('renders a single placeholder when count is 1', () => {
    const { container } = render(<SkeletonCard count={1} />);
    const cards = container.querySelectorAll('[aria-hidden="true"]');
    expect(cards).toHaveLength(1);
  });

  it('renders no placeholders when count is 0', () => {
    const { container } = render(<SkeletonCard count={0} />);
    const cards = container.querySelectorAll('[aria-hidden="true"]');
    expect(cards).toHaveLength(0);
  });

  it('marks placeholders as aria-hidden for accessibility', () => {
    const { container } = render(<SkeletonCard count={2} />);
    const cards = container.querySelectorAll('[aria-hidden="true"]');
    cards.forEach((card) => {
      expect(card.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('uses presentation role to indicate decorative content', () => {
    render(<SkeletonCard count={1} />);
    expect(screen.getByRole('presentation', { hidden: true })).toBeInTheDocument();
  });
});
