import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="text-white"
      style={{ backgroundColor: 'rgb(39, 54, 83)' }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Information - Takes up more space */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <img 
                src="/logo.svg" 
                alt="Nasaga Limited Logo" 
                className="h-24 w-auto mb-6 brightness-0 invert"
              />
            </div>
            <p className="mb-6 text-white/80 max-w-lg leading-relaxed text-base">
              Your trusted partner for all real estate needs. With offices in
              Abuja, Kano, and Kaduna, we provide comprehensive property
              solutions across Nigeria.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="text-white/80">
                <span className="font-medium text-white">Email:</span> info@nasagalimited.com
              </div>
              <div className="text-white/80">
                <span className="font-medium text-white">Phone:</span> +234 904 658 3307
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#properties" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Properties
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Property Sales
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Property Leasing
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Investment Opportunities
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-base"
                >
                  Facility Management
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media - Moved to the right */}
          <div className="lg:col-span-3 lg:text-right">
            <h3 className="text-lg font-bold mb-6 text-white">Follow Us</h3>
            <div className="flex lg:justify-end space-x-4">
              <a 
                href="https://x.com/nasaga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                }}
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/nasagalimited/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                }}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/p/Nasaga-Limited-100092042215356/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                }}
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Newsletter Signup or Additional CTA */}
            <div className="mt-8">
              <p className="text-white/80 text-sm mb-4 lg:text-right">
                Stay updated with our latest properties and market insights
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-normal rounded border hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  color: 'rgb(70, 182, 255)',
                  borderColor: 'rgb(238, 240, 246)',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="mt-12 pt-8 flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
        >
          <div className="text-white/80 text-center lg:text-left">
            <p>
              &copy; {new Date().getFullYear()} Nasaga Limited. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center lg:text-right">
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}