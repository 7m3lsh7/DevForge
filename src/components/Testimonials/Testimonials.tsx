'use client';
import styles from './Testimonials.module.css';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className={`section section--white`} id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Client Reviews</div>
          <h2 className="section-title">What Our <span style={{ color: '#660810' }}>Clients Say</span></h2>
          <p className="section-subtitle">
            Don't take our word for it. Hear from the businesses we've helped transform.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              {/* Quote icon */}
              <div className={styles.quoteIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#660810" opacity="0.15">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Stars */}
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>

              {/* Text */}
              <p className={styles.text}>"{t.text}"</p>

              {/* Author */}
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaText}>Ready to be our next success story?</div>
          <a href="#contact" className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
