
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PromotionsBanner = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "Weekly Special",
      description: "50% off all energy drinks",
      code: "ENERGY50",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Morning Deal",
      description: "Free coffee with any breakfast item",
      code: "MORNING",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Student Discount",
      description: "15% off with valid student ID",
      code: "STUDENT15",
      bgColor: "bg-gradient-to-r from-green-600 to-emerald-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [promotions.length]);

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promotions.length);
  };

  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const current = promotions[currentPromo];

  return (
    <section className={`${current.bgColor} text-white py-4 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevPromo}
            className="text-white hover:bg-white/20 p-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="text-center flex-1 animate-fade-in">
            <div className="text-sm font-semibold mb-1">{current.title}</div>
            <div className="text-lg font-bold mb-1">{current.description}</div>
            <div className="text-sm">
              Use code: <span className="bg-white/20 px-2 py-1 rounded font-mono">{current.code}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextPromo}
            className="text-white hover:bg-white/20 p-2"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center space-x-2 mt-3">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPromo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPromo ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsBanner;