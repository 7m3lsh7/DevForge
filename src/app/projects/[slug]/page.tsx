import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | DevForge`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.hero} style={{ background: project.gradient }}>
          <div className={styles.heroPattern} />
          <div className={`container ${styles.heroContent}`}>
            <Link href="/#projects" className={styles.back}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
            <div className={styles.heroCat}>{project.category}</div>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <p className={styles.heroDesc}>{project.description}</p>

            {/* Key results */}
            <div className={styles.heroResults}>
              {project.results.map((r, i) => (
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
                  The Challenge
                </h2>
                <p className={styles.sectionText}>{project.challenge}</p>
              </section>

              {/* Solution */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>💡</span>
                  Our Solution
                </h2>
                <p className={styles.sectionText}>{project.solution}</p>
              </section>

              {/* Screenshots mockup */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>🖥️</span>
                  Project Preview
                </h2>
                <div className={styles.screenshots}>
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className={styles.screenshot}
                      style={{ background: project.gradient, opacity: i === 1 ? 1 : i === 2 ? 0.7 : 0.5 }}
                    >
                      <div className={styles.ssPattern} />
                      <div className={styles.ssLabel}>Screen {i}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results deep dive */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>📈</span>
                  Key Results & Impact
                </h2>
                <div className={styles.resultsGrid}>
                  {project.results.map((r, i) => (
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
                <h3 className={styles.sideTitle}>Tech Stack</h3>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Team Roles</h3>
                <div className={styles.teamList}>
                  {project.team.map((member, i) => (
                    <div key={i} className={styles.teamItem}>
                      <div className={styles.teamDot} />
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={styles.sideCta}>
                <h3>Like What You See?</h3>
                <p>Let's build something similar for your business.</p>
                <Link href="/#contact" className={`btn btn-primary`} style={{ display: 'block', textAlign: 'center' }}>
                  Start a Conversation
                </Link>
              </div>
            </aside>
          </div>

          {/* Related */}
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>More Projects</h2>
            <div className={styles.relatedGrid}>
              {related.map(p => (
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
      <Footer />
    </>
  );
}
