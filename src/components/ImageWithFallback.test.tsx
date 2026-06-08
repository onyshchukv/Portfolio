import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ImageWithFallback } from './ImageWithFallback';

// Mock next/image to render a plain img element for testing
vi.mock('next/image', () => ({
  default: ({ priority, blurDataURL, placeholder, ...props }: Record<string, unknown>) => {
    void priority;
    void blurDataURL;
    void placeholder;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img data-priority={priority ? 'true' : undefined} data-placeholder={placeholder as string} {...props} />;
  },
}));

describe('ImageWithFallback', () => {
  it('renders an image with correct src and alt', () => {
    render(
      <ImageWithFallback
        src="/images/test.jpg"
        alt="Test image"
        width={400}
        height={300}
      />
    );

    const img = screen.getByRole('img', { name: 'Test image' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/test.jpg');
  });

  it('applies lazy loading by default for non-priority images', () => {
    render(
      <ImageWithFallback
        src="/images/test.jpg"
        alt="Lazy image"
        width={400}
        height={300}
      />
    );

    const img = screen.getByRole('img', { name: 'Lazy image' });
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('does not set loading attribute when priority is true', () => {
    render(
      <ImageWithFallback
        src="/images/hero.jpg"
        alt="Priority image"
        width={400}
        height={300}
        priority
      />
    );

    const img = screen.getByRole('img', { name: 'Priority image' });
    expect(img).not.toHaveAttribute('loading', 'lazy');
  });

  it('includes blur placeholder by default', () => {
    render(
      <ImageWithFallback
        src="/images/test.jpg"
        alt="Blur test"
        width={400}
        height={300}
      />
    );

    const img = screen.getByRole('img', { name: 'Blur test' });
    expect(img).toHaveAttribute('data-placeholder', 'blur');
  });

  it('uses default sizes prop for responsive images', () => {
    render(
      <ImageWithFallback
        src="/images/test.jpg"
        alt="Sizes test"
        width={400}
        height={300}
      />
    );

    const img = screen.getByRole('img', { name: 'Sizes test' });
    expect(img).toHaveAttribute('sizes', '(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw');
  });

  it('accepts custom sizes prop', () => {
    render(
      <ImageWithFallback
        src="/images/test.jpg"
        alt="Custom sizes"
        width={400}
        height={300}
        sizes="100vw"
      />
    );

    const img = screen.getByRole('img', { name: 'Custom sizes' });
    expect(img).toHaveAttribute('sizes', '100vw');
  });

  it('displays placeholder with "Image unavailable" on error', () => {
    render(
      <ImageWithFallback
        src="/images/broken.jpg"
        alt="Broken image"
        width={400}
        height={300}
      />
    );

    const img = screen.getByRole('img', { name: 'Broken image' });
    fireEvent.error(img);

    const placeholder = screen.getByRole('img', { name: 'Broken image' });
    expect(placeholder).toBeInTheDocument();
    expect(screen.getByText('Image unavailable')).toBeInTheDocument();
  });

  it('uses fallbackSrc before showing placeholder', () => {
    render(
      <ImageWithFallback
        src="/images/broken.webp"
        alt="Fallback test"
        width={400}
        height={300}
        fallbackSrc="/images/fallback.jpg"
      />
    );

    const img = screen.getByRole('img', { name: 'Fallback test' });
    fireEvent.error(img);

    const fallbackImg = screen.getByRole('img', { name: 'Fallback test' });
    expect(fallbackImg).toHaveAttribute('src', '/images/fallback.jpg');
  });

  it('shows placeholder if fallbackSrc also fails', () => {
    render(
      <ImageWithFallback
        src="/images/broken.webp"
        alt="Double failure"
        width={400}
        height={300}
        fallbackSrc="/images/also-broken.jpg"
      />
    );

    const img = screen.getByRole('img', { name: 'Double failure' });
    fireEvent.error(img);

    const fallbackImg = screen.getByRole('img', { name: 'Double failure' });
    fireEvent.error(fallbackImg);

    expect(screen.getByText('Image unavailable')).toBeInTheDocument();
  });

  it('preserves aspect ratio on placeholder via style', () => {
    render(
      <ImageWithFallback
        src="/images/broken.jpg"
        alt="Aspect ratio test"
        width={800}
        height={600}
      />
    );

    const img = screen.getByRole('img', { name: 'Aspect ratio test' });
    fireEvent.error(img);

    const placeholder = screen.getByRole('img', { name: 'Aspect ratio test' });
    expect(placeholder).toHaveStyle({ aspectRatio: '800 / 600' });
  });

  it('provides accessible alt text on placeholder', () => {
    render(
      <ImageWithFallback
        src="/images/broken.jpg"
        alt="Screenshot of login page"
        width={400}
        height={300}
      />
    );

    const img = screen.getByRole('img', { name: 'Screenshot of login page' });
    fireEvent.error(img);

    const placeholder = screen.getByRole('img', { name: 'Screenshot of login page' });
    expect(placeholder).toHaveAttribute('aria-label', 'Screenshot of login page');
  });
});
