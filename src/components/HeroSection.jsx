import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Star } from 'lucide-react';
import { mockData } from '../mock/data';
import { useRef } from "react";

const HeroSection = ({ testimonialsRef }) => {
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const { badge, title, titleHighlight, description, footer, primaryCta, secondaryCta } = mockData.hero;
  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative bg-[#1a1d23] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-8">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              {badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {title} <span className="block mt-4">{titleHighlight}</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            {description}
          </p>

          <p className="text-base text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            {footer}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/booking')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {primaryCta}
            </Button>
            <Button
              onClick={scrollToTestimonials}
              variant="outline"
              className="border-2 border-gray-600 hover:border-gray-500 bg-transparent text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-200 flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              {secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;