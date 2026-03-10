import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PROCESS_IMG = 'https://images.unsplash.com/photo-1771756762846-b3cc5ee338d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwUm9tYW5pYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMxMzg4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080';

const STEP_ICONS = [
  <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section
      id="process"
      ref={ref}
      style={{ background: '#ffffff', padding: 'clamp(56px, 8vw, 104px) 0' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(40px, 6vw, 72px)',
            alignItems: 'start',
          }}
        >
          {/* LEFT — header + photo + badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'sticky', top: 104 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: 14,
            }}>
              {t.process.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
              color: '#64748b',
              lineHeight: 1.7,
              marginBottom: 32,
            }}>
              {t.process.description}
            </p>

            {/* Photo with circular CTA badge */}
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'visible' }}>
              <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={PROCESS_IMG}
                  alt="Process"
                  style={{
                    width: '100%',
                    height: 'clamp(220px, 30vw, 360px)',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15,23,42,0.28)',
                  borderRadius: 12,
                }} />
              </div>
              <div style={{
                position: 'absolute',
                top: -22,
                right: -22,
                width: 110,
                height: 110,
                borderRadius: '50%',
                background: '#2F71BE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 16,
                zIndex: 2,
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.3,
                }}>
                  {t.process.ctaCircle}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — steps list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 * index + 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  gap: 18,
                  padding: 'clamp(20px, 2.5vw, 28px) 0',
                  borderBottom: index < steps.length - 1 ? '1px solid #ebebee' : 'none',
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#f0f4ff',
                  border: '1.5px solid #dde5f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2F71BE',
                  marginTop: 2,
                }}>
                  {STEP_ICONS[index] ?? STEP_ICONS[0]}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.9375rem, 1.4vw, 1.0625rem)',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      margin: 0,
                    }}>
                      {step.title}
                    </h3>
                    <span style={{
                      flexShrink: 0,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 5,
                      padding: '3px 8px',
                      whiteSpace: 'nowrap',
                    }}>
                      {step.duration}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: '#64748b',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
