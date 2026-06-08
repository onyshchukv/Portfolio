import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ScreenshotViewer } from './ScreenshotViewer';
import { Screenshot } from '@/lib/types';

vi.mock('next/image', () => ({
  default: ({ priority, blurDataURL, placeholder, ...props }: Record<string, unknown>) => {
    void priority;
    void blurDataURL;
    void placeholder;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('ScreenshotViewer', () => {
  const sampleScreenshots: Screenshot[] = [
    { src: '/images/screen1.jpg', alt: 'Login page', caption: 'User login flow' },
    { src: '/images/screen2.jpg', alt: 'Dashboard', caption: 'Main dashboard view' },
    { src: '/images/screen3.jpg', alt: 'Settings', caption: 'Settings panel' },
  ];

  it('renders all screenshots with images', () => {
    render(<ScreenshotViewer screenshots={sampleScreenshots} />);

    expect(screen.getByRole('img', { name: 'Login page' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Dashboard' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Settings' })).toBeInTheDocument();
  });

  it('renders captions for each screenshot', () => {
    render(<ScreenshotViewer screenshots={sampleScreenshots} />);

    expect(screen.getByText('User login flow')).toBeInTheDocument();
    expect(screen.getByText('Main dashboard view')).toBeInTheDocument();
    expect(screen.getByText('Settings panel')).toBeInTheDocument();
  });

  it('truncates captions longer than 200 characters', () => {
    const longCaption = 'A'.repeat(250);
    const screenshots: Screenshot[] = [
      { src: '/images/long.jpg', alt: 'Long caption test', caption: longCaption },
    ];

    render(<ScreenshotViewer screenshots={screenshots} />);

    const caption = screen.getByText('A'.repeat(200));
    expect(caption).toBeInTheDocument();
    expect(caption.textContent).toHaveLength(200);
  });

  it('renders a single screenshot', () => {
    const single: Screenshot[] = [
      { src: '/images/only.jpg', alt: 'Only screenshot', caption: 'The only one' },
    ];

    render(<ScreenshotViewer screenshots={single} />);

    expect(screen.getByRole('img', { name: 'Only screenshot' })).toBeInTheDocument();
    expect(screen.getByText('The only one')).toBeInTheDocument();
  });

  it('does not render caption element when caption is empty', () => {
    const noCaption: Screenshot[] = [
      { src: '/images/nocap.jpg', alt: 'No caption', caption: '' },
    ];

    render(<ScreenshotViewer screenshots={noCaption} />);

    expect(screen.getByRole('img', { name: 'No caption' })).toBeInTheDocument();
    const figures = document.querySelectorAll('figcaption');
    expect(figures).toHaveLength(0);
  });

  it('renders screenshots in figure elements for semantic markup', () => {
    render(<ScreenshotViewer screenshots={sampleScreenshots} />);

    const figures = document.querySelectorAll('figure');
    expect(figures).toHaveLength(3);
  });
});
