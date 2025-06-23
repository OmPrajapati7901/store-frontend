import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'snacks', name: 'Snacks', count: 8 },
    { id: 'beverages', name: 'Beverages', count: 6 },
    { id: 'household', name: 'Household', count: 5 },
    { id: 'fresh', name: 'Fresh Food', count: 5 }
  ];

  const products = [
    { id: 1, name: 'Classic Potato Chips', price: 3.49, originalPrice: 4.99, image: 'ClassicPotatoChips.jpeg', category: 'snacks', isOnSale: true },
    { id: 2, name: 'Energy Drink Pack', price: 12.99, image: 'EnergyDrinkPack.png', category: 'beverages' },
    { id: 3, name: 'Chocolate Bar', price: 2.99, image: 'ChocolateBar.png', category: 'snacks' },
    { id: 4, name: 'Fresh Sandwich', price: 6.99, image: 'FreshSandwich.png', category: 'fresh' },
    { id: 5, name: 'Bottled Water 6-Pack', price: 4.99, originalPrice: 6.99, image: 'BottledWater.png', category: 'beverages', isOnSale: true },
    { id: 6, name: 'Cleaning Supplies', price: 8.99, image: 'CleaningSupplies.png', category: 'household' },
    { id: 7, name: 'Protein Bar', price: 3.99, image: 'ProteinBar.png', category: 'snacks' },
    { id: 8, name: 'Coffee Beans', price: 9.99, image: 'CoffeeBeans.png', category: 'beverages' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide selection of quality products at great prices
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 ${
                selectedCategory === category.id 
                  ? 'bg-primary hover:bg-primary/90' 
                  : 'hover:bg-primary hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3">
              Load More Products
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No products found matching your criteria.</div>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;