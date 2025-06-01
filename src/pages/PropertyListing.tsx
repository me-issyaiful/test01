import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Filter, Heart, Bed, Bath, Square, X, ChevronDown, 
  Home, Building, MapPin, Building2, CheckCircle2, Grid, List
} from 'lucide-react';
import { cn } from '../utils/cn';

// Mock data for properties
const mockProperties = [
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
  {
    id: 7,
    title: 'Family House with Garden',
    location: 'Surabaya, Indonesia',
    price: 4200000000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 2,
    size: 220,
    image: 'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg',
    category: 'ecofriendly',
    featured: false,
  },
  {
    id: 8,
    title: 'Beachfront Villa',
    location: 'Lombok, Indonesia',
    price: 9800000000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 3,
    size: 280,
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
    category: 'luxury',
    featured: false,
  },
  {
    id: 9,
    title: 'City Apartment',
    location: 'Jakarta Pusat, Indonesia',
    price: 4500000000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    category: 'affordable',
    featured: false,
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

const PropertyListing = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const propertyType = searchParams.get('type') || 'all';
  const searchQuery = searchParams.get('q') || '';

  // Filter properties based on URL parameters
  const filteredProperties = mockProperties.filter(property => {
    if (propertyType !== 'all' && property.category !== propertyType) {
      return false;
    }
    
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    document.title = 'PropertyPro.id | Browse Properties';
  }, []);

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Browse Properties
          </h1>
          <div className="flex flex-wrap items-center text-primary-100">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Properties</span>
            {propertyType !== 'all' && (
              <>
                <span className="mx-2">/</span>
                <span>{propertyType}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div className="flex items-center">
            <button
              onClick={toggleFilter}
              className="btn-outline inline-flex items-center mr-4"
            >
              <Filter size={18} className="mr-2" />
              Filter
            </button>
            <div className="text-neutral-600">
              Showing <span className="font-semibold">{filteredProperties.length}</span> properties
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-md border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === 'grid' 
                    ? "bg-primary-500 text-white" 
                    : "bg-white text-neutral-600 hover:bg-neutral-100"
                )}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === 'list' 
                    ? "bg-primary-500 text-white" 
                    : "bg-white text-neutral-600 hover:bg-neutral-100"
                )}
              >
                <List size={20} />
              </button>
            </div>
            <select className="select">
              <option>Newest First</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div 
            className={cn(
              "lg:w-1/4 bg-white rounded-lg shadow-md p-6 h-fit transition-all duration-300 transform",
              isFilterOpen ? "block" : "hidden lg:block"
            )}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button 
                onClick={toggleFilter}
                className="lg:hidden text-neutral-500 hover:text-neutral-700"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Property Type */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Property Type</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700 flex items-center">
                    <Home size={16} className="mr-2" /> Residential
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700 flex items-center">
                    <Building size={16} className="mr-2" /> Commercial
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700 flex items-center">
                    <MapPin size={16} className="mr-2" /> Land
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700 flex items-center">
                    <Building2 size={16} className="mr-2" /> Apartment
                  </span>
                </label>
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Price Range</h4>
              <div className="flex flex-col space-y-3">
                <input
                  type="range"
                  min="0"
                  max="20000000000"
                  step="100000000"
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-500">Rp 0</span>
                  <span className="text-sm text-neutral-500">Rp 20B</span>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="input w-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="input w-1/2"
                  />
                </div>
              </div>
            </div>
            
            {/* Bedrooms */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Bedrooms</h4>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className="px-4 py-2 border border-neutral-200 rounded-md hover:border-primary-500 hover:bg-primary-50"
                  >
                    {num}+
                  </button>
                ))}
              </div>
            </div>
            
            {/* Bathrooms */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Bathrooms</h4>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    className="px-4 py-2 border border-neutral-200 rounded-md hover:border-primary-500 hover:bg-primary-50"
                  >
                    {num}+
                  </button>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Features</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700">Swimming Pool</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700">Garden</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700">Garage</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700">Air Conditioning</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600" />
                  <span className="ml-2 text-neutral-700">Gym</span>
                </label>
              </div>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 flex items-center">
                Show more <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="flex space-x-3">
              <button className="btn-primary flex-1">Apply Filters</button>
              <button className="btn-outline flex-1">Reset</button>
            </div>
          </div>
          
          {/* Property Grid */}
          <div className="lg:w-3/4">
            {filteredProperties.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-neutral-400 mb-4">
                  <Filter size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-neutral-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <button className="btn-primary">Clear Filters</button>
              </div>
            ) : (
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-6"
              )}>
                {filteredProperties.map((property) => (
                  <div key={property.id} className="group">
                    {viewMode === 'grid' ? (
                      <div className="card h-full flex flex-col">
                        <div className="relative overflow-hidden h-56">
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
                          <div className="absolute top-4 right-4">
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
                          </div>
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 transition-colors">
                              {property.title}
                            </h3>
                            <p className="text-neutral-500 flex items-center text-sm">
                              <MapPin size={16} className="mr-1" /> {property.location}
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
                    ) : (
                      <div className="card flex flex-col md:flex-row overflow-hidden">
                        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
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
                          <div className="absolute top-4 right-4">
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
                          </div>
                        </div>
                        <div className="p-6 w-full md:w-2/3 flex flex-col">
                          <div className="mb-3">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                              {property.title}
                            </h3>
                            <p className="text-neutral-500 flex items-center text-sm">
                              <MapPin size={16} className="mr-1" /> {property.location}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-2xl font-bold text-primary-600">
                              {formatPrice(property.price)}
                            </p>
                            <div className="hidden md:flex items-center text-sm font-medium text-primary-700">
                              <CheckCircle2 size={16} className="mr-1" />
                              Verified
                            </div>
                          </div>
                          <p className="text-neutral-600 mb-4 hidden md:block">
                            Property in {property.location} with {property.bedrooms} bedrooms and {property.bathrooms} bathrooms. 
                            Total building size of {property.size} m².
                          </p>
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
                          <div className="mt-auto pt-2">
                            <Link
                              to={`/properties/${property.id}`}
                              className="btn-primary"
                            >
                              Lihat Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {filteredProperties.length > 0 && (
              <div className="mt-10 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                    Previous
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={cn(
                        "px-4 py-2 rounded-md",
                        page === 1
                          ? "bg-primary-600 text-white"
                          : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                      )}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-3 py-2 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;