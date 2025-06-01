import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SearchBar from '../common/SearchBar';

const backgrounds = [
  'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
  'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
];

const HeroBanner = () => {
  const { t } = useTranslation();
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Image */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentBg === index ? 1 : 0,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {t('home.hero.title')} <br />
              <span className="text-secondary-400">{t('home.hero.coloredTitle')}</span> <br />
              {t('home.hero.subtitle')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-200">
              {t('home.hero.description')}
            </p>
            
            <SearchBar isExpanded={true} className="mx-auto" />
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="btn-primary">
                {t('header.buy')}
              </button>
              <button className="btn bg-white hover:bg-neutral-100 text-neutral-900">
                {t('header.rent')}
              </button>
              <button className="btn border border-white text-white hover:bg-white/20">
                {t('header.commercial')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;