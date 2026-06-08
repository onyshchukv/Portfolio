'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setIsOpen(false);
  }

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <button
          className={styles.toggle}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <span className={styles.hamburger} aria-hidden="true" />
        </button>

        <ul
          id="nav-menu"
          className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
          role="list"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
