import Image from 'next/image';
import Link from 'next/link';

import OtherProjects from '@/components/OtherProjects';
import { ImageCarousel } from '@/components/ImageCarousel';
import styles from '../infor-epm-excel/page.module.css';

export default function EpmDesignSystemPage() {
  return (
    <>
      <article className={styles.container}>
        <Link href="/#work" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 9H3M3 9L8 4M3 9L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to all designs</span>
        </Link>

        <h1 className={styles.title}>EPM Design System</h1>

        {/* Overview */}
        <section className={styles.section}>
          <div className={styles.heroImage}>
            <div className={styles.screenshotShadow}>
              <Image src="/images/projects/epm-library/hero.png" alt="EPM Design System overview" width={800} height={676} priority className={styles.screenshotImage} />
            </div>
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.sectionBody}>
              <p>Over nine years working on Infor EPM, I built and evolved the product&apos;s design system through four major generations, with a fifth currently underway.</p>
              <p>What started as a visual consistency initiative eventually became a design-to-code ecosystem supporting thousands of screens, dozens of product modules, multiple themes, and a React component library shared across the entire product.</p>
              <p>I was responsible for defining component specifications, maintaining the Figma library, collaborating with front-end developers, supporting adoption across the product team, and helping shape long-term design system strategy.</p>
            </div>
          </div>
        </section>

        {/* Building the First Foundation */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Building the First Foundation</h2>
            <div className={styles.sectionBody}>
              <p>When I joined the team, the product had no centralized design system.</p>
              <p>Years of product growth had resulted in inconsistent patterns, styles, spacing, colors, and interaction behaviors spread across thousands of screens.</p>
              <p>My first challenge was conducting a large-scale audit of the product and identifying common patterns that could be standardized into reusable components.</p>
              <p>The process took nearly a year. Every major screen and workflow had to be analyzed, compared, and consolidated into a shared visual language.</p>
              <p>The goal was not simply creating components, but creating consistency across an entire enterprise platform.</p>
            </div>
          </div>
        </section>

        {/* Carousel: First components library */}
        <ImageCarousel
          images={[
            { src: '/images/projects/epm-library/carousel-1.png', alt: 'First components library 2017', width: 800, height: 490 },
            { src: '/images/projects/epm-library/carousel-2.png', alt: 'Components library 2018', width: 778, height: 490 },
            { src: '/images/projects/epm-library/carousel-3.png', alt: 'Components library 2019', width: 743, height: 490 },
            { src: '/images/projects/epm-library/carousel-4.png', alt: 'Components library evolution', width: 771, height: 490 },
          ]}
          caption="First components Library from 2017-2019"
        />

        {/* From Design System to Design-to-Code */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>From Design System to Design-to-Code</h2>
            <div className={styles.sectionBody}>
              <p>One of the most important lessons I learned was that design systems become significantly more valuable when connected directly to code.</p>
              <p>After defining the initial component set, I worked closely with front-end developers to translate the design system into reusable React components.</p>
              <p>The workflow typically looked like this:</p>
              <ol>
                <li>Identify a design problem or recurring pattern.</li>
                <li>Validate whether some existing component could already solve it.</li>
                <li>Create specifications covering behavior, accessibility, theming, and use cases.</li>
                <li>Review implementation with developers.</li>
                <li>Validate implementation and iterate when edge cases appeared.</li>
              </ol>
              <p>Once implemented, React became the source of truth.</p>
              <p>While Figma components can be modified accidentally or diverge over time, implemented components remain stable and governed through development processes, making them a much more reliable foundation for long-term consistency.</p>
            </div>
          </div>
        </section>

        {/* Carousel: React library screenshots */}
        <ImageCarousel
          images={[
            { src: '/images/projects/epm-library/react-lib-1.png', alt: 'React component library', width: 800, height: 520 },
            { src: '/images/projects/epm-library/react-lib-2.png', alt: 'React component documentation', width: 801, height: 520 },
          ]}
          caption="Screenshots from existing React Library"
        />

        {/* Scaling Across Thousands of Screens */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Scaling Across Thousands of Screens</h2>
            <div className={styles.sectionBody}>
              <p>As the product continued to grow, the design system became an increasingly important part of everyday work.</p>
              <p>Instead of repeatedly solving visual problems, designers could focus more on workflows, usability, and business requirements.</p>
              <p>The design process gradually shifted from creating interfaces from scratch to assembling solutions from proven building blocks.</p>
              <p>The library also improved:</p>
              <ul>
                <li>consistency</li>
                <li>accessibility</li>
                <li>development efficiency</li>
                <li>onboarding</li>
                <li>design quality</li>
              </ul>
              <p>For many workflows, building interfaces became closer to assembling Lego blocks than designing every screen from the ground up.</p>
            </div>
          </div>
        </section>

        {/* Carousel: Modern components */}
        <ImageCarousel
          images={[
            { src: '/images/projects/epm-library/scaling-1.png', alt: 'Component example 1', width: 800, height: 446 },
            { src: '/images/projects/epm-library/scaling-2.png', alt: 'Component example 2', width: 701, height: 446 },
            { src: '/images/projects/epm-library/scaling-3.png', alt: 'Component example 3', width: 738, height: 446 },
            { src: '/images/projects/epm-library/scaling-4.png', alt: 'Component example 4', width: 692, height: 446 },
            { src: '/images/projects/epm-library/scaling-5.png', alt: 'Component example 5', width: 572, height: 446 },
            { src: '/images/projects/epm-library/scaling-6.png', alt: 'Component example 6', width: 745, height: 446 },
            { src: '/images/projects/epm-library/scaling-7.png', alt: 'Component example 7', width: 646, height: 446 },
          ]}
          caption="Examples of modern components"
        />

        {/* Supporting Themes & Accessibility */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Supporting Themes &amp; Accessibility</h2>
            <div className={styles.sectionBody}>
              <p>As accessibility requirements and customer needs evolved, the design system expanded to support multiple themes.</p>
              <p>In addition to the default experience, I created Dark and Contrast themes using variables and tokens.</p>
              <p>This required every component to support theming consistently while maintaining visual quality and accessibility standards.</p>
              <p>The introduction of variables significantly changed how the library was structured and became one of the major reasons for rebuilding the system rather than continuing to patch older components.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <Image src="/images/projects/epm-library/themes.png" alt="Dark and contrast themes" width={800} height={534} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>Search results and filtering them</figcaption>
          </figure>
        </section>

        {/* Four Generations of Evolution */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Four Generations of Evolution</h2>
            <div className={styles.sectionBody}>
              <p>The design system evolved through four major generations.</p>
              <p><strong>Generation 1</strong><br/>Built from scratch in Sketch to standardize a large existing product.</p>
              <p><strong>Generation 2</strong><br/>Migration from Sketch to Figma as the platform matured and became the primary design tool.</p>
              <p><strong>Generation 3</strong><br/>Refactoring around Figma variants, nested components, and improved component architecture.</p>
              <p><strong>Generation 4</strong><br/>Complete redesign using variables and tokens to support theming and long-term scalability.</p>
              <p>Rather than chasing a &quot;perfect&quot; design system, each generation responded to changes in product requirements, team workflows, and design tooling.</p>
              <p>One of the biggest lessons was understanding that design systems are never finished. They continuously evolve alongside the product.</p>
            </div>
          </div>
        </section>

        {/* Carousel: Generations - Light, Dark and Contrast */}
        <ImageCarousel
          images={[
            { src: '/images/projects/epm-library/gen-1.png', alt: 'Light theme', width: 800, height: 569 },
            { src: '/images/projects/epm-library/gen-2.png', alt: 'Dark theme', width: 800, height: 569 },
            { src: '/images/projects/epm-library/gen-3.png', alt: 'Contrast theme', width: 800, height: 569 },
          ]}
          caption="Light, Dark and Contrast theme"
        />

        {/* Collaboration & Governance */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Collaboration &amp; Governance</h2>
            <div className={styles.sectionBody}>
              <p>The system was maintained through close collaboration between designers and developers.</p>
              <p>New components were introduced only after reviewing whether existing solutions could solve the problem first.</p>
              <p>Naming conventions, usage patterns, accessibility considerations, implementation complexity, and future scalability were all discussed before components entered the library.</p>
              <p>This governance process helped reduce duplication while keeping the system flexible enough to support product growth.</p>
              <p>The design system also became influential outside of the immediate team. The global Infor design organization regularly consulted me while developing their own component library, and many ideas, patterns, and improvements were shared between the two systems.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div>
              <Image src="/images/projects/epm-library/governance.png" alt="Component usage examples" width={800} height={399} className={styles.screenshotImage} />
            </div>
            <figcaption className={styles.caption}>Each component has examples how it should be used</figcaption>
          </figure>
        </section>

        {/* Looking Ahead */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Looking Ahead: AI &amp; Design Systems</h2>
            <div className={styles.sectionBody}>
              <p>As AI-assisted prototyping becomes more common, the relationship between design systems and code becomes even more important.</p>
              <p>Today, I am working on the next generation of the library with a stronger focus on AI-assisted workflows, React integration, semantic naming, and component documentation.</p>
              <p>The goal is not only helping designers create interfaces faster, but helping AI tools generate more accurate prototypes using existing production-ready components.</p>
              <p>In this model, clear documentation, predictable structure, and strong design-to-code alignment become just as important as visual consistency.</p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Impact</h2>
            <div className={styles.sectionBody}>
              <p>Over nearly a decade, the design system became the foundation of a large enterprise product consisting of thousands of screens and dozens of modules.</p>
              <p>It enabled greater consistency, improved accessibility, reduced duplication, accelerated design and development workflows, and helped designers focus more on solving user problems rather than rebuilding common UI patterns.</p>
              <p>More importantly, it created a shared language between design and engineering that continued evolving alongside the product, the team, and the technology stack.</p>
            </div>
          </div>
        </section>
      </article>

      <OtherProjects currentSlug="infor-epm-design-library" />
      
    </>
  );
}
