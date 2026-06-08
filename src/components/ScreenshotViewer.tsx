import { Screenshot } from '@/lib/types';
import { ImageWithFallback } from './ImageWithFallback';
import styles from './ScreenshotViewer.module.css';

export interface ScreenshotViewerProps {
  screenshots: Screenshot[];
}

export function ScreenshotViewer({ screenshots }: ScreenshotViewerProps) {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.viewer}>
        {screenshots.map((screenshot, index) => (
          <figure key={index} className={styles.screenshotItem}>
            <div className={styles.imageWrapper}>
              <ImageWithFallback
                src={screenshot.src}
                alt={screenshot.alt}
                width={1200}
                height={800}
                priority={index === 0}
              />
            </div>
            {screenshot.caption && (
              <figcaption className={styles.caption}>
                {screenshot.caption.slice(0, 200)}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
