import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock/data';

const DetailSection = () => {
  const { image, title, features, cta } = mockData.detailSection;

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Detail background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          {title}
        </h2>
        
        <div className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-lg">
              <Check className="w-6 h-6 text-teal-400" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-200">
          {cta}
        </Button>
      </div>
    </section>
  );
};

export default DetailSection;