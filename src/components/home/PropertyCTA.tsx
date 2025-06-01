import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PropertyCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('home.cta.title')}
              </h2>
              <p className="text-primary-200 text-lg mb-6">
                {t('home.cta.description')}
              </p>
              <Link to="/register" className="btn bg-white text-primary-900 hover:bg-neutral-100">
                {t('home.cta.button')}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7578864/pexels-photo-7578864.jpeg" 
                alt="Property agent helping clients" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start mb-3">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-sm">Tim Properti Pro</div>
                  <div className="text-xs text-neutral-500">Agen Bersertifikat</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600">
                "Kami siap membantu Anda menjual properti dengan cepat dan harga terbaik"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCTA;