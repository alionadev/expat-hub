import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <circle cx="8" cy="12" r="2.5"/><path d="M13 10h5M13 14h3"/>
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
  </svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
  </svg>,
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: { title: string; description: string; items: string[] };
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.07 * index, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? '#f4f7ff' : '#ffffff',
        padding: 'clamp(28px, 3vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.3s ease',
        cursor: 'default',
      }}
    >
      <span style={{
        position: 'absolute',
        top: 'clamp(20px, 2.5vw, 32px)',
        right: 'clamp(20px, 2.5vw, 32px)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: hovered ? '#b8c9f0' : '#d1d9e6',
        transition: 'color 0.3s ease',
      }}>
        {num}
      </span>

      <div style={{
        width: 46,
        height: 46,
        borderRadius: 10,
        background: hovered ? '#e4ecff' : '#f0f4ff',
        border: hovered ? '1px solid #b8cef8' : '1px solid #dde5f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: hovered ? '#1a4fa8' : '#2F71BE',
        marginBottom: 22,
        flexShrink: 0,
        transition: 'background 0.3s ease, border 0.3s ease, color 0.3s ease',
      }}>
        {ICONS[index]}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(0.9375rem, 1.4vw, 1.0625rem)',
        fontWeight: 700,
        color: '#0f172a',
        lineHeight: 1.3,
        marginBottom: 10,
        letterSpacing: '-0.01em',
        paddingRight: 28,
        transition: 'color 0.3s ease',
      }}>
        {service.title}
      </h3>

      <div style={{
        width: 32,
        height: 1.5,
        background: '#2F71BE',
        borderRadius: 2,
        marginBottom: 14,
      }} />

      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        flex: 1,
      }}>
        {service.items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{
              flexShrink: 0,
              marginTop: 6,
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: '#2F71BE',
              display: 'block',
            }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.84375rem',
              color: hovered ? '#334155' : '#475569',
              lineHeight: 1.55,
              transition: 'color 0.3s ease',
            }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: '#ffffff', padding: 'clamp(56px, 8vw, 104px) 0' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>

        {/* Section header */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(16px, 3vw, 40px)',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 'clamp(32px, 5vw, 52px)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#0f172a',
              letterSpacing: '-0.02em',
            }}>
              {t.services.title}
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
            color: '#64748b',
            maxWidth: 260,
            lineHeight: 1.7,
            marginBottom: 4,
          }}>
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div
          id="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: '#dde1e8',
            border: '1px solid #dde1e8',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            #services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            #services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
