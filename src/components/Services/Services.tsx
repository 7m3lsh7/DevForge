'use client';
import styles from './Services.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/lib/data';

export default function Services() {
  const { language } = useLanguage();
  const dict = dictionaries[language].services;

  return (
    <section className={`section section--light ${styles.services}`} id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{dict.label}</div>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">
            {dict.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {dict.items.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.desc}</p>
              <div className={styles.hoverOverlay} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
