import Image from 'next/image';
import Link from 'next/link';

import OtherProjects from '@/components/OtherProjects';
import { ImageCarousel } from '@/components/ImageCarousel';
import styles from '../infor-epm-excel/page.module.css';
import localStyles from './page.module.css';

export default function ExcelraPage() {
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
        <h1 className={styles.title}>Excelra Gostar</h1>

        {/* Section: Overview */}
        <section className={styles.section}>
          <div className={styles.heroImage}>
            <Image
              src="/images/projects/excelra/hero.png"
              alt="Excelra Gostar platform overview"
              width={808}
              height={468}
              priority
              className={styles.roundedImage}
            />
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.sectionBody}>
              <p>GOSTAR is one of the world&apos;s largest medicinal chemistry databases, used by pharmaceutical researchers to identify promising drug candidates across millions of scientific records, publications, compounds, assays, and development programs.</p>
              <p>I worked as the sole designer on the redesign of the platform&apos;s search experience. The goal was to make a powerful but highly complex system easier to understand, navigate, and use without reducing its analytical capabilities.</p>
              <p>The redesign focused on helping both occasional and expert users find answers faster while supporting the advanced search workflows required by scientific research.</p>
            </div>
          </div>
        </section>

        {/* Section: Understanding the Search Problem */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Understanding the Search Problem</h2>
            <div className={styles.sectionBody}>
              <p>The existing platform had evolved over many years and accumulated a large number of search methods, filters, and interaction patterns. While the system was extremely powerful, it was also difficult to learn and often overwhelming for less experienced users.</p>
              <p>Researchers had to navigate a large number of options before even beginning their search.</p>
              <p>One of the core challenges was supporting two very different user groups:</p>
              <ul>
                <li>users who wanted to search and get answers quickly</li>
                <li>expert researchers who needed precise control over complex scientific queries</li>
              </ul>
              <p>The redesign needed to support both workflows without creating separate products or sacrificing capability.</p>
            </div>
          </div>
        </section>

        {/* Carousel: Before/After */}
        <ImageCarousel
          images={[
            { src: '/images/projects/excelra/after.png', alt: 'Redesigned Excelra search', width: 800, height: 436 },
            { src: '/images/projects/excelra/before.png', alt: 'Original Excelra search design', width: 746, height: 436 },
          ]}
          caption="Redesigned page and Initial design"
        />

        {/* Section: Designing Multiple Paths to Discovery */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Designing Multiple Paths to Discovery</h2>
            <div className={styles.sectionBody}>
              <p>Rather than forcing all users through the same workflow, I designed multiple ways to access the database depending on the user&apos;s goals and expertise.</p>
              <p>The new experience introduced:</p>
              <ul>
                <li>Basic Search for quick compound lookup</li>
                <li>Basic Search + Filters for experienced users</li>
                <li>Guided Search for complex research workflows</li>
              </ul>
              <p>This allowed novice users to start with familiar search patterns while still giving power users access to the advanced capabilities they depended on.</p>
              <p>While researching solutions, I looked beyond chemistry products and studied how people interact with search in everyday tools such as Gmail, Jira, Amazon, and other data-heavy platforms. Many of these interaction patterns proved more intuitive than those commonly found in scientific software.</p>
            </div>
          </div>
        </section>

        {/* Carousel: Search flows */}
        <ImageCarousel
          images={[
            { src: '/images/projects/excelra/search-1.png', alt: 'Basic search', width: 800, height: 499 },
            { src: '/images/projects/excelra/search-2.png', alt: 'Search with filters', width: 800, height: 499 },
            { src: '/images/projects/excelra/search-3.png', alt: 'Complex query construction', width: 800, height: 496 },
          ]}
          caption="Basic search and constructing of complex query"
        />

        {/* Section: Guided Search */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Guided Search</h2>
            <div className={styles.sectionBody}>
              <p>The most challenging part of the project was helping users construct highly specific scientific searches without becoming overwhelmed by the number of available parameters.</p>
              <p>Researchers could combine dozens of criteria, creating countless possible query combinations and intersections.</p>
              <p>One of the biggest usability risks was that users could easily create a query that returned no results without understanding why.</p>
              <p>To address this, the interface was designed around progressive disclosure, showing complexity only when needed while keeping the overall workflow approachable.</p>
              <p>As users refined their searches, the system continuously updated expected result counts, helping them understand the impact of their decisions before executing a query. This reduced trial-and-error behavior and gave users more confidence when building complex searches.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <video
                src="/videos/excelra-guided-search.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Preview of Guided search example</figcaption>
          </figure>
        </section>

        {/* Section: Reimagining Search Results */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Reimagining Search Results</h2>
            <div className={styles.sectionBody}>
              <p>Search results became another major focus of the redesign. The previous experience displayed information across 26 separate result sections, making it difficult for users to understand relationships between different types of scientific data.</p>
              <p>After analyzing the underlying data structure and usage patterns, I reorganized the results into five primary categories:</p>
              <ul>
                <li>Structures</li>
                <li>Activities</li>
                <li>Assays</li>
                <li>Documents</li>
                <li>Development Compounds</li>
              </ul>
              <p>This significantly improved information hierarchy, reduced duplication, and made exploration much more efficient.</p>
              <p>The goal was not simply to display results, but to help researchers discover connections between compounds, studies, patents, and development programs more quickly.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <video
                src="/videos/excelra-results.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Search results and filtering them</figcaption>
          </figure>
        </section>

        {/* Two-column section: Quick search + Saving */}
        <section className={localStyles.twoCol}>
          <div className={localStyles.col}>
            <h2 className={styles.sectionTitle}>Quick search</h2>
            <div className={styles.sectionBody}>
              <p>A simplified method for casting wide queries</p>
              <p>For frequent or power users who know what they are looking for, the quick search functionality is designed to use predictive text entry and organize potential result matches based on the most relevant and important categories or characteristics.</p>
            </div>
            <div className={localStyles.colImage}>
              <Image
                src="/images/projects/excelra/quick-search.png"
                alt="Quick search interface"
                width={380}
                height={483}
                className={styles.screenshotImage}
              />
            </div>
          </div>
          <div className={localStyles.col}>
            <h2 className={styles.sectionTitle}>Saving and Monitoring Research</h2>
            <div className={styles.sectionBody}>
              <p>Research is rarely completed in a single session.</p>
              <p>To support long-term workflows, users could save both searches and compound pages for future reference.</p>
              <p>Saved queries also allowed researchers to monitor changes over time and receive updates when new information became available, making the platform more valuable as an ongoing research tool rather than a one-time search destination.</p>
            </div>
            <div className={localStyles.colImage}>
              <Image
                src="/images/projects/excelra/saved-search.png"
                alt="Saved searches interface"
                width={380}
                height={532}
                className={styles.screenshotImage}
              />
            </div>
          </div>
        </section>

        {/* Section: Exploring Compound Intelligence */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Exploring Compound Intelligence</h2>
            <div className={styles.sectionBody}>
              <p>The compound leaflet serves as the primary destination for detailed scientific information. I redesigned the page structure to make large volumes of data easier to navigate and consume, helping researchers move between related information more efficiently.</p>
              <p>The new structure improved discoverability while reducing the effort required to locate relevant information across complex scientific records.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <video
                src="/videos/excelra-compound.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Initial designs for the first version.</figcaption>
          </figure>
        </section>

        {/* Section: Impact */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Impact</h2>
            <div className={styles.sectionBody}>
              <p>The redesign significantly improved how researchers interacted with one of the largest medicinal chemistry databases in the industry.</p>
              <p>The new guided search experience made advanced search functionality more approachable while preserving the flexibility required by expert users.</p>
              <p>Most importantly, the time required to move from search to meaningful results was reduced from 30–60+ seconds to approximately 10 seconds, representing a substantial improvement in research efficiency.</p>
              <p>The success of the redesign led to a broader partnership with Excelra and additional product initiatives beyond the original scope of the engagement.</p>
            </div>
          </div>
        </section>
      </article>

      <OtherProjects currentSlug="excelra" />
      
    </>
  );
}
