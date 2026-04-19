'use client';
import styles from './About.module.css';
import { teamData } from '@/lib/data';

export default function About({ settings }: { settings?: any }) {
  return (
    <section className={`section section--white ${styles.about}`} id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">A Team Built for <span style={{ color: '#660810' }}>Big Challenges</span></h2>
          <p className="section-subtitle">
            We combine technical excellence with business acumen to deliver software that doesn't just work — it wins.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className={styles.vmGrid}>
          <div className={styles.vmCard}>
            <div className={styles.vmIcon}>🎯</div>
            <h3 className={styles.vmTitle}>Our Vision</h3>
            <p className={styles.vmText}>{settings?.about_vision || teamData.about.vision}</p>
          </div>
          <div className={`${styles.vmCard} ${styles.vmCardPrimary}`}>
            <div className={styles.vmIcon}>🚀</div>
            <h3 className={styles.vmTitle}>Our Mission</h3>
            <p className={styles.vmText}>{settings?.about_mission || teamData.about.mission}</p>
          </div>
        </div>

        {/* Values */}
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Our Core Values</h3>
          <div className={styles.valuesGrid}>
            {teamData.about.values.map((value, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <div>
                  <h4 className={styles.valueName}>{value.title}</h4>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className={styles.specSection}>
          <h3 className={styles.specTitle}>What We Specialize In</h3>
          <div className={styles.specList}>
            {teamData.about.specializations.map((spec, i) => (
              <div key={i} className={styles.specItem}>
                <span className={styles.specCheck}>✓</span>
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
