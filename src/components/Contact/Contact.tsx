'use client';
import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@devforge.io', href: 'mailto:hello@devforge.io' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 234-5678', href: 'tel:+15552345678' },
  { icon: '💬', label: 'LinkedIn', value: 'linkedin.com/company/devforge', href: 'https://linkedin.com' },
  { icon: '📦', label: 'GitHub', value: 'github.com/devforge-team', href: 'https://github.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className={`section section--light`} id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Build Something <span style={{ color: '#660810' }}>Great Together</span></h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Info */}
          <div className={styles.infoSide}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Why Work With Us?</h3>
              <div className={styles.reasons}>
                {[
                  'Free initial consultation & scope review',
                  'Dedicated project manager',
                  'Weekly progress updates',
                  'Code ownership — you own the code',
                  'Post-launch support included',
                ].map((r, i) => (
                  <div key={i} className={styles.reason}>
                    <div className={styles.reasonCheck}>✓</div>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.contactLinks}>
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className={styles.contactLink}>
                  <div className={styles.contactIcon}>{info.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{info.label}</div>
                    <div className={styles.contactValue}>{info.value}</div>
                  </div>
                  <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={styles.formSide}>
            {status === 'sent' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      className={styles.input}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className={styles.input}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Web Application Development"
                    className={styles.input}
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className={styles.textarea}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                  id="contact-submit"
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
