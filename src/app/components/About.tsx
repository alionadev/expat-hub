import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();

  const stats = [
    { num: '15+',   label: t.about.yearsLabel   },
    { num: '200+', label: t.about.clientsLabel  },
    { num: '1000+',  label: t.about.successLabel  },
  ];

  return (
    <section
      ref={ref}
      style={{ background: '#ffffff', padding: 'clamp(48px, 7vw, 88px) 0' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(36px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* LEFT — heading + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                marginBottom: 18,
              }}
            >
              {t.about.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                color: '#475569',
                lineHeight: 1.75,
              }}
            >
              {t.about.description}
            </p>
          </motion.div>

          {/* RIGHT — stats 2×2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#ebebee',
              border: '1px solid #ebebee',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                style={{
                  background: '#ffffff',
                  padding: 'clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px)',
                  gridColumn: i === stats.length - 1 && stats.length % 2 !== 0 ? 'span 2' : 'auto',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    marginBottom: 8,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: '#64748b',
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
