import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
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
    { href: ROUTES.HOME, label: 'Home', type: 'link' as const },
    { href: ROUTES.ABOUT, label: 'About Us', type: 'link' as const },
    { href: 'properties', label: 'Properties', type: 'section' as const },
    { href: 'services', label: 'Services', type: 'section' as const },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-homelight-primary shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-icon.svg" 
                alt="Nasaga Limited Logo" 
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-semibold text-white font-open-sans">
                NASAGA <span className="text-white">LIMITED</span>
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {navigationItems.map((item, index) => (
              item.type === 'link' ? (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-white hover:text-white/80 font-medium transition-colors duration-200 font-open-sans text-[15px]"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => handleSectionNavigation(item.href)}
                  className="text-white hover:text-white/80 font-medium transition-colors duration-200 font-open-sans text-[15px]"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Right Section - Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button - Desktop Only */}
            <button
              onClick={() => handleSectionNavigation('contact')}
              className="hidden lg:inline-flex items-center px-4 py-2 bg-white text-homelight-primary font-semibold rounded-md hover:bg-gray-50 transition-colors duration-200 font-open-sans text-sm"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white hover:text-white/80 transition-colors duration-200 p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-homelight-primary border-t border-white/20">
          <nav className="container mx-auto px-6 py-4">
            <div className="space-y-3">
              {navigationItems.map((item, index) => (
                item.type === 'link' ? (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="block text-white hover:text-white/80 font-medium transition-colors duration-200 py-2 font-open-sans"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      handleSectionNavigation(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block text-white hover:text-white/80 font-medium transition-colors duration-200 py-2 font-open-sans w-full text-left"
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Mobile Contact Button */}
              <button
                onClick={() => {
                  handleSectionNavigation('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full mt-4 px-4 py-2 bg-white text-homelight-primary font-semibold rounded-md hover:bg-gray-50 transition-colors duration-200 font-open-sans text-sm"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}