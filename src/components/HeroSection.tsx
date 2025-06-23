import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-red-500 to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Neighborhood
              <span className="block text-yellow-300">Gordon ConviStore</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              Fresh products, great prices, and convenience at your fingertips. 
              Open 24/7 for all your daily needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 flex items-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Shop Now</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <span>View Specials</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Promotion */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  🔥 HOT DEAL
                </div>
                <h3 className="text-2xl font-bold mb-4">Buy 2 Get 1 Free</h3>
                <p className="text-lg mb-6">On all snacks and beverages</p>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <div className="text-3xl font-bold">Save up to</div>
                  <div className="text-5xl font-bold text-yellow-300">33%</div>
                </div>
                <Button className="bg-yellow-300 text-black hover:bg-yellow-400 font-bold">
                  Claim Offer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
  );
};

export default HeroSection;