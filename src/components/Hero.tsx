import { useState, useEffect } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative bg-white">
      {/* Container with max width and padding */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 ease-out ${
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              The Landlord's Bustop
            </h1>

            {/* Subheading */}
            <p 
              className={`text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ease-out ${
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              We connect landlords with opportunities and tenants with their perfect homes. 
              Your comprehensive solution for real estate needs across Nigeria.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              {/* Primary Button - HomeLight Design System Pattern */}
              <a 
                href="#properties" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-normal text-base rounded border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 text-center shadow-sm hover:shadow-md"
                style={{
                  color: 'rgb(70, 182, 255)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderColor: 'rgb(238, 240, 246)',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                }}
              >
                View Properties
              </a>
              
              {/* Secondary Button - HomeLight Design System Pattern */}
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-normal text-base rounded border border-blue-700 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300 text-center shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: 'rgb(17, 146, 229)',
                  borderColor: 'rgb(17, 146, 229)',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Property Image */}
            <div 
              className={`relative transition-all duration-1000 ease-out ${
                isLoaded 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <img
                src="https://i.ibb.co/PZtppF42/property-1.jpg"
                alt="Modern Property"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Decorative Elements */}
            <div 
              className={`absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full transition-all duration-1000 ease-out ${
                isLoaded 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: "1s" }}
            />
            <div 
              className={`absolute -bottom-4 -right-4 w-12 h-12 bg-blue-200 rounded-full transition-all duration-1000 ease-out ${
                isLoaded 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
