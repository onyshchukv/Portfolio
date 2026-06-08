import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  name: string;
  tagline: string;
}

export default function Hero({ name, tagline }: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Introduction" id="about">
      <div className={styles.content}>
        <div className={styles.profilePic}>
          <Image
            src="/images/profile.png"
            alt="Volodymyr's profile illustration"
            width={184}
            height={184}
            priority
          />
        </div>
        <h1 className={styles.name}>Volodymyr Onyshchuk</h1>
        <div className={styles.bio}>
          <p>Senior Product Designer focused on enterprise software, analytics, and AI.</p>
          <p>Over the last 15 years, I&apos;ve worked on enterprise analytics, financial planning, scientific research, marketing automation, and AI-assisted products, helping users make sense of large amounts of data and complex workflows.</p>
          <p>My work focuses on information architecture, workflow design, design systems, and turning technically complex products into experiences people can actually understand and use.</p>
        </div>
      </div>
    </section>
  );
}
