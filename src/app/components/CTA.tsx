import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CTAProps {
  onOpenModal: () => void;
}

export function CTA({ onOpenModal }: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      style={{ background: '#ffffff', padding: 'clamp(24px, 4vw, 48px) 0' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <motion.div
          style={{
            background: 'linear-gradient(130deg, #1a3f75 0%, #2F71BE 55%, #4d8fd4 100%)',
            borderRadius: 14,
            padding: 'clamp(40px, 5.5vw, 72px) clamp(32px, 5vw, 80px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            position: 'relative',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative circle */}
          <div style={{
            position: 'absolute', right: '-80px', top: '-80px',
            width: 300, height: 300, borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 560 }}>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}>
              {t.cta.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.875rem, 1.3vw, 1.0625rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.65,
            }}>
              {t.cta.description}
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
            <button
              onClick={onOpenModal}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                padding: '14px 36px',
                background: '#ffffff',
                color: '#2F71BE',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#eef3fc')}
              onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
            >
              {t.cta.button}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
