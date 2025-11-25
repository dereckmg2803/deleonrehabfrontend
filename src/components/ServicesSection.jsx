import React from 'react';
import { mockData } from '../mock/data';

const ServicesSection = () => {
  const { services } = mockData;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Area of Practice
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 rounded-xl hover:border-teal-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl font-bold text-gray-200 group-hover:text-teal-600 transition-colors duration-300 mb-4">
                {service.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;