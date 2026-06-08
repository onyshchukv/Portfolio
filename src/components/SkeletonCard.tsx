import styles from './SkeletonCard.module.css';

interface SkeletonCardProps {
  count: number;
}

export function SkeletonCard({ count }: SkeletonCardProps) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={styles.card}
          aria-hidden="true"
          role="presentation"
        >
          <div className={styles.image} />
          <div className={styles.body}>
            <div className={styles.title} />
            <div className={styles.description} />
          </div>
        </div>
      ))}
    </>
  );
}
