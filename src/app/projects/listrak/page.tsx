import Image from 'next/image';
import Link from 'next/link';

import OtherProjects from '@/components/OtherProjects';
import { ImageCarousel } from '@/components/ImageCarousel';
import styles from '../infor-epm-excel/page.module.css';

export default function ListrakPage() {
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
        <h1 className={styles.title}>Listrak</h1>

        {/* Section: Overview */}
        <section className={styles.section}>
          <div className={styles.heroImage}>
            <Image
              src="/images/projects/listrak/hero.png"
              alt="Listrak platform overview"
              width={800}
              height={598}
              priority
              className={styles.roundedImage}
            />
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.sectionBody}>
              <p>Listrak is an enterprise marketing automation platform used by more than 1,000 retailers and brands to manage customer communication across email, SMS, push notifications, and other channels.</p>
              <p>I worked as part of a team of three designers on the redesign of the platform. I was focusing primarily on navigation, feature architecture, campaign workflows, and the automation builder experience.</p>
              <p>The goal was not simply to refresh the UI, but to untangle years of accumulated complexity while preserving the flexibility enterprise marketers relied on every day.</p>
            </div>
          </div>
        </section>

        {/* Section: Understanding a Complex Existing System */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Understanding a Complex Existing System</h2>
            <div className={styles.sectionBody}>
              <p>Listrak already had a mature platform with years of business logic, advanced workflows, and deeply interconnected features. One of the biggest challenges was understanding how the system actually worked before redesigning it.</p>
              <p>New workflows, dependencies, and hidden edge cases constantly surfaced throughout the project.</p>
              <p>We had regular workshops and reviews with stakeholders, internal teams, and domain experts multiple times a week. At the same time, I actively used both Listrak and competing platforms to better understand real marketing workflows and identify opportunities for simplification.</p>
              <p>The project quickly became less about visual redesign and more about restructuring complexity into something users could navigate and reason about more naturally.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div>
              <Image
                src="/images/projects/listrak/dashboard.png"
                alt="Listrak configurable dashboard"
                width={800}
                height={606}
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Main dashboard is adjustable, user can configure the data they need the most.</figcaption>
          </figure>
        </section>

        {/* Section: Redesigning Campaign Automation */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Redesigning Campaign Automation</h2>
            <div className={styles.sectionBody}>
              <p>One of the largest redesign efforts focused on the campaign automation experience. The original workflow builder had evolved over many years and became difficult to scan, maintain, and expand.</p>
              <p>As campaigns grew larger and supported more communication channels, the interface accumulated visual noise and interaction complexity.</p>
              <p>I worked heavily on restructuring the automation experience to improve:</p>
              <ul>
                <li>workflow readability</li>
                <li>node organization</li>
                <li>hierarchy clarity</li>
                <li>conditional logic visibility</li>
                <li>contextual editing</li>
                <li>multi-channel orchestration</li>
              </ul>
              <p>A major challenge was balancing flexibility with simplicity. Advanced marketers needed powerful automation capabilities, but large customer journeys also had to remain understandable at a glance.</p>
              <p>The redesigned builder introduced a cleaner node structure, improved grouping logic, and more predictable interaction patterns that made large workflows easier to manage without limiting functionality.</p>
              <p>Users could create automated journeys combining Email, SMS, push notifications, delays, audience splits, conditions, and behavioral triggers within a single visual workflow.</p>
            </div>
          </div>
        </section>

        {/* Carousel: Campaign automation before/after */}
        <ImageCarousel
          images={[
            { src: '/images/projects/listrak/carousel-1.png', alt: 'Original campaign automation design', width: 800, height: 495 },
            { src: '/images/projects/listrak/carousel-2.png', alt: 'Redesigned campaign automation', width: 800, height: 495 },
          ]}
          caption="Initial design and redesigned page."
        />

        {/* Section: Building Multi-Channel Campaign Workflows */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Building Multi-Channel Campaign Workflows</h2>
            <div className={styles.sectionBody}>
              <p>Modern marketing campaigns rarely live inside a single communication channel, but many existing tools still forced users to manage Email, SMS, web push, and mobile push separately.</p>
              <p>One of the goals of the redesign was creating a unified campaign workflow where marketers could orchestrate communication across channels from one place.</p>
              <p>The challenge was preventing the experience from becoming overwhelming as campaign complexity increased. To improve clarity, we focused on:</p>
              <ul>
                <li>reducing duplicated workflows</li>
                <li>making channel relationships more visible</li>
                <li>simplifying campaign configuration</li>
                <li>keeping actions contextual and easy to scan</li>
              </ul>
              <p>This helped marketers manage more sophisticated campaigns while reducing operational friction.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <video
                src="/videos/listrak-broadcasting.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Process of setting up message broadcasting methods.</figcaption>
          </figure>
        </section>

        {/* Section: Making Audience Logic Easier to Understand */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Making Audience Logic Easier to Understand</h2>
            <div className={styles.sectionBody}>
              <p>Audience targeting became increasingly difficult as campaigns expanded across multiple communication channels.</p>
              <p>To make segmentation behavior easier to understand, we designed visual tools that showed how audience groups overlapped and how notifications would be distributed across channels.</p>
              <p>Instead of forcing users to mentally calculate complex targeting logic, the interface provided a clearer overview of audience intersections and delivery coverage.</p>
              <p>This made campaign setup more predictable and helped reduce mistakes in multi-channel communication flows.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <Image
                src="/images/projects/listrak/audience.png"
                alt="Audience coverage chart"
                width={800}
                height={501}
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Chart shows audience coverage with various channels overlaps.</figcaption>
          </figure>
        </section>

        {/* Section: Creating a More Flexible Content Experience */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Creating a More Flexible Content Experience</h2>
            <div className={styles.sectionBody}>
              <p>Another major area of the redesign focused on content creation and personalization workflows. The new no-code email builder gave marketers a more visual and flexible editing experience without requiring HTML knowledge.</p>
              <p>The interface combined drag-and-drop editing, reusable content blocks, configuration panels, and layout controls while keeping the workflow approachable for non-technical users.</p>
              <p>I worked on simplifying the overall editing experience while preserving the level of control advanced marketing teams expected.</p>
              <p>We also redesigned how dynamic and event-based content was managed inside campaigns. Instead of duplicating entire emails for seasonal promotions or events such as Black Friday, marketers could inject event-specific content blocks into existing campaigns automatically.</p>
              <p>This reduced content duplication, simplified maintenance, and created a more scalable personalization workflow.</p>
              <p>The system also supported conditional logic and dynamic content, allowing campaigns to adapt automatically based on customer behavior, segmentation, and product data while keeping the editing experience understandable.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.screenshotShadow}>
              <video
                src="/videos/listrak-email-builder.mp4"
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
              <p>The redesign helped transform Listrak into a more scalable and modern enterprise marketing platform while preserving the flexibility advanced users depended on.</p>
              <p>The client was highly involved throughout the project, and many product decisions were shaped through continuous collaboration, workshops, and iterative feedback sessions.</p>
              <p>By restructuring navigation, simplifying complex workflows, and modernizing campaign orchestration, the redesign created a stronger foundation for future product growth and improved the overall usability of the platform without sacrificing depth or capability.</p>
            </div>
          </div>
        </section>
      </article>

      <OtherProjects currentSlug="listrak" />
      
    </>
  );
}
