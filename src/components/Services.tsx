import React from 'react';
import { HomeIcon, KeyIcon, BuildingIcon, WrenchIcon, DollarSignIcon } from 'lucide-react';
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
      icon: <HomeIcon className="h-10 w-10 text-blue-600" />,
      title: 'Property Sales',
      description: 'Find your dream home or sell your property with our expert guidance and comprehensive market knowledge.'
    },
    {
      icon: <KeyIcon className="h-10 w-10 text-blue-600" />,
      title: 'Property Leasing',
      description: 'Flexible leasing options for residential and commercial properties with transparent terms and professional support.'
    },
    {
      icon: <DollarSignIcon className="h-10 w-10 text-blue-600" />,
      title: 'Investment Opportunities',
      description: 'Discover high-return real estate investment opportunities across Nigeria with detailed market analysis.'
    },
    {
      icon: <BuildingIcon className="h-10 w-10 text-blue-600" />,
      title: 'Property Development',
      description: 'From concept to completion, we handle all aspects of property development with innovative design solutions.'
    },
    {
      icon: <WrenchIcon className="h-10 w-10 text-blue-600" />,
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
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`
          text-center mb-12 lg:mb-16 transition-all duration-800 ease-out
          ${sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
          }
        `}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-roboto leading-relaxed">
            Comprehensive real estate solutions tailored to meet your needs with 
            unmatched expertise and personalized service.
          </p>
        </div>

        {/* Centered Services Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Skip link for keyboard users */}
          <a 
            href="#services-grid"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
          >
            Skip to services grid
          </a>
          
          {/* Services Grid - Clean Layout */}
          <div 
            id="services-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center"
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
            
            {/* Ready to Get Started? CTA Card as 6th item */}
            <div className="w-full max-w-sm">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl h-full flex flex-col justify-center text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6 font-roboto text-sm leading-relaxed">
                  Let's discuss how we can help you achieve your real estate goals with our comprehensive services.
                </p>
                <button 
                  onClick={() => handleLearnMore('Contact')}
                  className="
                    inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
                    hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    font-roboto text-sm
                  "
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}