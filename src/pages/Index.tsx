
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PromotionsBanner from '@/components/PromotionsBanner';
import ProductCatalog from '@/components/ProductCatalog';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PromotionsBanner />
      <HeroSection />
      <ProductCatalog />
    </div>
  );
};

export default Index;
