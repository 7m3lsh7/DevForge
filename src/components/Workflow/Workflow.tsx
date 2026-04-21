'use client';
import styles from './Workflow.module.css';
import { workflowSteps } from '@/lib/data';

export default function Workflow() {
  return (
    <section className={`section section--light`} id="workflow">
      <div className="container">
        <div className="section-header">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">Our <span style={{ color: '#660810' }}>Development Process</span></h2>
          <p className="section-subtitle">
            A proven, transparent workflow that keeps you informed and in control at every stage.
          </p>
        </div>

        <div className={styles.timeline}>
          {workflowSteps.map((step, i) => (
            <div key={step.id} className={`${styles.step} ${i % 2 === 0 ? styles.stepLeft : styles.stepRight}`}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>0{step.id}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>

              {/* Central node */}
              <div className={styles.node}>
                <div className={styles.nodeInner} />
              </div>
            </div>
          ))}

          {/* Vertical line */}
          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
}
