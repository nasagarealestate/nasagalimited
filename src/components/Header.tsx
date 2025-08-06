import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-700">
            NASAGA <span className="text-blue-500">LIMITED</span>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#properties" className="text-gray-800 hover:text-blue-600 font-medium">
            Properties
          </a>
          <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium">
            Services
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#properties" className="text-gray-800 hover:text-blue-600 font-medium">
              Properties
            </a>
            <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">
              Contact
            </a>
          </nav>
        </div>}
    </header>;
}