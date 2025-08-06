import React from 'react';
import { HomeIcon, KeyIcon, BuildingIcon, WrenchIcon, DollarSignIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <HomeIcon className="h-10 w-10 text-blue-600" />,
    title: 'Property Sales',
    description: 'Find your dream home or sell your property with our expert guidance.'
  }, {
    icon: <KeyIcon className="h-10 w-10 text-blue-600" />,
    title: 'Property Leasing',
    description: 'Flexible leasing options for residential and commercial properties.'
  }, {
    icon: <DollarSignIcon className="h-10 w-10 text-blue-600" />,
    title: 'Investment Opportunities',
    description: 'Discover high-return real estate investment opportunities across Nigeria.'
  }, {
    icon: <BuildingIcon className="h-10 w-10 text-blue-600" />,
    title: 'Property Development',
    description: 'From concept to completion, we handle all aspects of property development.'
  }, {
    icon: <WrenchIcon className="h-10 w-10 text-blue-600" />,
    title: 'Facility Management',
    description: "Comprehensive management services to maintain your property's value."
  }];
  return <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}