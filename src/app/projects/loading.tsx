import { SkeletonCard } from '@/components/SkeletonCard';
import styles from './page.module.css';

export default function GalleryLoading() {
  return (
    <section className={styles.gallery}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.grid}>
        <SkeletonCard count={6} />
      </div>
    </section>
  );
}
