'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/lib/data';

const navLinks = [
  { href: '#team', key: 'team' },
  { href: '#services', key: 'services' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language } = useLanguage();
  const dict = dictionaries[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <img src="/images/B7.png" alt="B7 Dev" style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '8px' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
          <span className={`${styles.logoIcon} hidden`}>B7</span>
          <span className={styles.logoText}>B7 Dev</span>
        </a>

        <nav className={`${styles.nav} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${activeSection === link.href ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {dict[link.key as keyof typeof dict]}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 rtl:mr-4 rtl:ml-0">
            <LanguageToggle />
            <ThemeToggle />
            <a href="#contact" className={`btn btn-primary btn-sm ${styles.navCta}`} onClick={(e) => handleNavClick(e, '#contact')}>
              {dict.contact}
            </a>
          </div>
        </nav>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
