'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Achievements.module.css';
import { teamData } from '@/lib/data';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
          const steps = 80;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className={styles.countValue}>{count}{suffix}</div>;
}

const extra = [
  { label: 'Lines of Code Written', value: '2M+', icon: '📝' },
  { label: 'GitHub Repositories', value: '200+', icon: '📦' },
  { label: 'Bug-free Deployments', value: '98%', icon: '✅' },
  { label: 'Client Retention Rate', value: '94%', icon: '♻️' },
];

export default function Achievements() {
  return (
    <section className={`section ${styles.section}`} id="achievements">
      <div className="container">
        <div className={styles.inner}>
          <div className="section-header" style={{ textAlign: 'left' }}>
            <div className="section-label" style={{ justifyContent: 'flex-start' }}>Results</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Numbers That <span style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)' }}>Prove It</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              Every metric represents a real commitment to quality and results.
            </p>
          </div>

          <div className={styles.mainGrid}>
            {teamData.stats.map((stat, i) => (
              <div key={i} className={styles.countCard}>
                <Counter target={stat.value} suffix={stat.suffix} />
                <div className={styles.countLabel}>{stat.label}</div>
                <div className={styles.countBar} />
              </div>
            ))}
          </div>

          <div className={styles.extraGrid}>
            {extra.map((item, i) => (
              <div key={i} className={styles.extraItem}>
                <span className={styles.extraIcon}>{item.icon}</span>
                <div className={styles.extraValue}>{item.value}</div>
                <div className={styles.extraLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
