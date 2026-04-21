'use client';
import styles from './About.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/lib/data';

export default function About({ settings }: { settings?: any }) {
  const { language } = useLanguage();
  const dict = dictionaries[language].experience;

  return (
    <section className={`section section--white ${styles.about}`} id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{dict.label}</div>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">
            {dict.subtitle}
          </p>
        </div>

        <div className={styles.valuesSection}>
          <div className={styles.valuesGrid}>
            {dict.points.map((point, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>🏆</div>
                <div>
                  <h4 className={styles.valueName}>{point.title}</h4>
                  <p className={styles.valueDesc}>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features / Why Choose Us */}
        <div className={styles.specSection}>
          <div className={styles.specList}>
            {dict.features.map((feature, i) => (
              <div key={i} className={styles.specItem}>
                <span className={styles.specCheck}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
