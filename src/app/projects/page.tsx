import { getValidProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { EmptyState } from '@/components/EmptyState';
import type { ProjectSummary } from '@/lib/types';
import styles from './page.module.css';

export default function GalleryPage() {
  const projects = getValidProjects();

  if (projects.length === 0) {
    return (
      <section className={styles.gallery}>
        <h1 className={styles.heading}>Projects</h1>
        <EmptyState message="No projects available" />
      </section>
    );
  }

  const summaries: ProjectSummary[] = projects
    .sort((a, b) => a.order - b.order)
    .map((project) => ({
      slug: project.slug,
      title: project.title,
      shortDescription: project.shortDescription,
      thumbnail: project.screenshots[0].src,
    }));

  return (
    <section className={styles.gallery}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.grid}>
        {summaries.map((summary, index) => (
          <ProjectCard key={summary.slug} project={summary} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
