import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the designer name as a heading', () => {
    render(<Hero name="Jane Doe" tagline="Crafting intuitive experiences" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Jane Doe');
  });

  it('renders the tagline', () => {
    render(<Hero name="Jane Doe" tagline="Crafting intuitive experiences" />);
    expect(screen.getByText('Crafting intuitive experiences')).toBeInTheDocument();
  });

  it('renders within a labeled section', () => {
    render(<Hero name="Jane Doe" tagline="Crafting intuitive experiences" />);
    expect(screen.getByRole('region', { name: /introduction/i })).toBeInTheDocument();
  });

  it('renders a tagline up to 120 characters', () => {
    const longTagline = 'A'.repeat(120);
    render(<Hero name="Jane Doe" tagline={longTagline} />);
    expect(screen.getByText(longTagline)).toBeInTheDocument();
  });
});
