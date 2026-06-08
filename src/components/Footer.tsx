import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <h2 className={styles.heading}>Let&apos;s work together</h2>
      <div className={styles.socialLinks}>
        <a href="#" className={styles.socialLink} aria-label="Social link 1">
          <Image src="/images/social-link1.svg" alt="" width={24} height={24} />
        </a>
        <a href="#" className={styles.socialLink} aria-label="Social link 2">
          <Image src="/images/social-link2.svg" alt="" width={24} height={24} />
        </a>
        <a href="#" className={styles.socialLink} aria-label="Social link 3">
          <Image src="/images/social-link3.svg" alt="" width={24} height={24} />
        </a>
        <a href="#" className={styles.socialLink} aria-label="Social link 4">
          <Image src="/images/social-link4.svg" alt="" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
}
