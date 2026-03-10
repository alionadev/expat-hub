import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-gradient-to-br from-[#0f1a30] via-[#1a2a4a] to-[#0f1a30] overflow-hidden relative" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-[#e8742a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-[#e8742a] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              className="mx-auto opacity-40"
            >
              <path
                d="M0 30.4C0 20.8 2.4 12.8 7.2 6.4C12.1333 0 19.6 0 29.6 0V8.8C24.5333 8.8 20.5333 10.2667 17.6 13.2C14.8 16.1333 13.4 20.1333 13.4 25.2H29.6V60H0V30.4ZM50.4 30.4C50.4 20.8 52.8 12.8 57.6 6.4C62.5333 0 70 0 80 0V8.8C74.9333 8.8 70.9333 10.2667 68 13.2C65.2 16.1333 63.8 20.1333 63.8 25.2H80V60H50.4V30.4Z"
                fill="#e8742a"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#e8742a] uppercase tracking-wider mb-8"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
            }}
          >
            Наша миссия
          </motion.h2>

          {/* Quote text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <p
              className="text-white mb-8 leading-relaxed"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              Мы стремимся обеспечить надёжность и безопасность каждому, кто открывает или масштабирует компанию в Румынии, придерживаясь принципов{' '}
              <span className="text-[#e8742a] font-semibold">доверия</span>,{' '}
              <span className="text-[#e8742a] font-semibold">профессионализма</span> и{' '}
              <span className="text-[#e8742a] font-semibold">ответственности</span>.
            </p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-white/80 max-w-3xl mx-auto"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.125rem',
                fontWeight: 300,
              }}
            >
              Помогать украинскому бизнесу развиваться за границей.
            </motion.p>
          </motion.blockquote>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 h-px bg-gradient-to-r from-transparent via-[#e8742a]/50 to-transparent max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}