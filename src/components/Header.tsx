import React, { useState } from 'react';
import { MenuIcon, XIcon, HomeIcon, BuildingIcon, WrenchIcon, PhoneIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: '#home', label: 'Home', icon: <HomeIcon size={18} /> },
    { href: '#properties', label: 'Properties', icon: <BuildingIcon size={18} /> },
    { href: '#services', label: 'Services', icon: <WrenchIcon size={18} /> },
    { href: '#contact', label: 'Contact', icon: <PhoneIcon size={18} /> }
  ];

  return <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        {/* Main Navbar Layout */}
        <div className="flex items-center justify-between">
          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-3xl font-bold text-white tracking-wide font-montserrat">
              NASAGA <span className="text-blue-300">LIMITED</span>
            </h1>
          </div>
          
          {/* Desktop Navigation - Horizontal */}
          <nav className="hidden lg:flex items-center space-x-8 absolute right-6">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="flex items-center space-x-2 text-gray-200 hover:text-blue-300 font-medium transition-all duration-300 hover:scale-105 group py-2 px-3 rounded-lg hover:bg-blue-800/20"
              >
                <span className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-200 hover:text-blue-300 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-800/20" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 backdrop-blur-sm border-t border-blue-700/30">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="flex items-center space-x-3 text-gray-200 hover:text-blue-300 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-700/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-blue-300">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>;
}