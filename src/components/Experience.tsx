import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>Experience</h2>
        <a href="/Vladimir-Onyshchuk-CV-2026.pdf" download className={styles.downloadBtn}>
          <svg width="18" height="18" viewBox="0 0 13.5 14.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.btnIcon}>
            <path d="M2 8.5C3.10457 8.5 4 9.39543 4 10.5C4 11.6046 3.10457 12.5 2 12.5H1.5V14.5H0V8.5H2ZM7 8.5C8.10457 8.5 9 9.39543 9 10.5V12.5C9 13.6046 8.10457 14.5 7 14.5H5V8.5H7ZM13.5 10H11.5V11H13.5V12.5H11.5V14.5H10V8.5H13.5V10ZM6.5 13H7C7.27614 13 7.5 12.7761 7.5 12.5V10.5C7.5 10.2239 7.27614 10 7 10H6.5V13ZM1.5 11H2C2.27614 11 2.5 10.7761 2.5 10.5C2.5 10.2239 2.27614 10 2 10H1.5V11ZM13 5.18945V7.5H11.5V6.5H6.5V1.5H2.5V7.5H1V0H7.81055L13 5.18945ZM8 5H10.6895L8 2.31055V5Z" fill="white"/>
          </svg>
          Download CV
        </a>
      </div>      <div className={styles.list}>
        {/* Infor */}
        <article className={styles.item}>
          <div className={styles.date}>2016–2026</div>
          <div className={styles.content}>
            <h3 className={styles.company}>Infor</h3>
            <p className={styles.role}>Senior Product Designer</p>
            <p className={styles.description}>Infor is a global enterprise software company. Worked on the Enterprise Performance Management (EPM) suite, designing tools for financial planning, reporting, analytics, data discovery, and AI-assisted workflows.</p>
            <p className={styles.keyLabel}>Key Contributions</p>
            <ul className={styles.achievementsList}>
              <li>Designed and launched an MS Excel plugin that gave finance teams direct access to multidimensional OLAP data. The product later evolved into AdHoc, a web-based reporting and data discovery platform that became a core part of the EPM suite.</li>
              <li>Led the UX design of major EPM products, including reporting, dashboarding, analytics, and cloud migration initiatives, helping modernize a large enterprise platform used by global organizations.</li>
              <li>Built and evolved the EPM design system over multiple generations, from the first component library to a React-backed design-to-code workflow with support for theming, accessibility, and scalable product development.</li>
              <li>Worked closely with front-end developers to translate design patterns into reusable React components and establish a shared source of truth between design and engineering.</li>
              <li>Consulted Infor&apos;s global design team on component architecture, design system governance, and usability improvements, helping align local and company-wide design practices.</li>
              <li>Conducted user interviews, customer workshops, and stakeholder reviews to understand complex financial workflows and turn them into scalable product solutions.</li>
              <li>Introduced interactive prototyping into the design process, allowing teams to validate ideas earlier, improve collaboration, and reduce implementation risk.</li>
              <li>More recently, helped define AI-assisted reporting experiences that allow users to generate reports and explore business data using natural language.</li>
            </ul>
          </div>
        </article>

        {/* Neuron */}
        <article className={styles.item}>
          <div className={styles.date}>2021–2024</div>
          <div className={styles.content}>
            <h3 className={styles.company}>Neuron UX Agency</h3>
            <p className={styles.role}>Senior UX Design Consultant</p>
            <p className={styles.description}>Worked as a product design consultant across SaaS, enterprise, healthcare, marketing automation, scientific research, workforce management, and social platform products.</p>
            <p className={styles.keyLabel}>Key Contributions</p>
            <ul className={styles.achievementsList}>
              <li>Contributed to more than 10 product redesign and innovation projects as part of multidisciplinary design teams, helping clients improve usability, modernize legacy systems, and define future product direction.</li>
              <li>Led end-to-end design efforts on multiple projects, working directly with clients, stakeholders, subject matter experts, and development teams throughout discovery, strategy, UX, and delivery phases.</li>
              <li>Specialized in complex data-heavy products, including scientific research platforms, enterprise analytics tools, marketing automation systems, and workflow-intensive SaaS applications.</li>
              <li>Conducted user interviews, stakeholder workshops, usability reviews, and competitor analysis to uncover user needs, validate assumptions, and identify product opportunities.</li>
              <li>Defined information architecture, product structure, navigation systems, and interaction models for large-scale enterprise applications.</li>
              <li>Designed complex workflows, reporting experiences, search systems, automation tools, and data visualization interfaces that helped users navigate highly technical domains more efficiently.</li>
              <li>Created wireframes, prototypes, design systems, and high-fidelity UI while maintaining close collaboration with engineers to ensure successful implementation.</li>
              <li>Worked across the full product lifecycle, from discovery and concept validation through design delivery and implementation review.</li>
            </ul>
          </div>
        </article>

        {/* Bileto */}
        <article className={styles.item}>
          <div className={styles.date}>2015–2016</div>
          <div className={styles.content}>
            <h3 className={styles.company}>Bileto</h3>
            <p className={styles.role}>UX/UI Designer</p>
            <p className={styles.description}>Bileto is a cloud platform that enables transportation companies to manage routes, ticket sales, reservations, and online bookings.</p>
            <p className={styles.keyLabel}>Key Contributions</p>
            <ul className={styles.achievementsList}>
              <li>Owned the end-to-end product design process within a startup environment, working across discovery, UX, UI, prototyping, testing, and implementation.</li>
              <li>Conducted market and competitor research to identify opportunities, validate ideas, and inform product direction.</li>
              <li>Defined user flows and usage scenarios for both transportation operators and ticket buyers, helping shape the overall product experience.</li>
              <li>Created wireframes, interactive prototypes, and high-fidelity designs, iterating continuously based on stakeholder and user feedback.</li>
              <li>Tested clickable prototypes with target users to validate assumptions and improve usability before development.</li>
              <li>Worked closely with front-end developers throughout implementation, ensuring design quality and resolving UX issues during development.</li>
              <li>Supported business and sales activities by creating product presentations and visual materials used in client meetings and product demonstrations.</li>
            </ul>
            <p className={styles.keyLabel}>What I Learned</p>
            <p className={styles.description}>Working in a small startup taught me how to balance user needs, business goals, and technical constraints while moving quickly. It was my first experience owning an entire product design process from initial idea to released functionality.</p>
          </div>
        </article>

        {/* Aweb */}
        <article className={styles.item}>
          <div className={styles.date}>2014–2015</div>
          <div className={styles.content}>
            <h3 className={styles.company}>Aweb</h3>
            <p className={styles.role}>UX/UI Designer</p>
            <p className={styles.description}>Aweb is the most rewarded website promotion company in Ukraine. They consult and promote websites and online stores by rewriting texts, redesigning layouts and reprogramming code.</p>
          </div>
        </article>

        {/* Freelance */}
        <article className={styles.item}>
          <div className={styles.date}>2011–2015</div>
          <div className={styles.content}>
            <h3 className={styles.company}>Freelance</h3>
            <p className={styles.role}>UX/UI Designer and Project Manager</p>
            <p className={styles.description}>Designed various interfaces, mobile applications, dashboards, websites. Quite often managed distributed development team to deliver working websites for the clients.</p>
          </div>
        </article>
      </div>

      <div className={styles.bottomBtn}>
        <a href="/Vladimir-Onyshchuk-CV-2026.pdf" download className={styles.downloadBtn}>
          <svg width="18" height="18" viewBox="0 0 13.5 14.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.btnIcon}>
            <path d="M2 8.5C3.10457 8.5 4 9.39543 4 10.5C4 11.6046 3.10457 12.5 2 12.5H1.5V14.5H0V8.5H2ZM7 8.5C8.10457 8.5 9 9.39543 9 10.5V12.5C9 13.6046 8.10457 14.5 7 14.5H5V8.5H7ZM13.5 10H11.5V11H13.5V12.5H11.5V14.5H10V8.5H13.5V10ZM6.5 13H7C7.27614 13 7.5 12.7761 7.5 12.5V10.5C7.5 10.2239 7.27614 10 7 10H6.5V13ZM1.5 11H2C2.27614 11 2.5 10.7761 2.5 10.5C2.5 10.2239 2.27614 10 2 10H1.5V11ZM13 5.18945V7.5H11.5V6.5H6.5V1.5H2.5V7.5H1V0H7.81055L13 5.18945ZM8 5H10.6895L8 2.31055V5Z" fill="white"/>
          </svg>
          Download CV
        </a>
      </div>
    </section>
  );
}
