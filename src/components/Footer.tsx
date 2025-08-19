import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/logo.svg" 
                alt="Nasaga Limited Logo" 
                className="h-32 w-auto mb-4"
              />
            </div>
            <p className="mb-4 text-gray-400 max-w-md">
              Your trusted partner for all real estate needs. With offices in
              Abuja, Kano, and Kaduna, we provide comprehensive property
              solutions across Nigeria.
            </p>
            <p className="text-blue-400 font-medium">
              Landlord's Bustop.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/nasaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 p-2 rounded-md hover:bg-gray-800"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/nasagalimited/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 p-2 rounded-md hover:bg-gray-800"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/p/Nasaga-Limited-100092042215356/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 p-2 rounded-md hover:bg-gray-800"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-400 hover:text-white transition">
                  Properties
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Property Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Property Leasing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Investment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Facility Management
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Nasaga Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}