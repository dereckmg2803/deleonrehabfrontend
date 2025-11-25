import React, { useState, forwardRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock/data';

const TestimonialsSection = forwardRef((props, ref) => {
  const { testimonials } = mockData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(currentTestimonial.rating)].map((_, index) => (
              <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
            "{currentTestimonial.text}"
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">{currentTestimonial.author}</div>
              <div className="text-gray-600 text-sm">/ {currentTestimonial.company}</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;