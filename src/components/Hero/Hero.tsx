'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/lib/data';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero({ settings }: { settings?: any }) {
  const { language } = useLanguage();
  const dict = dictionaries[language].hero;
  const navDict = dictionaries[language].nav;

  return (
    <section className={styles.hero} id="home">
      {/* Animated background shapes */}
      <div className={styles.bgShapes}>
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={`badge ${styles.badge}`}>
            <span className={styles.badgeDot} />
            {dict.badge}
          </div>

          <h1 className={styles.headline}>
            {settings?.hero_title || (
              <>
                {dict.title}{' '}
                <span style={{ color: '#660810' }}>{dict.titleHighlight}</span>
              </>
            )}
          </h1>

          <p className={styles.description}>
            {settings?.hero_subtitle || dict.subtitle}
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={`btn btn-primary btn-lg ${styles.btnPrimary}`}
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              {dict.ctaPrimary}
            </a>
            <a href="#contact" className={`btn btn-outline btn-lg ${styles.btnOutline}`}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              {navDict.contact}
            </a>
          </div>

          {/* Trust indicators */}
          <div className={styles.trust}>
            <div className={styles.trustAvatars}>
              {['JR', 'MG', 'AA', 'SL'].map((init, i) => (
                <div key={i} className={styles.trustAvatar} style={{ zIndex: 4 - i }}>
                  {init}
                </div>
              ))}
            </div>
            <div className={styles.trustText}>
              <div className={styles.stars}>★★★★★</div>
              <span>Trusted by 85+ businesses worldwide</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {/* Floating card */}
          <div className={styles.visualCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span /><span /><span />
              </div>
              <span className={styles.cardTitle}>live_dashboard.tsx</span>
            </div>
            <div className={styles.codeBlock}>
              <div className={styles.codeLine}><span className={styles.codeKeyword}>const</span> <span className={styles.codeVar}>solution</span> = <span className={styles.codeKeyword}>await</span></div>
              <div className={styles.codeLine}>  <span className={styles.codeFunc}>DevForge</span><span className={styles.codePunct}>.</span><span className={styles.codeFunc}>build</span><span className={styles.codePunct}>(&#123;</span></div>
              <div className={styles.codeLine}>    <span className={styles.codeProp}>idea</span><span className={styles.codePunct}>:</span> <span className={styles.codeStr}>yourVision</span><span className={styles.codePunct}>,</span></div>
              <div className={styles.codeLine}>    <span className={styles.codeProp}>quality</span><span className={styles.codePunct}>:</span> <span className={styles.codeStr}>"enterprise"</span><span className={styles.codePunct}>,</span></div>
              <div className={styles.codeLine}>    <span className={styles.codeProp}>timeline</span><span className={styles.codePunct}>:</span> <span className={styles.codeStr}>"on-schedule"</span></div>
              <div className={styles.codeLine}>  <span className={styles.codePunct}>&#125;);</span></div>
              <div className={`${styles.codeLine} ${styles.codeComment}`}>// ✓ Production ready</div>
            </div>

            {/* Status indicators */}
            <div className={styles.statusRow}>
              <div className={styles.statusItem}>
                <div className={`${styles.statusDot} ${styles.green}`} />
                <span>All systems operational</span>
              </div>
              <div className={styles.statusItem}>
                <div className={`${styles.statusDot} ${styles.blue}`} />
                <span>3 projects in progress</span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
            <span className={styles.floatIcon}>⚡</span>
            <div>
              <div className={styles.floatTitle}>Fast Delivery</div>
              <div className={styles.floatSub}>On time, every time</div>
            </div>
          </div>
          <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
            <span className={styles.floatIcon}>🛡️</span>
            <div>
              <div className={styles.floatTitle}>Enterprise Grade</div>
              <div className={styles.floatSub}>99.9% uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {dict.stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statValue}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
