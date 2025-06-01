import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Bed, Bath, Square, MapPin, Heart, Share2, 
  Phone, Mail, CheckCircle2
} from 'lucide-react';
import { cn } from '../utils/cn';

// Mock property data (in a real app, this would come from an API)
const mockProperty = {
  id: 1,
  title: 'Modern Villa with Pool',
  location: 'Bali, Indonesia',
  price: 12500000000,
  type: 'sale',
  bedrooms: 4,
  bathrooms: 3,
  size: 250,
  landSize: 300,
  description: 'Luxurious modern villa located in the heart of Bali. This stunning property features 4 bedrooms, 3 bathrooms, and a private swimming pool. The villa offers breathtaking views and is perfect for those seeking a premium lifestyle.',
  features: [
    'Swimming Pool',
    'Garden',
    'Smart Home System',
    'Security System',
    'Double Garage',
    'Air Conditioning',
    'Modern Kitchen',
    'High Ceilings'
  ],
  images: [
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
  ],
  agent: {
    name: 'John Doe',
    phone: '+62 812 3456 7890',
    email: 'john.doe@propertypro.id',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    verified: true
  },
  category: 'luxury',
  featured: true,
  yearBuilt: 2022,
  parkingSpaces: 2,
  furnished: true
};

// Format price to IDR
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
};

const PropertyDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // In a real app, fetch property data based on ID
    document.title = `${mockProperty.title} | PropertyPro.id`;
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen">
      {/* Property Images */}
      <div className="relative h-[60vh] bg-neutral-900">
        <img
          src={mockProperty.images[activeImage]}
          alt={mockProperty.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
          {mockProperty.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={cn(
                "w-16 h-16 rounded-lg overflow-hidden border-2",
                activeImage === index ? "border-primary-500" : "border-transparent"
              )}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {mockProperty.title}
                  </h1>
                  <p className="text-neutral-600 flex items-center">
                    <MapPin size={18} className="mr-1" />
                    {mockProperty.location}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={toggleFavorite}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      isFavorite
                        ? "bg-secondary-500 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    )}
                  >
                    <Heart
                      size={20}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-primary-600">
                  {formatPrice(mockProperty.price)}
                </div>
                <div className="flex items-center">
                  <span className="badge-primary mr-2">
                    {mockProperty.category === 'luxury'
                      ? 'Mewah'
                      : mockProperty.category === 'ecofriendly'
                      ? 'Ramah Lingkungan'
                      : mockProperty.category === 'futuristic'
                      ? 'Futuristik'
                      : 'Terjangkau'}
                  </span>
                  <span className="badge-secondary">
                    {mockProperty.type === 'sale' ? 'Dijual' : 'Disewa'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-neutral-50 rounded-lg mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Bed size={24} />
                  </div>
                  <div className="text-sm text-neutral-600">Kamar Tidur</div>
                  <div className="font-semibold">{mockProperty.bedrooms}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Bath size={24} />
                  </div>
                  <div className="text-sm text-neutral-600">Kamar Mandi</div>
                  <div className="font-semibold">{mockProperty.bathrooms}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Square size={24} />
                  </div>
                  <div className="text-sm text-neutral-600">Luas Bangunan</div>
                  <div className="font-semibold">{mockProperty.size} m²</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <MapPin size={24} />
                  </div>
                  <div className="text-sm text-neutral-600">Luas Tanah</div>
                  <div className="font-semibold">{mockProperty.landSize} m²</div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Deskripsi</h2>
                <p className="text-neutral-600 leading-relaxed">
                  {mockProperty.description}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Fasilitas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mockProperty.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-neutral-600"
                    >
                      <CheckCircle2 size={16} className="text-primary-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Map (placeholder) */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-3">Lokasi</h2>
              <div className="bg-neutral-100 h-64 rounded-lg flex items-center justify-center">
                Map will be displayed here
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Agent Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <img
                  src={mockProperty.agent.image}
                  alt={mockProperty.agent.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{mockProperty.agent.name}</h3>
                  <div className="flex items-center text-sm text-neutral-600">
                    <CheckCircle2 size={16} className="text-primary-500 mr-1" />
                    Verified Agent
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="btn-primary w-full flex items-center justify-center">
                  <Phone size={18} className="mr-2" />
                  {mockProperty.agent.phone}
                </button>
                <button className="btn-outline w-full flex items-center justify-center">
                  <Mail size={18} className="mr-2" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Schedule Visit */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-4">Schedule a Visit</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Preferred Date
                  </label>
                  <input type="date" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Preferred Time
                  </label>
                  <select className="select">
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    className="input"
                    rows={3}
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Request Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;