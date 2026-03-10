import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type FaqItem = {
  question: string;
  answer: string;
  bullets: readonly string[];
  footer: string;
};

function FAQItem({ faq, index, isInView }: { faq: FaqItem; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.07 * index, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottom: '1px solid #e2e8f0' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
          fontWeight: 600,
          color: open ? '#2F71BE' : '#0f172a',
          lineHeight: 1.4,
          transition: 'color 0.2s',
          textAlign: 'left',
        }}>
          {faq.question}
        </span>
        <div style={{
          flexShrink: 0,
          width: 30,
          height: 30,
          borderRadius: '50%',
          background: open ? '#2F71BE' : '#eef3fc',
          color: open ? '#ffffff' : '#2F71BE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
        }}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: 22 }}>
              {faq.answer.split('\n\n').map((p, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  marginBottom: 10,
                }}>
                  {p}
                </p>
              ))}
              {faq.bullets.length > 0 && (
                <ul style={{ margin: '12px 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {faq.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{
                        flexShrink: 0,
                        marginTop: 7,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#2F71BE',
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        color: '#334155',
                        lineHeight: 1.6,
                      }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {faq.footer && (
                <p style={{
                  marginTop: 12,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  lineHeight: 1.6,
                }}>
                  {faq.footer}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      ref={ref}
      style={{ background: '#ffffff', padding: 'clamp(56px, 8vw, 104px) 0' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}>
          {/* LEFT — header sticky */}
          <motion.div
            style={{ position: 'sticky', top: 104 }}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
              {t.faq.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.0625rem)',
              color: '#64748b',
              lineHeight: 1.7,
              marginBottom: 32,
            }}>
              {t.faq.description}
            </p>

            {/* Not found CTA */}
            <div style={{
              padding: '24px',
              background: '#ffffff',
              borderRadius: 10,
              border: '1px solid #dde5f0',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: 8,
                lineHeight: 1.4,
              }}>
                {t.faq.notFound}
              </p>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#2F71BE',
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
              >
                {t.faq.askButton}
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ borderTop: '1px solid #e2e8f0' }}>
              {t.faq.items.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
