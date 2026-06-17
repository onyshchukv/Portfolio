'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectList.module.css';

interface ProjectItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: 'design' | 'vibe-coding' | 'hobbies';
  href?: string;
  imageFit?: 'cover' | 'contain';
}

const projects: ProjectItem[] = [
  {
    slug: 'infor-epm-excel',
    date: '2020–2026',
    title: 'Infor EPM – MS Excel Plugin',
    description: 'Designed an enterprise Microsoft Excel plugin that enabled finance teams to explore and manage complex OLAP data through intuitive spreadsheet-based workflows.',
    image: '/images/projects/infor-excel/hero.png',
    category: 'design',
    href: '/projects/infor-epm-excel',
  },
  {
    slug: 'infor-epm-adhoc',
    date: '2023–2026',
    title: 'Infor EPM – AdHoc',
    description: 'Web-based analytical reporting tool with interactive grid, chart integration, and AI-assisted data exploration for enterprise finance teams.',
    image: '/images/projects/adhoc/hero.png',
    category: 'design',
    href: '/projects/adhoc',
  },
  {
    slug: 'infor-epm-design-library',
    date: '2019–2026',
    title: 'Infor EPM – Design Library',
    description: 'Built and evolved a multi-generation design system supporting thousands of screens, multiple themes, and a shared React component library.',
    image: '/images/projects/epm-library/hero.png',
    category: 'design',
    href: '/projects/epm-design-system',
  },
  {
    slug: 'listrak',
    date: '2022',
    title: 'Listrak',
    description: 'Redesigned an enterprise marketing automation platform, restructuring campaign workflows and multi-channel orchestration for 1,000+ retail brands.',
    image: '/images/projects/listrak/hero.png',
    category: 'design',
    href: '/projects/listrak',
  },
  {
    slug: 'excelra',
    date: '2022',
    title: 'Excelra',
    description: 'Redesigned the search experience for one of the world\'s largest medicinal chemistry databases, reducing time-to-results from 60s to 10s.',
    image: '/images/projects/excelra/hero.png',
    category: 'design',
    href: '/projects/excelra',
  },
  {
    slug: 'geojam',
    date: '2021',
    title: 'Geojam',
    description: 'Redesigned a Web3 social media mobile app for the creator economy with token ecosystem and peer-to-peer marketplace.',
    image: '/images/projects/geojam/hero-vector.png',
    category: 'design',
    href: '/projects/geojam',
    imageFit: 'contain',
  },
];

export default function ProjectList({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: 'projects' | 'experience' | 'contact') => void }) {
  return (
    <section className={styles.section} id="work">
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${activeTab === 'projects' ? styles.filterBtnActive : ''}`}
          onClick={() => onTabChange('projects')}
        >
          Projects
        </button>
        <button
          className={`${styles.filterBtn} ${activeTab === 'experience' ? styles.filterBtnActive : ''}`}
          onClick={() => onTabChange('experience')}
        >
          Experience and CV
        </button>
        <button
          className={`${styles.filterBtn} ${activeTab === 'contact' ? styles.filterBtnActive : ''}`}
          onClick={() => onTabChange('contact')}
        >
          Contact
        </button>
      </div>

      {activeTab === 'projects' && (
        <>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.list}>
        {projects.map((project) => {
          const content = (
            <article key={project.slug} className={styles.project}>
              <div className={styles.date}>
                <span>{project.date}</span>
              </div>
              <div className={styles.details}>
                <div className={styles.textBlock}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={480}
                    height={320}
                    className={styles.image}
                    style={project.imageFit === 'contain' ? { objectFit: 'contain' } : undefined}
                  />
                </div>
              </div>
            </article>
          );

          if (project.href) {
            return (
              <Link key={project.slug} href={project.href} className={styles.projectLink}>
                {content}
              </Link>
            );
          }

          return content;
        })}
      </div>
        </>
      )}
    </section>
  );
}
