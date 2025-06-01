import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="PropertyPro Logo" className="h-10 w-auto" />
              <span className="ml-2 font-bold text-xl">PropertyPro</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Platform properti terlengkap di Indonesia untuk rumah, apartemen, komersial, dan tanah.
            </p>
            <div className="flex items-center text-neutral-300 mb-2">
              <MapPin size={18} className="mr-2 text-primary-400" />
              <span>{t('footer.address')}</span>
            </div>
            <div className="flex items-center text-neutral-300 mb-2">
              <Phone size={18} className="mr-2 text-primary-400" />
              <span>+62 8956 0992 2967</span>
            </div>
            <div className="flex items-center text-neutral-300">
              <Mail size={18} className="mr-2 text-primary-400" />
              <span>info@propertypro.id</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">
              Properti
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=buy" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Beli Rumah
                </Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Sewa Apartemen
                </Link>
              </li>
              <li>
                <Link to="/properties?type=commercial" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Properti Komersial
                </Link>
              </li>
              <li>
                <Link to="/properties?type=new" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Properti Baru
                </Link>
              </li>
              <li>
                <Link to="/properties?type=investment" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Investasi Properti
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">
              Perusahaan
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('common.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('common.contact')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.careers')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.blog')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.terms')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">
              Newsletter
            </h3>
            <p className="text-neutral-300 mb-4">
              Dapatkan informasi terbaru tentang properti dan penawaran khusus
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Berlangganan
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;