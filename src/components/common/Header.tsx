import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Search, User, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="PropertyPro" className="h-10 w-auto" />
          <span className={cn(
            'ml-2 font-bold text-xl transition-colors',
            isScrolled ? 'text-primary-600' : 'text-primary-600'
          )}>
            PropertyPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={cn(
            'font-medium transition-colors',
            isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-800 hover:text-primary-600'
          )}>
            {t('header.home')}
          </Link>
          <Link to="/properties?type=buy" className={cn(
            'font-medium transition-colors',
            isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-800 hover:text-primary-600'
          )}>
            {t('header.buy')}
          </Link>
          <Link to="/properties?type=rent" className={cn(
            'font-medium transition-colors',
            isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-800 hover:text-primary-600'
          )}>
            {t('header.rent')}
          </Link>
          <Link to="/properties?type=commercial" className={cn(
            'font-medium transition-colors',
            isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-800 hover:text-primary-600'
          )}>
            {t('header.commercial')}
          </Link>
          <Link to="/about" className={cn(
            'font-medium transition-colors',
            isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-800 hover:text-primary-600'
          )}>
            {t('common.about')}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className={cn(
              'flex items-center transition-colors p-2 rounded-full',
              isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-neutral-800 hover:bg-white/20'
            )}
          >
            <Globe size={20} />
          </button>
          <Link 
            to="/login" 
            className={cn(
              'btn px-4 py-2 rounded-md transition-colors',
              isScrolled 
                ? 'border border-primary-600 text-primary-600 hover:bg-primary-50' 
                : 'border border-primary-600 text-primary-600 hover:bg-white/20'
            )}
          >
            {t('common.login')}
          </Link>
          <Link 
            to="/register" 
            className="btn-primary"
          >
            {t('common.register')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={cn(
              'p-2 rounded-md transition-colors',
              isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-neutral-800 hover:bg-white/20'
            )}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={closeMenu} className="text-lg font-medium py-2 border-b border-neutral-100">
                {t('header.home')}
              </Link>
              <Link to="/properties?type=buy" onClick={closeMenu} className="text-lg font-medium py-2 border-b border-neutral-100">
                {t('header.buy')}
              </Link>
              <Link to="/properties?type=rent" onClick={closeMenu} className="text-lg font-medium py-2 border-b border-neutral-100">
                {t('header.rent')}
              </Link>
              <Link to="/properties?type=commercial" onClick={closeMenu} className="text-lg font-medium py-2 border-b border-neutral-100">
                {t('header.commercial')}
              </Link>
              <Link to="/about" onClick={closeMenu} className="text-lg font-medium py-2 border-b border-neutral-100">
                {t('common.about')}
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <button onClick={toggleLanguage} className="flex items-center text-neutral-700">
                  <Globe size={20} className="mr-2" />
                  {t('common.switchLanguage')}
                </button>
              </div>
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/login" onClick={closeMenu} className="btn-outline w-full">
                  {t('common.login')}
                </Link>
                <Link to="/register" onClick={closeMenu} className="btn-primary w-full">
                  {t('common.register')}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;