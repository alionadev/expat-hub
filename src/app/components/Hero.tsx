import { motion } from 'motion/react';
import type { MouseEvent } from 'react';
import { scrollToSection } from '../utils/navigation';
import { useLanguage } from '../context/LanguageContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1689655451590-be38de8003e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWNoYXJlc3QlMjBQYWxhY2UlMjBvZiUyMFBhcmxpYW1lbnQlMjBSb21hbmlhJTIwZGF5dGltZXxlbnwxfHx8fDE3NzMxNTY4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const { t } = useLanguage();
  const nav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section
      id="hero"
      style={{
        background: '#ffffff',
        paddingTop: 'clamp(96px, 11vw, 112px)',
        paddingBottom: 'clamp(24px, 3vw, 40px)',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <motion.div
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            minHeight: 'clamp(520px, 65vw, 700px)',
            display: 'flex',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="items-end sm:items-center"
        >
          {/* Background image */}
          <img
            src={HERO_IMG}
            alt="Bucharest Romania"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 50%',
              display: 'block',
            }}
          />
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(100deg, rgba(10,22,45,0.92) 0%, rgba(10,22,45,0.72) 42%, rgba(10,22,45,0.10) 100%)',
          }} />

          {/* Text content */}
          <div
            className="w-full sm:w-4/5 md:w-[72%]"
            style={{
              position: 'relative',
              zIndex: 1,
              padding: 'clamp(28px, 6vw, 60px) clamp(20px, 5vw, 80px)',
              paddingBottom: 'clamp(28px, 6vw, 60px)',
              maxWidth: 920,
            }}
          >
            <motion.p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 22,
                display: 'none',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              LEX BUSINESS HUB · România
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.5rem, 5vw, 3.25rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: 16,
                letterSpacing: '-0.025em',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              {t.hero.line1}
              <br />
              {t.hero.line2}
              <br />
              <span style={{ color: '#6ba3d6' }}>{t.hero.line3}</span>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.72,
                marginBottom: 28,
                maxWidth: 400,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row"
              style={{ gap: 10, flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  padding: '12px 28px',
                  background: '#ffffff',
                  color: '#1a2535',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#e8edf5')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
              >
                {t.hero.ctaPrimary}
              </button>
              <a
                href="#services"
                onClick={e => nav(e, '#services')}
                className="w-full sm:w-auto text-center"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  padding: '12px 24px',
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.7)',
                  border: '1.5px solid rgba(255,255,255,0.18)',
                  borderRadius: 8,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}