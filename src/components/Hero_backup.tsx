import React, { useState, useEffect } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation trigger on component mount
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
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Your trusted real estate partner in Nigeria
            </h1>
        </div>

        {/* Mobile Video Background */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          {!mobileVideoError ? (
            <video 
              ref={mobileVideoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              webkit-playsinline="true"
              onLoadedData={() => {
                setMobileVideoLoaded(true);
                console.log('Mobile video loaded successfully');
                // Ensure video is muted when loaded
                if (mobileVideoRef.current) {
                  mobileVideoRef.current.muted = true;
                  mobileVideoRef.current.volume = 0;
                }
              }}
              onError={(e) => {
                console.error('Mobile video failed to load:', e);
                setMobileVideoError(true);
              }}
              onCanPlay={() => {
                console.log('Mobile video can play');
                if (mobileVideoRef.current) {
                  // Ensure video is muted before playing
                  mobileVideoRef.current.muted = true;
                  mobileVideoRef.current.volume = 0;
                  
                  // Attempt to play with error handling
                  const playPromise = mobileVideoRef.current.play();
                  if (playPromise !== undefined) {
                    playPromise
                      .then(() => {
                        console.log('Mobile video started playing successfully');
                      })
                      .catch(e => {
                        console.error('Failed to play mobile video:', e);
                        // If autoplay fails, try to play on user interaction
                        document.addEventListener('touchstart', () => {
                          if (mobileVideoRef.current) {
                            mobileVideoRef.current.play().catch(console.error);
                          }
                        }, { once: true });
                      });
                  }
                }
              }}
              poster="https://i.ibb.co/WNrprpQv/property-3.jpg"
            >
              <source src="/mobile%20video%20background.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              Your browser does not support the video tag.
            </video>
          ) : (
            /* Fallback background image if video fails */
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://i.ibb.co/WNrprpQv/property-3.jpg')`
              }}
            />
          )}
        </div>
      </div>

      {/* Enhanced Dark Overlay for Better Text Visibility */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />

      {/* Content Container */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex items-center justify-center text-center text-white px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* Headline with Animation */}
          <h1 
            className={`font-open-sans font-bold mb-6 text-shadow-lg transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } text-hero lg:text-[64px] md:text-5xl`}
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
            }}
          >
            Landlord's Bustop
          </h1>

          {/* Subheading with Delayed Animation */}
          <p 
            className={`font-open-sans font-normal mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } text-lg md:text-xl lg:text-2xl`}
            style={{ 
              transitionDelay: '0.3s',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)' 
            }}
          >
            We connect landlords with opportunities and tenants with their perfect homes. 
            Your trusted partner for comprehensive real estate solutions across Nigeria.
          </p>

          {/* CTA Buttons with Delayed Animation */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <a 
              href="#properties" 
              className="group px-8 py-4 bg-white text-homelight-primary font-semibold rounded-lg 
                         hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 
                         shadow-lg hover:shadow-xl font-open-sans text-lg"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                View Properties
              </span>
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-transparent border-2 border-white text-white 
                         font-semibold rounded-lg hover:bg-white hover:text-homelight-primary 
                         hover:scale-105 transform transition-all duration-300 
                         shadow-lg hover:shadow-xl font-open-sans text-lg"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Optional) */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}