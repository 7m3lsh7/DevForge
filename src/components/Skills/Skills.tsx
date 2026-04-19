'use client';
import { useState } from 'react';
import styles from './Skills.module.css';
import { skills } from '@/lib/data';

const techIcons = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '𝕋𝕊' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Redis', icon: '⚡' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Flutter', icon: '💙' },
];

type SkillCategory = keyof typeof skills;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('Frontend');
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section className={`section section--white`} id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Our <span style={{ color: '#660810' }}>Technical Skills</span></h2>
          <p className="section-subtitle">
            Deep expertise across the full technology stack — from pixel-perfect interfaces to cloud-native infrastructure.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Tabs + Progress bars */}
          <div className={styles.progressSection}>
            <div className={styles.tabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.tab} ${activeTab === cat ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.bars}>
              {skills[activeTab].map((skill, i) => (
                <div key={skill.name} className={styles.barItem} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.barHeader}>
                    <span className={styles.barName}>{skill.name}</span>
                    <span className={styles.barPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1 + 0.2}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech icons grid */}
          <div className={styles.iconsSection}>
            <h3 className={styles.iconsTitle}>Technologies We Work With</h3>
            <div className={styles.iconsGrid}>
              {techIcons.map((tech, i) => (
                <div key={i} className={styles.iconCard}>
                  <span className={styles.iconEmoji}>{tech.icon}</span>
                  <span className={styles.iconName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
