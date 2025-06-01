import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building, MapPin, ArrowRight } from 'lucide-react';

const propertyTypes = [
  {
    id: 'residential',
    title: 'Residential',
    icon: <Home size={24} />,
    count: 1520,
    color: 'bg-primary-500',
    link: '/properties?type=residential',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: <Building size={24} />,
    count: 483,
    color: 'bg-secondary-500',
    link: '/properties?type=commercial',
  },
  {
    id: 'land',
    title: 'Land',
    icon: <MapPin size={24} />,
    count: 326,
    color: 'bg-success-500',
    link: '/properties?type=land',
  },
];

const PropertyTypes = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.propertyTypes.title')}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Temukan berbagai jenis properti yang sesuai dengan kebutuhan Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={type.link} className="block h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-200">
                  <div className="p-6 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-full ${type.color} text-white flex items-center justify-center mb-6`}>
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`home.propertyTypes.${type.id}`)}
                    </h3>
                    <p className="text-neutral-500 mb-4">
                      {type.count.toLocaleString()} properti tersedia
                    </p>
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        {t('common.seeMore')}
                        <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;