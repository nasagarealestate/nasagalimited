import React from 'react';
export function Hero() {
  return <section id="home" className="relative w-full bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Impossible is nothing...
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Nasaga Limited is your trusted partner for all real estate needs.
            Whether you're looking to buy, sell, lease, or invest, we've got you
            covered.
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