import React from 'react';
import { Hero } from '../components/Hero';
import { PropertyGallery } from '../components/PropertyGallery';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main className="pt-20">
      <Hero />
      <div id="properties">
        <PropertyGallery />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

// Default export for lazy loading
export default HomePage;
