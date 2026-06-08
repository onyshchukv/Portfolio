'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageWithFallback.module.css';

/**
 * Minimal 1x1 pixel transparent blur placeholder.
 * Used as a lightweight loading state before the real image appears.
 */
const DEFAULT_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4=';

/**
 * Maximum allowed image file size in bytes (500KB).
 * This is enforced at build time via the check-image-sizes script.
 */
export const IMAGE_SIZE_BUDGET_BYTES = 500 * 1024;

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  blurDataURL?: string;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fallbackSrc,
  className,
  priority = false,
  sizes = '(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw',
  blurDataURL,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  function handleError() {
    if (fallbackSrc && !useFallback) {
      setUseFallback(true);
    } else {
      setHasError(true);
    }
  }

  if (hasError) {
    return (
      <div
        className={`${styles.placeholder} ${className ?? ''}`}
        role="img"
        aria-label={alt}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <svg
          className={styles.placeholderIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 16l5-5 4 4 5-5 4 4" />
          <circle cx="8.5" cy="8.5" r="1.5" />
        </svg>
        <p className={styles.placeholderText}>Image unavailable</p>
      </div>
    );
  }

  return (
    <Image
      src={useFallback ? fallbackSrc! : src}
      alt={alt}
      width={width}
      height={height}
      className={`${styles.image} ${className ?? ''}`}
      onError={handleError}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={blurDataURL ?? DEFAULT_BLUR_DATA_URL}
    />
  );
}
