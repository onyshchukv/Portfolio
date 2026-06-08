'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectList from '@/components/ProjectList';
import Experience from '@/components/Experience';

export default function HomePage() {
  return (
    <>
      <Hero
        name="Volodymyr"
        tagline="Crafting intuitive digital experiences"
      />
      <MainContent />
    </>
  );
}

function MainContent() {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'contact'>('projects');

  return (
    <>
      <ProjectList activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'experience' && <Experience />}
      {activeTab === 'contact' && <ContactSection />}
    </>
  );
}

function ContactSection() {
  return (
    <section style={{ padding: '0 240px 120px', maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }} id="contact">
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'var(--font-weight-bold)' as any, letterSpacing: '-0.48px', lineHeight: '1.4', marginBottom: '24px' }}>Contact</h2>
        <div style={{ fontSize: '18px', color: 'rgba(0,0,0,0.45)', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '12px', fontWeight: 500 }}>
          <p>Tel. <a href="tel:+420608567730" style={{ color: '#004dff' }}>608 567 730</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/vonyshchuk/" target="_blank" rel="noopener noreferrer" style={{ color: '#004dff' }}>linkedin.com/in/vonyshchuk</a></p>
          <p>Email: <a href="mailto:onyshchukv@gmail.com" style={{ color: '#004dff' }}>onyshchukv@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}
