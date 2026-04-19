'use client';
import styles from './Services.module.css';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className={`section section--light`} id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Services We <span style={{ color: '#660810' }}>Deliver</span></h2>
          <p className="section-subtitle">
            End-to-end software development services tailored to businesses that want to build products that last.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feat, i) => (
                  <li key={i} className={styles.feature}>
                    <svg className={styles.check} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className={styles.hoverOverlay} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
