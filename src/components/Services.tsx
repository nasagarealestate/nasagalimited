import React from 'react';
import { ServiceCard } from './ServiceCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Services() {
  const { elementRef: sectionRef, hasIntersected: sectionVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services: Service[] = [
    {
      icon: (
        <div 
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: 'rgb(238, 240, 246)' }}
        >
          <svg 
            className="w-8 h-8 transition-colors duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            role="img"
            aria-label="Property Sales Icon"
            style={{ color: 'rgb(70, 182, 255)' }}
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
      ),
      title: 'Property Sales',
      description: 'Find your dream home or sell your property with our expert guidance and comprehensive market knowledge.'
    },
    {
      icon: (
        <div 
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: 'rgb(238, 240, 246)' }}
        >
          <svg 
            className="w-8 h-8 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Property Leasing Icon"
            style={{ color: 'rgb(70, 182, 255)' }}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </div>
      ),
      title: 'Property Leasing',
      description: 'Flexible leasing options for residential and commercial properties with transparent terms and professional support.'
    },
    {
      icon: (
        <div 
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: 'rgb(238, 240, 246)' }}
        >
          <svg 
            className="w-8 h-8 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Investment Opportunities Icon"
            style={{ color: 'rgb(70, 182, 255)' }}
          >
            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
          </svg>
        </div>
      ),
      title: 'Investment Opportunities',
      description: 'Discover high-return real estate investment opportunities across Nigeria with detailed market analysis.'
    },
    {
      icon: (
        <div 
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: 'rgb(238, 240, 246)' }}
        >
          <svg 
            className="w-8 h-8 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Property Development Icon"
            style={{ color: 'rgb(70, 182, 255)' }}
          >
            <path d="M3 21h18"/>
            <path d="M5 21V7l8-4v18"/>
            <path d="M19 21V11l-6-4"/>
          </svg>
        </div>
      ),
      title: 'Property Development',
      description: 'From concept to completion, we handle all aspects of property development with innovative design solutions.'
    },
    {
      icon: (
        <div 
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: 'rgb(238, 240, 246)' }}
        >
          <svg 
            className="w-8 h-8 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Facility Management Icon"
            style={{ color: 'rgb(70, 182, 255)' }}
          >
            <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"/>
            <path d="M21 11h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"/>
            <path d="M7 21V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13"/>
          </svg>
        </div>
      ),
      title: 'Facility Management',
      description: "Comprehensive management services to maintain your property's value and ensure optimal performance."
    }
  ];

  const handleLearnMore = (_serviceTitle?: string) => {
    // Navigate to contact section or service details
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`
          text-center mb-16 lg:mb-20 transition-all duration-800 ease-out
          ${sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
          }
        `}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: 'rgb(70, 182, 255)' }}
          ></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Comprehensive real estate solutions tailored to meet your needs with 
            unmatched expertise and personalized service.
          </p>
        </div>

        {/* Centered Services Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Skip link for keyboard users */}
          <a 
            href="#services-grid"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-homelight-primary text-white px-4 py-2 rounded-lg z-50"
          >
            Skip to services grid
          </a>
          
          {/* Services Grid - Clean Layout */}
          <div 
            id="services-grid"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 justify-items-center"
            role="grid"
            aria-label="Our services"
          >
            {services.map((service, index) => (
              <div key={index} className="w-full max-w-sm">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                  onLearnMore={() => handleLearnMore(service.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}