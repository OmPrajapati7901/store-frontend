
import React from 'react';
import Navigation from '@/components/Navigation';
import StoreLocator from '@/components/StoreLocator';

const StoreLocatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <StoreLocator />
    </div>
  );
};

export default StoreLocatorPage;
