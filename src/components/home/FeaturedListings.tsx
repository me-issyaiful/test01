import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Bed, Bath, Square, ArrowRight, Share2 } from 'lucide-react';
import { cn } from '../../utils/cn';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    location: 'Bali, Indonesia',
    price: 12500000000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    size: 250,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    category: 'luxury',
    featured: true,
  },
  {
    id: 2,
    title: 'Urban Apartment with City View',
    location: 'Jakarta Selatan, Indonesia',
    price: 7500000000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    size: 150,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    category: 'luxury',
    featured: true,
  },
  {
    id: 3,
    title: 'Eco-Friendly Family Home',
    location: 'Bandung, Indonesia',
    price: 5200000000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    size: 200,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    category: 'ecofriendly',
    featured: true,
  },
  {
    id: 4,
    title: 'Smart Home with Garden',
    location: 'Yogyakarta, Indonesia',
    price: 3800000000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    size: 180,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    category: 'futuristic',
    featured: true,
  },
  {
    id: 5,
    title: 'Affordable Townhouse',
    location: 'Bogor, Indonesia',
    price: 1500000000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 1,
    size: 120,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    category: 'affordable',
    featured: true,
  },
  {
    id: 6,
    title: 'Luxury Penthouse',
    location: 'Jakarta Utara, Indonesia',
    price: 15000000000,
    type: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    size: 300,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    category: 'luxury',
    featured: true,
  },
];

// Format price to IDR
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
};

const FeaturedListings = () => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {t('home.featuredProperties.title')}
            </h2>
            <p className="text-neutral-600">
              Properti pilihan terbaik untuk Anda
            </p>
          </div>
          <Link
            to="/properties"
            className="mt-4 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            {t('home.featuredProperties.viewAll')}
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProperties.map((property) => (
            <motion.div key={property.id} variants={item}>
              <div className="card group h-full flex flex-col">
                <div className="relative overflow-hidden h-60">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="badge-primary">
                      {property.category === 'luxury'
                        ? 'Mewah'
                        : property.category === 'ecofriendly'
                        ? 'Ramah Lingkungan'
                        : property.category === 'futuristic'
                        ? 'Futuristik'
                        : 'Terjangkau'}
                    </span>
                    <span className="badge-secondary">
                      {property.type === 'sale' ? 'Dijual' : 'Disewa'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                      onClick={() => toggleFavorite(property.id)}
                      className={cn(
                        "p-2 rounded-full transition-colors",
                        favorites.includes(property.id)
                          ? "bg-secondary-500 text-white"
                          : "bg-white/80 text-neutral-600 hover:bg-white"
                      )}
                    >
                      <Heart 
                        size={18} 
                        fill={favorites.includes(property.id) ? "currentColor" : "none"} 
                      />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 text-neutral-600 hover:bg-white transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-neutral-500 flex items-center text-sm">
                      <span className="mr-1">📍</span> {property.location}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xl font-bold text-primary-600">
                      {formatPrice(property.price)}
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms} Kamar</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{property.bathrooms} K.Mandi</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      <span>{property.size} m²</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to={`/properties/${property.id}`}
                      className="btn-primary w-full justify-center"
                    >
                      Lihat Detail
                    </Link>
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

export default FeaturedListings;