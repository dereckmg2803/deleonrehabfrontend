import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock/data';

const FeaturesSection = () => {
  const { features } = mockData;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={feature.image1}
                  alt="Feature"
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={feature.image2}
                  alt="Feature"
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-200">
                {feature.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;