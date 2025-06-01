import { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedListings from '../components/home/FeaturedListings';
import PropertyCategories from '../components/home/PropertyCategories';
import PropertyTypes from '../components/home/PropertyTypes';
import PartnersList from '../components/home/PartnersList';
import PropertyCTA from '../components/home/PropertyCTA';

const Home = () => {
  useEffect(() => {
    document.title = 'PropertyPro.id | Marketplace Properti Indonesia';
  }, []);
  
  return (
    <>
      <HeroBanner />
      <PropertyTypes />
      <FeaturedListings />
      <PropertyCategories />
      <PartnersList />
      <PropertyCTA />
    </>
  );
};

export default Home;