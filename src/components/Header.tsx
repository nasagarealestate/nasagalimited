import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, HomeIcon, BuildingIcon, WrenchIcon, PhoneIcon, UsersIcon } from 'lucide-react';
import { ROUTES } from '../router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    // If we're not on the home page, navigate to home first, then scroll to section
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: ROUTES.HOME, label: 'Home', icon: <HomeIcon size={18} />, type: 'link' as const },
    { href: ROUTES.ABOUT, label: 'About Us', icon: <UsersIcon size={18} />, type: 'link' as const },
    { href: 'properties', label: 'Properties', icon: <BuildingIcon size={18} />, type: 'section' as const },
    { href: 'services', label: 'Services', icon: <WrenchIcon size={18} />, type: 'section' as const },
    { href: 'contact', label: 'Contact', icon: <PhoneIcon size={18} />, type: 'section' as const }
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center">
            <h1 className="text-3xl font-bold text-white tracking-wide font-montserrat">
              NASAGA <span className="text-blue-300">LIMITED</span>
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8 absolute right-6">
            {navigationItems.map((item, index) => (
              item.type === 'link' ? (
                <Link 
                  key={index}
                  to={item.href} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-blue-300 font-medium transition-all duration-300 hover:scale-105 group py-2 px-3 rounded-lg hover:bg-blue-800/20"
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => handleSectionNavigation(item.href)}
                  className="flex items-center space-x-2 text-gray-200 hover:text-blue-300 font-medium transition-all duration-300 hover:scale-105 group py-2 px-3 rounded-lg hover:bg-blue-800/20"
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              )
            ))}
          </nav>

          <button 
            className="lg:hidden text-gray-200 hover:text-blue-300 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-800/20" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 backdrop-blur-sm border-t border-blue-700/30">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                item.type === 'link' ? (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="flex items-center space-x-3 text-gray-200 hover:text-blue-300 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-700/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-blue-300">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => handleSectionNavigation(item.href)}
                    className="flex items-center space-x-3 text-gray-200 hover:text-blue-300 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-700/20"
                  >
                    <span className="text-blue-300">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                )
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}