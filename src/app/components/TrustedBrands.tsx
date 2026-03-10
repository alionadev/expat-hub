import { motion } from 'motion/react';

import globitelLogo from 'figma:asset/33c3a0bf61d0d8d57ea103805027ae493ecd0f12.png';
import mintharLogo from 'figma:asset/4bb71a1bb6bf99e435b47fd7253658c927c6a821.png';
import icenterLogo from 'figma:asset/88dba3780c194c6c4e8dc0a60786e096e109a924.png';
import automagistralLogo from 'figma:asset/25977f447911288b29178e2f487ecc8efa2bbac4.png';
import proleoLogo from 'figma:asset/1d1cb4c19bff9f95c578623388ddb533ef602e90.png';
import dureforceLogo from 'figma:asset/e9dcdcd1054b064bd776acbdee2ca22527da0b5d.png';
import ethycaLogo from 'figma:asset/f7659b7a172e14bbeb4911e69fad45d0c7d36f8a.png';
import muafaLogo from 'figma:asset/1f5940d1b8233f381690412be2c614994ff85bcd.png';

const brands = [
  { name: 'Globitel', logo: globitelLogo },
  { name: 'Minthar', logo: mintharLogo },
  { name: 'i-Center', logo: icenterLogo },
  { name: 'Автомагістраль Південь', logo: automagistralLogo },
  { name: 'PROLEO', logo: proleoLogo },
  { name: 'Dureforce', logo: dureforceLogo },
  { name: 'ETHYCA', logo: ethycaLogo },
  { name: 'Muafa', logo: muafaLogo },
];

export function TrustedBrands() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section style={{
      background: '#ffffff',
      padding: 'clamp(40px, 5vw, 64px) 0',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(270deg, #ffffff 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <motion.div
          style={{ display: 'flex', gap: 72, alignItems: 'center' }}
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              style={{ flexShrink: 0, width: 180, height: 90 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  opacity: 0.45,
                  filter: 'grayscale(100%)',
                  transition: 'opacity 0.3s, filter 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = '0.9';
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = '0.45';
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)';
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
