import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'luxury',
    title: 'Luxury',
    description: 'Koleksi dari properti mewah dan eksklusif yang paling dicari',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
  },
  {
    id: 'futuristic',
    title: 'Futuristic',
    description: 'Pengalaman hidup di masa depan dengan teknologi perumahan cerdas terdepan',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  },
  {
    id: 'ecofriendly',
    title: 'Eco-friendly',
    description: 'Rumah berkelanjutan dengan kesadaran lingkungan melalui model desain inovatif',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
  },
  {
    id: 'affordable',
    title: 'Affordable',
    description: 'Properti terjangkau berkualitas tinggi, mewujudkan impian memiliki rumah bagi semua',
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PropertyCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.propertyTypes.title')}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Temukan properti idaman yang sesuai dengan kebutuhan dan gaya hidup Anda
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="group cursor-pointer"
            >
              <div className="relative rounded-lg overflow-hidden h-80">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {t(`home.categories.${category.id}`)}
                    </h3>
                    <p className="text-sm text-neutral-200 mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary-300 group-hover:text-primary-400 transition-colors">
                      <span className="text-sm font-medium mr-1">
                        {t('common.seeMore')}
                      </span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyCategories;