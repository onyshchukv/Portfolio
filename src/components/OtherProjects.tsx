import Image from 'next/image';
import Link from 'next/link';
import styles from './OtherProjects.module.css';

interface ProjectLink {
  slug: string;
  href: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const allProjects: ProjectLink[] = [
  {
    slug: 'infor-epm-excel',
    href: '/projects/infor-epm-excel',
    date: '2020–2026',
    title: 'Infor EPM – MS Excel Plugin',
    description: 'Designed an enterprise Microsoft Excel plugin that enabled finance teams to explore and manage complex OLAP data through intuitive spreadsheet-based workflows.',
    image: '/images/projects/infor-excel/hero.png',
  },
  {
    slug: 'infor-epm-adhoc',
    href: '/projects/adhoc',
    date: '2023–2026',
    title: 'Infor EPM – AdHoc',
    description: 'Web-based analytical reporting tool with Advanced Grid, interactive data exploration, chart integration, and AI-assisted analytics.',
    image: '/images/projects/adhoc/hero.png',
  },
  {
    slug: 'infor-epm-design-library',
    href: '/projects/epm-design-system',
    date: '2019–2026',
    title: 'Infor EPM – Design Library',
    description: 'Built and evolved the product design system through four major generations supporting thousands of screens and multiple themes.',
    image: '/images/projects/epm-library/hero.png',
  },
  {
    slug: 'listrak',
    href: '/projects/listrak',
    date: '2022',
    title: 'Listrak',
    description: 'Redesigned an enterprise marketing automation platform focusing on navigation, campaign workflows, and the automation builder.',
    image: '/images/projects/listrak/hero.png',
  },
  {
    slug: 'excelra',
    href: '/projects/excelra',
    date: '2022',
    title: 'Excelra Gostar',
    description: 'Redesigned the search experience for one of the world\'s largest medicinal chemistry databases.',
    image: '/images/projects/excelra/hero.png',
  },
  {
    slug: 'geojam',
    href: '/projects/geojam',
    date: '2021',
    title: 'Geojam',
    description: 'Redesigned a Web3 social media mobile app for the creator economy with token ecosystem and peer-to-peer marketplace.',
    image: '/images/projects/geojam/hero-vector.png',
  },
];

interface OtherProjectsProps {
  currentSlug: string;
}

export default function OtherProjects({ currentSlug }: OtherProjectsProps) {
  // Get 2 random projects that are not the current one
  const others = allProjects
    .filter((p) => p.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Other Projects</h2>
      <div className={styles.list}>
        {others.map((project) => (
          <Link key={project.slug} href={project.href} className={styles.projectLink}>
            <article className={styles.project}>
              <div className={styles.date}>{project.date}</div>
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
                  />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
