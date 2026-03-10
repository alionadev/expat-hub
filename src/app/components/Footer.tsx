import type { MouseEvent } from 'react';
import { scrollToSection } from '../utils/navigation';
import logoImg from 'figma:asset/07a56458d655391b3f53bdec87d66379d66ee203.png';
import anpcImg from 'figma:asset/d03126fbedbc321243588588ef052a0ef39545f6.png';
import solImg from 'figma:asset/15dcee8faab2f88652451f67e6aa3727f8453cb1.png';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const nav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href !== '#') scrollToSection(href);
  };
  const serviceAnchors = ['#services', '#services', '#services'];
  const companyAnchors = ['#services', '#process', '#contact'];

  return (
    <footer style={{ background: 'transparent', paddingBottom: 'clamp(16px, 2vw, 24px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div style={{
          borderRadius: 16,
          background: '#f6f8fc',
          padding: 'clamp(28px, 3vw, 44px) clamp(24px, 3vw, 48px)',
        }}>
          {/* Top row: logo + columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
            gap: 'clamp(24px, 3vw, 48px)',
            marginBottom: 28,
            paddingBottom: 28,
            borderBottom: '1px solid rgba(0,0,0,0.07)',
          }}>
            {/* Brand */}
            <div>
              <img
                src={logoImg}
                alt="LEX Business Hub"
                style={{ height: 28, width: 'auto', objectFit: 'contain', marginBottom: 12 }}
              />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: '#64748b',
                lineHeight: 1.65,
                maxWidth: 220,
              }}>
                {t.footer.tagline}
              </p>
            </div>

            {/* Services */}
            <div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: 12,
              }}>
                {t.footer.services}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                {t.footer.serviceLinks.map((label, i) => (
                  <li key={i}>
                    <a
                      href={serviceAnchors[i]}
                      onClick={e => nav(e, serviceAnchors[i])}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: '#475569',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#2F71BE'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#475569'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: 12,
              }}>
                {t.footer.company}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                {t.footer.companyLinks.map((label, i) => (
                  <li key={i}>
                    <a
                      href={companyAnchors[i]}
                      onClick={e => nav(e, companyAnchors[i])}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: '#475569',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#2F71BE'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#475569'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: 12,
              }}>
                {t.footer.contacts}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {['+40 734 468 311', 'info@lexbusinesshub.ro', 'Louis Blanc, 26, Sector 1, Et. 3', t.footer.addressHint].map((line, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: i === 1 ? '#2F71BE' : '#64748b',
                      lineHeight: 1.5,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: copyright + badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: '#94a3b8',
            }}>
              {t.footer.rights}
            </p>
            <a
              href="https://www.growup-agency.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                color: '#c0c8d4',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#c0c8d4'}
            >
              Made by GROWUP AGENCY
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                title="Soluționarea Alternativă a Litigiilor"
                style={{ display: 'inline-flex', opacity: 0.7, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
              >
                <img
                  src={anpcImg}
                  alt="ANPC"
                  style={{ height: 36, width: 'auto', objectFit: 'contain' }}
                />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                title="Online Dispute Resolution"
                style={{ display: 'inline-flex', opacity: 0.7, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
              >
                <img
                  src={solImg}
                  alt="SOL - Soluționarea Online a Litigiilor"
                  style={{ height: 36, width: 'auto', objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}