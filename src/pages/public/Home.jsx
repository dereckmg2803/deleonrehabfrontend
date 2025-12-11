import React, { useRef } from 'react';
import HeroSection from '../../components/HeroSection';
import ImageGallery from '../../components/ImageGallery';
import PartnersSection from '../../components/PartnersSection';
import ServicesSection from '../../components/ServicesSection';
import FeaturesSection from '../../components/FeaturesSection';
import StatsSection from '../../components/StatsSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import DetailSection from '../../components/DetailSection';
import FAQSection from '../../components/FAQSection';

const Home = () => {
  const testimonialsRef = useRef(null);

  return (
    <>
      <HeroSection testimonialsRef={testimonialsRef} />
      <ImageGallery />
      <PartnersSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />

      {/* El destino del scroll */}
      <TestimonialsSection ref={testimonialsRef} />

      <DetailSection />
      <FAQSection />
    </>
  );
};

export default Home;
