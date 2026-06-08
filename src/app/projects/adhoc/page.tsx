import Image from 'next/image';
import Link from 'next/link';

import OtherProjects from '@/components/OtherProjects';
import styles from '../infor-epm-excel/page.module.css';

export default function AdhocPage() {
  return (
    <>
      <article className={styles.container}>
        <Link href="/#work" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 9H3M3 9L8 4M3 9L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to all designs</span>
        </Link>

        <h1 className={styles.title}>Infor EPM – AdHoc Reporting Tool</h1>

        {/* Overview */}
        <section className={styles.section}>
          <div className={styles.heroImage}>
            <Image src="/images/projects/adhoc/hero.png" alt="AdHoc Reporting Tool overview" width={800} height={512} priority className={styles.roundedImage} />
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.sectionBody}>
              <p>Infor EPM AdHoc is a web-based analytical reporting tool built on top of the successful Excel Plugin experience. The goal was to bring multidimensional data exploration into the browser while expanding reporting, visualization, and dashboard capabilities.</p>
              <p>The product allowed finance teams and executives to browse large OLAP datasets, build reports, create visualizations, and share insights across the organization.</p>
              <p>My primary focus was the design of the reporting experience, including the Advanced Grid, interactive data exploration workflows, chart integration, report styling, and overall information architecture.</p>
              <p>Over time, the product became the foundation for several reporting and dashboard solutions within the Infor EPM ecosystem.</p>
            </div>
          </div>
        </section>

        {/* From Static Reports to Interactive Analysis */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>From Static Reports to Interactive Analysis</h2>
            <div className={styles.sectionBody}>
              <p>Before AdHoc, users primarily consumed data through highly customized reports created by administrators or power users.</p>
              <p>While these reports answered specific business questions, users had very limited ability to explore the underlying data, adjust views, investigate anomalies, or build their own analyses.</p>
              <p>The goal of AdHoc was to move beyond static reporting and give business users direct access to multidimensional data without requiring deep technical knowledge of OLAP systems.</p>
              <p>The challenge was making millions of interconnected data points accessible without overwhelming users with complexity.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div>
              <Image src="/images/projects/adhoc/interactive-grid.png" alt="Interactive grid" width={800} height={512} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>Grid is highly interactive</figcaption>
          </figure>
        </section>

        {/* Reusing What Already Worked */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Reusing What Already Worked</h2>
            <div className={styles.sectionBody}>
              <p>One of the most important product decisions was preserving the report configuration workflow from the Excel Plugin.</p>
              <p>The web platform created opportunities to redesign the experience completely, but doing so would have increased development effort, delayed adoption, and forced existing users to relearn familiar workflows.</p>
              <p>Instead, I intentionally reused the same configuration concepts and interaction patterns that users already understood from Excel.</p>
              <p>This reduced the learning curve, accelerated adoption, and allowed users to move seamlessly between Excel and the web experience while benefiting from the additional capabilities the browser environment provided.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <Image src="/images/projects/adhoc/config.png" alt="Report configuration" width={800} height={477} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>Initial designs for the first version.</figcaption>
          </figure>
        </section>

        {/* Designing the Advanced Grid */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Designing the Advanced Grid</h2>
            <div className={styles.sectionBody}>
              <p>The centerpiece of the product was the Advanced Grid.</p>
              <p>Traditional tables were not sufficient for multidimensional financial analysis. Users needed to understand where numbers originated, navigate across hierarchies, compare dimensions, and explore relationships between different parts of the data model.</p>
              <p>I designed a new grid experience that allowed users to:</p>
              <ul>
                <li>expand and collapse hierarchical headers</li>
                <li>drill into data</li>
                <li>swap axes</li>
                <li>sort and rank values</li>
                <li>filter results</li>
                <li>inspect data origins</li>
                <li>select data in multiple directions</li>
                <li>quickly return to the original state</li>
              </ul>
              <p>The goal was to transform the grid from a passive reporting surface into an active exploration tool.</p>
              <p>For advanced users, many interactions could also be performed through keyboard shortcuts, allowing faster navigation across large datasets.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <Image src="/images/projects/adhoc/advanced-grid.png" alt="Advanced Grid exploration" width={800} height={412} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>From on premise Windows only tool to Modern version to Future AI-first prototype.</figcaption>
          </figure>
        </section>

        {/* Making Financial Reports Easier to Read */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Making Financial Reports Easier to Read</h2>
            <div className={styles.sectionBody}>
              <p>Financial reports often rely on visual conventions that users recognize instantly: totals, subtotals, underlines, highlights, and exceptions.</p>
              <p>I designed a rule-based styling system that allowed users to define formatting once and automatically apply it across dynamic reports.</p>
              <p>Instead of manually styling individual cells, users could create reusable rules for:</p>
              <ul>
                <li>totals and subtotals</li>
                <li>important data points</li>
                <li>exception values</li>
                <li>financial reporting conventions</li>
                <li>custom formatting logic</li>
              </ul>
              <p>Because reports continuously changed as data evolved, rule-based styling helped maintain consistency while dramatically reducing manual effort.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div>
              <Image src="/images/projects/adhoc/styling.png" alt="Income Statement with formatting" width={800} height={454} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>Example of Income Statement formatted using build in tools.</figcaption>
          </figure>
        </section>

        {/* Connecting Data and Visualization */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Connecting Data and Visualization</h2>
            <div className={styles.sectionBody}>
              <p>Charts were designed as an extension of the reporting experience rather than a separate feature.</p>
              <p>Users could move between tabular and visual representations of the same data while maintaining context and preserving their analytical workflow.</p>
              <p>This allowed users to identify trends, compare values, and explore large datasets more effectively without constantly rebuilding reports or switching tools.</p>
              <p>The ability to save reports and visualizations as dashboard components further expanded how analytical insights could be shared across teams.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <Image src="/images/projects/adhoc/charts.png" alt="Charts and visualization" width={800} height={477} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>From on premise Windows only tool to Modern version to Future AI-first prototype.</figcaption>
          </figure>
        </section>

        {/* Evolving Toward AI-Assisted Analytics */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Evolving Toward AI-Assisted Analytics</h2>
            <div className={styles.sectionBody}>
              <p>The most recent evolution of the product introduced AI-assisted reporting and analytics.</p>
              <p>Traditionally, users interacted with reports through grids, filters, dimensions, and visualizations. While powerful, these workflows still required users to understand the structure of the underlying data.</p>
              <p>Working closely with developers, I helped define how AI could become a new entry point into the system.</p>
              <p>Instead of manually building reports, users could ask questions such as:</p>
              <p>&quot;What was my revenue in EMEA last year?&quot;</p>
              <p>and immediately receive either a direct answer or a generated report containing the relevant data.</p>
              <p>A key design challenge was balancing simplicity with transparency. Users needed the speed of natural language interactions while still maintaining visibility into how results were generated and the ability to refine, validate, and expand the analysis.</p>
              <p>Rather than replacing traditional analytical workflows, AI became an additional layer that helped users access complex data faster and with less effort.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div>
              <Image src="/images/projects/adhoc/ai.png" alt="AI-assisted analytics" width={800} height={483} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>From on premise Windows only tool to Modern version to Future AI-first prototype.</figcaption>
          </figure>
        </section>

        {/* Impact */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Impact</h2>
            <div className={styles.sectionBody}>
              <p>Infor AdHoc successfully transformed reporting from a static consumption experience into an interactive analytical environment.</p>
              <p>The Advanced Grid gave users direct access to multidimensional data, while rule-based styling, chart integration, and dashboard capabilities made reports easier to build, maintain, and share.</p>
              <p>The success of the grid architecture and report configuration workflows led to their adoption as foundational building blocks for additional reporting and dashboard products within the Infor EPM ecosystem.</p>
              <p>By combining familiar workflows with powerful exploration capabilities, the product helped make complex financial data more accessible, actionable, and easier to understand.</p>
            </div>
          </div>
        </section>
      </article>

      <OtherProjects currentSlug="infor-epm-adhoc" />
      
    </>
  );
}
