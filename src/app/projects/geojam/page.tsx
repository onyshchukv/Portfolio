import Image from 'next/image';
import Link from 'next/link';

import OtherProjects from '@/components/OtherProjects';
import styles from '../infor-epm-excel/page.module.css';
import localStyles from './page.module.css';

export default function GeojamPage() {
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
        <h1 className={styles.title}>Geojam</h1>

        {/* Section: Overview with hero illustration */}
        <section className={styles.section}>
          <div className={localStyles.heroIllustration}>
            <Image
              src="/images/projects/geojam/hero-vector.png"
              alt="Geojam mobile app illustration"
              width={579}
              height={644}
              priority
            />
          </div>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.sectionBody}>
              <p>Geojam is a social media mobile application for the future of the creator economy. Our team worked with Geojam to redesign their iOS and Android mobile applications, and web app management tools to reimagine their product and revamp their business.</p>
              <p>We also helped Geojam transition to a decentralized rewards and token system, supported by the release of their new $JAM coin.</p>
            </div>
          </div>
        </section>

        {/* Section: Scope of Work */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Scope of Work</h2>
            <div className={styles.sectionBody}>
              <p>In searching for a design partner, Geojam sought an embedded team that could work with their executives to reposition their business and overhaul their product. They were in need of a vendor to dive into the market and competitive landscape, uncover new opportunities through user research, develop the new product&apos;s roadmap, and support them throughout their growth.</p>
              <ul>
                <li>UX strategy</li>
                <li>Mobile application design</li>
                <li>Multi-vendor marketplace</li>
                <li>Token launch and staking platform</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Full-width green background image */}
        <div className={localStyles.fullWidthSection}>
          <div className={localStyles.greenSection}>
            <Image
              src="/images/projects/geojam/scope-image.png"
              alt="Geojam app screens on green background"
              width={1280}
              height={810}
            />
          </div>
        </div>

        {/* Section: Business Goals */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Business Goals</h2>
            <div className={styles.sectionBody}>
              <p>Our goal was to position the Geojam app as the ultimate place for fans and Creators to come together, closer than they&apos;ve ever been before.</p>
              <p>To achieve this, the product gives fans access to &apos;Communities&apos; of like-minded individuals that encourage creativity, experimentation, and communication with, and around, their favorite Creators. Communities give fans a place to celebrate their shared interests, while simultaneously engaging with, and helping their favorite Creators.</p>
            </div>
          </div>
          <div className={localStyles.goalsGrid}>
            <div className={localStyles.goalItem}>
              <span className={localStyles.goalTitle}>Increase engagement</span>
              <span className={localStyles.goalDescription}>All users are able to post photos, videos, polls, competitions, or proposals in Communities and earn rewards based on recognition and appreciation from others.</span>
            </div>
            <div className={localStyles.goalItem}>
              <span className={localStyles.goalTitle}>Natural content creation</span>
              <span className={localStyles.goalDescription}>Users are able to publish five different types of posts, including competitions with rewards, but all can be completed within four steps or less.</span>
            </div>
            <div className={localStyles.goalItem}>
              <span className={localStyles.goalTitle}>Embrace fandom</span>
              <span className={localStyles.goalDescription}>Allow all users to create within Communities instead of in individual feeds or profiles to further coalesce around shared fandom.</span>
            </div>
            <div className={localStyles.goalItem}>
              <span className={localStyles.goalTitle}>New two-sided marketplace</span>
              <span className={localStyles.goalDescription}>Any Fan or Creator can offer merchandise, curated experiences, and digital goods for sale in Geojam&apos;s Jam Shop via a custom peer-to-peer marketplace.</span>
            </div>
            <div className={localStyles.goalItem}>
              <span className={localStyles.goalTitle}>Empower the creator economy</span>
              <span className={localStyles.goalDescription}>Anyone on Geojam can be a Creator and earn directly from the content they publish on the app. Similar to Twitch, any user can voluntarily support another monetarily.</span>
            </div>
          </div>
        </section>

        {/* Full-width: Proposals section with bg + phones */}
        <div className={localStyles.fullWidthSection}>
          <div className={localStyles.proposalsSection}>
            <Image
              src="/images/projects/geojam/proposals-bg.png"
              alt=""
              fill
              className={localStyles.proposalsBg}
              aria-hidden="true"
            />
            <Image
              src="/images/projects/geojam/proposals-phones.png"
              alt="Geojam fan and creator proposal screens"
              width={1418}
              height={515}
              className={localStyles.proposalsPhones}
            />
          </div>
        </div>

        {/* Section: Fan and Creator Proposals */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Fan and Creator Proposals</h2>
            <div className={styles.sectionBody}>
              <p>Geojam Proposals are for both Creator- and Fan-generated initiatives to propose new features, as well as requests for Creator content and opportunities.</p>
              <p>Through Proposals, a community of fans can make requests of Creators, whether it&apos;s a nearby show, a collaboration, or a music video. Proposals are supported monetarily in the form of staked $JAM value.</p>
              <p>If the proposal is accepted by the Creator, they have a certain time period to accomplish the task and provide proof of completion.</p>
            </div>
          </div>
        </section>

        {/* Full-width dark: Putting Creators in touch */}
        <div className={localStyles.fullWidthSection}>
          <div className={localStyles.darkSection}>
            <div className={localStyles.darkContent}>
              <h2 className={localStyles.darkSectionTitle}>Putting Creators in touch with their audience</h2>
              <div className={localStyles.darkSideBySide}>
                <div className={localStyles.darkTextCol}>
                  <div className={localStyles.darkSectionBody}>
                    <p>The advent of the digital environment in the music industry has led to an explosion of consumer interaction; music actors have become deeply dependent on encouraging engagement with audiences and fans through this medium. Often, the goal is to induce fans to act in accordance with a marketing strategy and work within a campaign both as individuals and as a group.</p>
                  </div>
                  <div className={localStyles.darkSectionBody}>
                    <p>However, there is a lack of awareness into the music fans&apos; perspective of being a part of a fan-community, and a subsequent gap in giving fans the agency to make their collective desires heard. Geojam fills this void and lets Creators connect more deeply by putting their finger on the pulse of their audience.</p>
                  </div>
                </div>
                <div className={localStyles.darkImageCol}>
                  <Image
                    src="/images/projects/geojam/creators-phone.png"
                    alt="Geojam creator profile on mobile"
                    width={381}
                    height={454}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Consistent design for dynamic posts */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Consistent design for dynamic posts</h2>
            <div className={styles.sectionBody}>
              <p>Social content on Geojam comprises 5 types of posts. Content in all posts evolves overtime as a continued dialog between Fans and Creators leads to responsorial comments, photos, videos, and re-posts. The evolution and continued engagement between Fans and Creators encourages post creation. The creation of — and engagement with — posts is furthered by a rewards system that awards fans with JAM Shop merchandise, NFTs, access badges, and real world experiences.</p>
            </div>
          </div>
          <figure className={styles.figure}>
            <div>
              <Image
                src="/images/projects/geojam/dynamic-posts.png"
                alt="Dynamic post types showing the five content formats"
                width={800}
                height={567}
                className={styles.screenshotImage}
              />
            </div>
            <figcaption className={styles.caption}>Each component has examples how it should be used</figcaption>
          </figure>
        </section>

        {/* Full-width dark: Iterative design */}
        <div className={localStyles.fullWidthSection}>
          <div className={localStyles.darkWithImage}>
            <div className={localStyles.darkWrapContent}>
              <h2 className={localStyles.darkSectionTitle}>Iterative design and changing needs</h2>
              <div className={localStyles.darkSectionBody}>
                <p>Priorities inevitably shift when building new products and features. In working as an embedded team, Neuron was able to give Geojam the flexibility required to work in an agile fashion and meet their changing needs.</p>
              </div>
              <div className={localStyles.darkSectionBody}>
                <p>This meant repeatedly exploring and testing key aspects of the application such as: user-generated content, content creation, and content presentation in order to go to market with the best solution. Simultaneously, we were able to keep the iterative design process moving forward for the remainder of the features and meet our deadlines.</p>
              </div>
            </div>
            <div className={localStyles.darkWrapImage}>
              <Image
                src="/images/projects/geojam/wireframes.png"
                alt="Wireframes and user flows for Geojam"
                width={1120}
                height={1047}
              />
            </div>
          </div>
        </div>

        {/* Section: Impact */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Impact</h2>
            <div className={styles.sectionBody}>
              <p>Over the course of 8 months, our collaborative engagement with Geojam yielded an updated brand system, the launch of a new marketing site and token sale platform, a new design system, and developer-ready designs. The new Geojam app will now be released in phases starting with an MVP and iterating towards the full-feature experience.</p>
              <p>Most importantly, Geojam now has a clear north star as a business – one that they can champion going forward and pursue the right initiatives.</p>
            </div>
          </div>
        </section>
      </article>

      <OtherProjects currentSlug="geojam" />
    </>
  );
}
