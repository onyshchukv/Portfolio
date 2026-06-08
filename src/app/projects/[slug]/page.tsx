import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getValidProjects, getProjectBySlug } from '@/lib/projects';
import { ScreenshotViewer } from '@/components/ScreenshotViewer';
import styles from './page.module.css';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = getValidProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/projects" className={styles.backLink}>
        ← Back to Gallery
      </Link>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.screenshots}>
        <ScreenshotViewer screenshots={project.screenshots} />
      </div>
    </div>
  );
}
