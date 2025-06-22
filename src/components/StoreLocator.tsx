import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Clock, Phone } from 'lucide-react';

const StoreLocator = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedStore, setSelectedStore] = useState(0);

  const stores = [
    {
      id: 1,
      name: 'ConviStore Downtown',
      address: '123 Main Street, Downtown',
      distance: '0.5 miles',
      hours: '24/7',
      phone: '(555) 123-4567',
      services: ['ATM', 'Gas Station', 'Fresh Food']
    },
    {
      id: 2,
      name: 'ConviStore Westside',
      address: '456 Oak Avenue, Westside',
      distance: '1.2 miles',
      hours: '6:00 AM - 12:00 AM',
      phone: '(555) 234-5678',
      services: ['ATM', 'Coffee Bar', 'Pharmacy']
    },
    {
      id: 3,
      name: 'ConviStore University',
      address: '789 College Blvd, University District',
      distance: '2.1 miles',
      hours: '24/7',
      phone: '(555) 345-6789',
      services: ['ATM', 'Study Area', 'Fresh Food']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find a Store Near You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Locate the nearest ConviStore and get directions, hours, and contact information
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Enter your address or ZIP code"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10 pr-20 py-3 text-lg"
            />
            <Button 
              className="absolute right-1 top-1 bottom-1 px-6 bg-primary hover:bg-primary/90"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Map integration ready for implementation</p>
              <Button className="mt-4" variant="outline">
                View Full Map
              </Button>
            </div>
            
            {/* Decorative map-like pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-6 h-full gap-1 p-4">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="bg-gray-400 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Store List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Stores</h3>
            {stores.map((store, index) => (
              <div
                key={store.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedStore === index
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStore(index)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg text-gray-900">{store.name}</h4>
                  <span className="text-sm text-primary font-medium">{store.distance}</span>
                </div>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-500 mb-2">Services:</div>
                  <div className="flex flex-wrap gap-2">
                    {store.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-x-3">
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                    Get Directions
                  </Button>
                  <Button size="sm" variant="outline">
                    Call Store
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;