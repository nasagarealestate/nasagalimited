import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">NASAGA LIMITED</h2>
            <p className="mb-4 text-gray-400 max-w-md">
              Your trusted partner for all real estate needs. With offices in
              Abuja, Kano, and Kaduna, we provide comprehensive property
              solutions across Nigeria.
            </p>
            <p className="text-blue-400 font-medium">
              Impossible is nothing...
            </p>
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