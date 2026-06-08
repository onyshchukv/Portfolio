import Link from 'next/link';
import { ImageWithFallback } from './ImageWithFallback';
import { truncate } from '@/lib/utils';
import type { ProjectSummary } from '@/lib/types';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  project: ProjectSummary;
  /** Set to true for above-the-fold cards (e.g., first visible cards on landing page) to disable lazy loading */
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const title = truncate(project.title, 60);
  const description = truncate(project.shortDescription, 120);

  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.thumbnail}>
        <ImageWithFallback
          src={project.thumbnail}
          alt={`Thumbnail for ${project.title}`}
          width={400}
          height={300}
          priority={priority}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
