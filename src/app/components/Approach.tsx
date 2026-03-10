import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Approach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#faf8f5] relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          className="bg-gradient-to-br from-[#0f1a30] to-[#1a2a4a] rounded-3xl md:rounded-[3rem] p-8 md:p-16 shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="uppercase tracking-wider text-[#e8742a] mb-6"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Наш подход
            </motion.div>

            <motion.h2
              className="text-white mb-8 md:mb-10"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 600,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Полный спектр поддержки для вашего бизнеса
            </motion.h2>

            <motion.p
              className="text-white/90 leading-relaxed text-center mb-8 md:mb-10"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Мы обеспечиваем полный спектр поддержки — от первых шагов до развертывания полноценного бизнеса. 
              В отличие от многих, мы не просто консультируем: мы сами прошли путь открытия бизнеса и адаптации 
              за рубежом, знаем изнутри, с какими вызовами сталкиваются клиенты, и предлагаем реальные решения.
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#e8742a] mb-3 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L4 9.33333V14.6667C4 21.3333 8.53333 27.6 16 29.3333C23.4667 27.6 28 21.3333 28 14.6667V9.33333L16 4Z" fill="#e8742a" opacity="0.2"/>
                    <path d="M16 4L4 9.33333V14.6667C4 21.3333 8.53333 27.6 16 29.3333C23.4667 27.6 28 21.3333 28 14.6667V9.33333L16 4Z" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16L15 19L20 13" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  Опытные специалисты
                </h3>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  В команде — опытные юристы, бухгалтера и предприниматели
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#e8742a] mb-3 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#e8742a" opacity="0.2"/>
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#e8742a" strokeWidth="2"/>
                    <path d="M4 16H28M16 4C19.3137 7.31371 21.2 11.5442 21.3333 16C21.2 20.4558 19.3137 24.6863 16 28C12.6863 24.6863 10.8 20.4558 10.6667 16C10.8 11.5442 12.6863 7.31371 16 4Z" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  Международный опыт
                </h3>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Глубоко разбираемся в румынском рынке и особенностях ведения бизнеса в ЕС
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#e8742a] mb-3 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 20V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V20" fill="#e8742a" opacity="0.2"/>
                    <path d="M28 20V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V20" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.6667 9.33333L16 16L9.33333 9.33333M16 16V4" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  Многоязычная поддержка
                </h3>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Работаем на нескольких языках и обеспечиваем понятную коммуникацию
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#e8742a] mb-3 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 28V25.3333C24 23.9188 23.4381 22.5623 22.4379 21.5621C21.4377 20.5619 20.0812 20 18.6667 20H13.3333C11.9188 20 10.5623 20.5619 9.5621 21.5621C8.56193 22.5623 8 23.9188 8 25.3333V28" fill="#e8742a" opacity="0.2"/>
                    <path d="M24 28V25.3333C24 23.9188 23.4381 22.5623 22.4379 21.5621C21.4377 20.5619 20.0812 20 18.6667 20H13.3333C11.9188 20 10.5623 20.5619 9.5621 21.5621C8.56193 22.5623 8 23.9188 8 25.3333V28" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z" fill="#e8742a" opacity="0.2" stroke="#e8742a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  Бизнес-сообщество
                </h3>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Создаём не просто сервис — мы создаём сообщество для роста, обмена опытом и партнёрства
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}