'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

interface CarouselImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  caption?: string;
}

export function ImageCarousel({ images, caption }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, images.length - 1));
    setCurrentIndex(clamped);
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[clamped] as HTMLElement;
    if (!child) return;

    const trackWidth = track.offsetWidth;
    const childWidth = child.offsetWidth;
    const scrollTarget = child.offsetLeft - (trackWidth / 2) + (childWidth / 2);

    track.scrollTo({
      left: scrollTarget,
      behavior: 'smooth',
    });
  }, [images.length]);

  // Center first image on mount
  useEffect(() => {
    // Small delay to ensure layout is computed
    const timer = setTimeout(() => scrollToIndex(0), 50);
    return () => clearTimeout(timer);
  }, [scrollToIndex]);

  function handleImageClick(index: number) {
    scrollToIndex(index);
  }

  // Snap to nearest image center after manual drag/scroll ends
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeout: ReturnType<typeof setTimeout>;

    function handleScroll() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!track) return;
        const trackCenter = track.scrollLeft + track.offsetWidth / 2;
        const children = Array.from(track.children) as HTMLElement[];
        let closestIndex = 0;
        let closestDist = Infinity;

        for (let i = 0; i < children.length; i++) {
          const childCenter = children[i].offsetLeft + children[i].offsetWidth / 2;
          const dist = Math.abs(childCenter - trackCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        }

        setCurrentIndex(closestIndex);
        // Snap
        const child = children[closestIndex];
        const trackWidth = track.offsetWidth;
        const childWidth = child.offsetWidth;
        const scrollTarget = child.offsetLeft - (trackWidth / 2) + (childWidth / 2);
        track.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      }, 150);
    }

    track.addEventListener('scroll', handleScroll);
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <figure className={styles.carousel}>
      <div className={styles.track} ref={trackRef}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={styles.imageBtn}
            onClick={() => handleImageClick(i)}
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className={styles.image}
            />
          </button>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
