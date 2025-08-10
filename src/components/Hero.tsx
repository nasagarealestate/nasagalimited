import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileVideoLoaded, setMobileVideoLoaded] = useState(false);
  const [mobileVideoError, setMobileVideoError] = useState(false);

  // Animation trigger on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect for iframe
  useEffect(() => {
    let frameId: number;
    
    const handleScroll = () => {
      frameId = requestAnimationFrame(() => {
        if (videoRef.current) {
          const scrolled = window.pageYOffset;
          const parallaxSpeed = 0.3; // Reduced speed for iframe
          const yPos = -(scrolled * parallaxSpeed);
          videoRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!prefersReducedMotion.matches) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Video - YouTube Embed */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <iframe 
            ref={videoRef}
            src="https://www.youtube.com/embed/zkKROSgP4ck?autoplay=1&mute=1&loop=1&playlist=zkKROSgP4ck&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&start=0&showinfo=0&cc_load_policy=0&playsinline=1"
            className="absolute inset-0 w-full h-full"
            style={{
              width: '150%',
              height: '150%',
              left: '-25%',
              top: '-25%',
              border: 'none',
              pointerEvents: 'none'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Hero Background Video"
          />
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
            className={`font-montserrat font-bold mb-6 text-shadow-lg transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
            }}
          >
            Landlord's Bustop
          </h1>

          {/* Subheading with Delayed Animation */}
          <p 
            className={`font-roboto font-light mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
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
              className="group px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg 
                         hover:bg-blue-50 hover:scale-105 transform transition-all duration-300 
                         shadow-lg hover:shadow-xl font-montserrat text-lg"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                View Properties
              </span>
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-transparent border-2 border-white text-white 
                         font-semibold rounded-lg hover:bg-white hover:text-blue-700 
                         hover:scale-105 transform transition-all duration-300 
                         shadow-lg hover:shadow-xl font-montserrat text-lg"
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