import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Clock, ShoppingCart } from 'lucide-react';

const Specials = () => {
  const specialOffers = [
    {
      id: 1,
      title: 'Buy 2 Get 1 Free',
      description: 'All snacks and candy',
      validUntil: '2024-12-31',
      discount: '33% OFF',
      code: 'B2G1FREE',
      image: 'photo-1618160702438-9b02ab6515c9'
    },
    {
      id: 2,
      title: 'Energy Drink Special',
      description: '50% off all energy drinks',
      validUntil: '2024-12-25',
      discount: '50% OFF',
      code: 'ENERGY50',
      image: 'photo-1721322800607-8c38375eef04'
    },
    {
      id: 3,
      title: 'Fresh Food Friday',
      description: 'Free coffee with any fresh food purchase',
      validUntil: 'Every Friday',
      discount: 'FREE COFFEE',
      code: 'FRESHFRI',
      image: 'photo-1582562124811-c09040d0a901'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Special Offers & Deals
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Save more with our exclusive promotions and limited-time offers
          </p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/${offer.image}?w=400&h=250&fit=crop`}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                    {offer.discount}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-600 mb-1">Promo Code:</div>
                    <div className="font-mono font-bold text-primary text-lg">{offer.code}</div>
                  </div>
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Shop Now</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specials;