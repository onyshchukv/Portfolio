import Image from 'next/image';
import Link from 'next/link';

import OtherProjects from '@/components/OtherProjects';
import { ImageCarousel } from '@/components/ImageCarousel';
import styles from './page.module.css';

export default function InforEpmExcelPage() {
  return (
    <>
      <article className={styles.container}>
        {/* Back link */}
        <Link href="/#work" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 9H3M3 9L8 4M3 9L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to all designs</span>
        </Link>

        {/* Title */}
        <h1 className={styles.title}>Infor EPM – MS Excel Plugin</h1>

        {/* Section: My Role */}
        <section className={styles.section}>
          <div className={styles.heroImage}>
            <Image
              src="/images/projects/infor-excel/hero.png"
              alt="Infor EPM Excel Plugin overview"
              width={800}
              height={533}
              priority
              className={styles.roundedImage}
            />
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>My Role</h2>
            <div className={styles.sectionBody}>
              <p>I designed an enterprise Microsoft Excel plugin that allowed finance teams to work with complex OLAP databases directly inside Excel.</p>
              <p>The plugin helped users browse multidimensional data, build reports, explore hierarchies, write back values, and share insights without leaving their familiar spreadsheet workflow.</p>
              <p>The biggest challenge was fitting a large amount of enterprise functionality into a very small Office side panel while keeping the experience understandable and scalable.</p>
              <p>I led UX research, workflow design, information architecture, wireframing, and interaction design. Over time, the product evolved into a much larger analytical platform and later became the foundation for additional EPM products.</p>
            </div>
          </div>
        </section>

        {/* Screenshot with caption */}
        <section className={styles.section}>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <Image
                src="/images/projects/infor-excel/description.png"
                alt="Excel plugin in context"
                width={800}
                height={581}
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>
              Financial and enterprise planning teams often rely on Microsoft Excel as their primary workspace for budgeting, reporting, forecasting, and data analysis.
            </figcaption>
          </figure>
        </section>

        {/* Section: The Challenge — side-by-side layout */}
        <section className={styles.sideBySection}>
          <div className={styles.sideText}>
            <h2 className={styles.sectionTitle}>The Challenge</h2>
            <div className={styles.sectionBody}>
              <p>Finance and planning teams relied heavily on Excel for reporting, forecasting, and data analysis, but existing OLAP tools were often difficult to learn and disconnected from real spreadsheet workflows.</p>
              <p>The goal was to bring powerful database functionality directly into Excel without overwhelming users with complexity.</p>
              <p>The plugin needed to support:</p>
              <ul>
                <li>browsing large multidimensional datasets</li>
                <li>navigating hierarchies</li>
                <li>creating reports</li>
                <li>filtering and sorting data</li>
                <li>writeback operations</li>
                <li>advanced analytical workflows</li>
              </ul>
              <p>All of this had to fit into a narrow Office side panel.</p>
              <p>One of the biggest UX challenges was balancing power with clarity. The interface could not be overly simplified because accountants and analysts depended on advanced functionality every day. At the same time, the experience had to stay easy to scan and predictable even as new features were added over the years.</p>
              <p>Another important challenge was scalability. The architecture needed enough flexibility to support future growth without turning the product into a confusing collection of disconnected features.</p>
            </div>
          </div>
          <figure className={styles.sideImage}>
            <div className={styles.pluginScreenshot}>
              <Image
                src="/images/projects/infor-excel/plugin-main.png"
                alt="Main page of the Plugin"
                width={305}
                height={898}
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Main page of the Plugin</figcaption>
          </figure>
        </section>

        {/* Section: Research & Discovery */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Research &amp; Discovery</h2>
            <div className={styles.sectionBody}>
              <p>I started by researching existing OLAP and financial reporting tools to understand common workflows, interaction patterns, and usability problems.</p>
              <p>I also worked closely with stakeholders, business analysts, and internal budgeting teams to identify the most important workflows and prioritize functionality.</p>
              <p>The early design work focused heavily on information architecture and workflow structure rather than visual polish. I created wireframe prototypes to validate whether users could efficiently navigate large datasets and complete reporting tasks without becoming overwhelmed.</p>
              <p>A major design goal was making the plugin feel like a natural extension of Excel instead of a separate enterprise application. Since users already spent most of their time inside spreadsheets, preserving familiar mental models helped reduce friction and improve adoption.</p>
              <p>The interface relied on:</p>
              <ul>
                <li>clear information hierarchy</li>
                <li>progressive disclosure</li>
                <li>scalable navigation patterns</li>
                <li>contextual actions</li>
                <li>reusable interaction structures</li>
              </ul>
              <p>This approach helped keep the interface manageable despite the density of enterprise functionality.</p>
            </div>
          </div>
        </section>

        {/* Screenshot: Initial designs — 4 images grid on desktop, carousel on mobile */}
        <section className={styles.section}>
          <figure className={styles.figure}>
            <div className={styles.wireframeGrid}>
              <div className={styles.wireframeItem}>
                <Image
                  src="/images/projects/infor-excel/wireframe-1.png"
                  alt="Initial wireframe design 1"
                  width={350}
                  height={695}
                  className={styles.wireframeImage}
                />
              </div>
              <div className={styles.wireframeItem}>
                <Image
                  src="/images/projects/infor-excel/wireframe-2.png"
                  alt="Initial wireframe design 2"
                  width={350}
                  height={695}
                  className={styles.wireframeImage}
                />
              </div>
              <div className={styles.wireframeItem}>
                <Image
                  src="/images/projects/infor-excel/wireframe-3.png"
                  alt="Initial wireframe design 3"
                  width={350}
                  height={694}
                  className={styles.wireframeImage}
                />
              </div>
              <div className={styles.wireframeItem}>
                <Image
                  src="/images/projects/infor-excel/wireframe-4.png"
                  alt="Initial wireframe design 4"
                  width={350}
                  height={694}
                  className={styles.wireframeImage}
                />
              </div>
            </div>
            <figcaption className={styles.caption}>Initial designs for the first version.</figcaption>
          </figure>
        </section>

        {/* Section: Evolution Over Years */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Evolution Over Years</h2>
            <div className={styles.sectionBody}>
              <p>The plugin continued evolving for more than six years as customer workflows became more advanced and new enterprise requirements appeared.</p>
              <p>One of the larger improvements was a more advanced database browsing experience that made navigating complex OLAP structures faster and easier.</p>
              <p>The reporting workflow also became more dynamic over time. Instead of manually selecting elements for rows and columns, users could later create rule-based selections, such as displaying all children of a parent node or all elements from a hierarchy level. This allowed reports to automatically adapt when database structures changed.</p>
              <p>Another major addition was support for calculated elements, allowing users to define custom formulas directly inside reports.</p>
              <p>Advanced filtering and sorting capabilities were also added both globally and at the axis level, giving users more control over large analytical datasets.</p>
              <p>Despite the growing feature set, the original UX foundation remained stable and scalable throughout the product&apos;s evolution.</p>
              <p>As AI-driven workflows started becoming more common, the product direction also evolved toward exploring AI-first interactions. The goal was not simply adding AI features, but rethinking how users could start analytical workflows through natural language and intelligent assistance while still maintaining transparency, flexibility, and full user control over complex reporting tasks.</p>
            </div>
          </div>

          {/* Horizontal scrolling image gallery */}
          <ImageCarousel
            images={[
              { src: '/images/projects/infor-excel/evolution-1.png', alt: 'On premise Windows only tool', width: 804, height: 490 },
              { src: '/images/projects/infor-excel/evolution-2.png', alt: 'Modern version', width: 470, height: 490 },
              { src: '/images/projects/infor-excel/evolution-3.png', alt: 'Future AI-first prototype', width: 453, height: 490 },
              { src: '/images/projects/infor-excel/evolution-4.png', alt: 'AI-first prototype detail', width: 452, height: 490 },
            ]}
            caption="From on premise Windows only tool to Modern version to Future AI-first prototype."
          />
        </section>

        {/* Section: Impact */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Impact</h2>
            <div className={styles.sectionBody}>
              <p>The product was successfully adopted by enterprise clients working with large-scale financial data inside Excel.</p>
              <p>User feedback consistently highlighted that the plugin made complex OLAP workflows easier to understand and more approachable for day-to-day reporting tasks.</p>
              <p>One of the strongest outcomes was the longevity of the original UX architecture. The interaction model and structural decisions supported several years of feature growth without requiring major redesigns.</p>
              <p>The product also influenced the broader Infor EPM ecosystem. Many interaction patterns and workflow concepts later became the foundation for additional products, including web-based AdHoc data discovery and reporting tools.</p>
            </div>
          </div>
        </section>
      </article>

      <OtherProjects currentSlug="infor-epm-excel" />
      
    </>
  );
}
