import React from 'react';
export function Hero() {
  return <section 
      id="home" 
      className="relative w-full text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 23, 31, 0.7), rgba(58, 64, 82, 0.7)), url('https://i.ibb.co/WNrprpQv/property-3.jpg')`
      }}
    >
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Landlord's Bustop
          </h1>
         
          <p className="text-lg mb-8 max-w-2xl">
            We connect landlords with opportunities and tenants with their perfect homes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#properties" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition duration-300">
              View Properties
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
}