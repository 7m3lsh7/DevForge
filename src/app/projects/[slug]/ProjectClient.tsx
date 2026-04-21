'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/lib/data';

export default function ProjectClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const dict = dictionaries[language].projects;

  const project = dict.items.find((p: any) => p.slug === slug);
  if (!project) return <div className="pt-40 text-center">Project Not Found</div>;

  const related = dict.items.filter((p: any) => p.slug !== slug).slice(0, 3);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <div className={styles.hero} style={{ background: project.gradient }}>
        <div className={styles.heroPattern} />
        <div className={`container ${styles.heroContent}`}>
          <Link href="/#projects" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rtl:rotate-180">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {language === 'ar' ? 'العودة للمشاريع' : 'Back to Projects'}
          </Link>
          <div className={styles.heroCat}>{project.category}</div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroDesc}>{project.description}</p>

          {/* Key results */}
          <div className={styles.heroResults}>
            {project.results.map((r: string, i: number) => (
              <div key={i} className={styles.heroResult}>
                <div className={styles.heroResultDot} />
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <div className={styles.body}>
          {/* Main content */}
          <div className={styles.content}>
            {/* Challenge */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🎯</span>
                {language === 'ar' ? 'التحدي' : 'The Challenge'}
              </h2>
              <p className={styles.sectionText}>{project.challenge}</p>
            </section>

            {/* Solution */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>💡</span>
                {language === 'ar' ? 'الحل المقدم' : 'Our Solution'}
              </h2>
              <p className={styles.sectionText}>{project.solution}</p>
            </section>

            {/* Screenshots mockup */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🖥️</span>
                {language === 'ar' ? 'معاينة المشروع' : 'Project Preview'}
              </h2>
              <div className={styles.screenshots}>
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className={styles.screenshot}
                    style={{ background: project.gradient, opacity: i === 1 ? 1 : i === 2 ? 0.7 : 0.5 }}
                  >
                    <div className={styles.ssPattern} />
                    <div className={styles.ssLabel}>{language === 'ar' ? 'شاشة' : 'Screen'} {i}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results deep dive */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📈</span>
                {language === 'ar' ? 'النتائج والتأثير' : 'Key Results & Impact'}
              </h2>
              <div className={styles.resultsGrid}>
                {project.results.map((r: string, i: number) => (
                  <div key={i} className={styles.resultCard}>
                    <div className={styles.resultNum}>{i + 1}</div>
                    <p className={styles.resultText}>{r}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Tech stack */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>{language === 'ar' ? 'التقنيات المستخدمة' : 'Tech Stack'}</h3>
              <div className={styles.tags}>
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>{language === 'ar' ? 'فريق العمل' : 'Team Roles'}</h3>
              <div className={styles.teamList}>
                {project.team.map((member: string, i: number) => (
                  <div key={i} className={styles.teamItem}>
                    <div className={styles.teamDot} />
                    {member}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={styles.sideCta}>
              <h3>{language === 'ar' ? 'هل أعجبك ما ترى؟' : 'Like What You See?'}</h3>
              <p>{language === 'ar' ? 'دعنا نبني شيئاً مشابهاً لمشروعك.' : 'Let\'s build something similar for your business.'}</p>
              <Link href="/#contact" className={`btn btn-primary`} style={{ display: 'block', textAlign: 'center' }}>
                {language === 'ar' ? 'تواصل معنا الآن' : 'Start a Conversation'}
              </Link>
            </div>
          </aside>
        </div>

        {/* Related */}
        <div className={styles.related}>
          <h2 className={styles.relatedTitle}>{language === 'ar' ? 'مشاريع أخرى' : 'More Projects'}</h2>
          <div className={styles.relatedGrid}>
            {related.map((p: any) => (
              <Link key={p.id} href={`/projects/${p.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedVisual} style={{ background: p.gradient }} />
                <div className={styles.relatedContent}>
                  <div className={styles.relatedCat}>{p.category}</div>
                  <h3 className={styles.relatedName}>{p.title}</h3>
                  <p className={styles.relatedDesc}>{p.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
