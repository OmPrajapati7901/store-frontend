
import React from 'react';
import Navigation from '@/components/Navigation';
import ProductCatalog from '@/components/ProductCatalog';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-8">
        <ProductCatalog />
      </div>
    </div>
  );
};

export default Products;
