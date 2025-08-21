import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Share2, X, ChevronLeft, ChevronRight, MapPin as MapPinIcon, Phone, Calendar, Bed as BedIcon, Bath as BathIcon, Square, Contrast } from 'lucide-react';
import { useLazyImage } from '../hooks/useLazyImage';

// LazyImage component for performance optimization
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style }) => {
  const { imgRef, isLoaded, isError, imgSrc } = useLazyImage({ src });

  return (
    <div className="relative w-full h-full">
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
        style={{ backgroundColor: '#f3f4f6', ...style }}
        loading="lazy"
      />
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  type: string;
  price: string;
  location: string;
  area: string;
  featured: boolean;
  beds?: number;
  baths?: number;
  agent: string;
  agentPhone: string;
}

export function PropertyGallery() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = useState<number>(-1);
  const modalTriggerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Load high-contrast preference from localStorage on component mount
  useEffect(() => {
    // Load high-contrast preference
    const savedHighContrast = localStorage.getItem('highContrastMode');
    if (savedHighContrast === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }

    // Check for system preference
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  // Save high-contrast preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('highContrastMode', isHighContrast.toString());
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const properties: Property[] = [
    {
      id: 1,
      title: 'Office Space - Central Area',
      description: 'Modern office building with excellent facilities, prime location in Central Business District.',
      image: "https://i.ibb.co/ns0zjwhG/office-space-for-rent-at-central-area.jpg",
      images: [
        "https://i.ibb.co/ns0zjwhG/office-space-for-rent-at-central-area.jpg",
        "https://i.ibb.co/HDnYDvJ2/office-space-for-rent-area-11.jpg",
        "https://i.ibb.co/gFghF6ZD/premium-office-space-for-rent.jpg"
      ],
      type: 'For Rent',
      price: '₦3.2M',
      location: 'Central Area, Abuja',
      area: '320 sqm',
      featured: true,
      agent: 'Michael Chen',
      agentPhone: '+234 904 567 8901',
      baths: 3
    },
    {
      id: 2,
      title: 'Maitama Prime Land',
      description: 'Exclusive land opportunity in prestigious Maitama district. Perfect for luxury development.',
      image: "https://i.ibb.co/0jCRfmHh/maitama-land-for-sale.jpg",
      images: [
        "https://i.ibb.co/0jCRfmHh/maitama-land-for-sale.jpg",
        "https://i.ibb.co/v4yBgkZp/lifecamp-flat-for-sale.jpg",
        "https://i.ibb.co/qPWxZdj/6-unit-of-3-bedroom-for-sale.jpg"
      ],
      type: 'For Sale',
      price: '₦120M',
      location: 'Maitama, Abuja',
      area: '1,200 sqm',
      featured: true,
      agent: 'James Okoro',
      agentPhone: '+234 908 901 2345'
    },
    {
      id: 3,
      title: 'Lifecamp Apartment',
      description: 'Beautiful residential flat in serene Lifecamp environment with modern finishes.',
      image: "https://i.ibb.co/v4yBgkZp/lifecamp-flat-for-sale.jpg",
      images: [
        "https://i.ibb.co/v4yBgkZp/lifecamp-flat-for-sale.jpg",
        "https://i.ibb.co/qPWxZdj/6-unit-of-3-bedroom-for-sale.jpg",
        "https://i.ibb.co/0jCRfmHh/maitama-land-for-sale.jpg"
      ],
      type: 'For Sale',
      price: '₦45M',
      location: 'Lifecamp, Abuja',
      beds: 4,
      baths: 3,
      area: '220 sqm',
      featured: true,
      agent: 'Grace Adebayo',
      agentPhone: '+234 907 890 1234'
    },
    {
      id: 4,
      title: 'Premium Office Space',
      description: 'State-of-the-art office complex with modern amenities, perfect for corporate headquarters.',
      image: "https://i.ibb.co/gFghF6ZD/premium-office-space-for-rent.jpg",
      images: [
        "https://i.ibb.co/gFghF6ZD/premium-office-space-for-rent.jpg",
        "https://i.ibb.co/HDnYDvJ2/office-space-for-rent-area-11.jpg",
        "https://i.ibb.co/ns0zjwhG/office-space-for-rent-at-central-area.jpg"
      ],
      type: 'For Rent',
      price: '₦4.8M',
      location: 'Wuse 2, Abuja',
      area: '450 sqm',
      featured: true,
      agent: 'Emma Williams',
      agentPhone: '+234 906 789 0123',
      baths: 4
    },
    {
      id: 5,
      title: '6-Unit 3-Bedroom Complex',
      description: 'Investment opportunity with 6 units of 3-bedroom apartments. Excellent rental yield potential.',
      image: "https://i.ibb.co/qPWxZdj/6-unit-of-3-bedroom-for-sale.jpg",
      images: [
        "https://i.ibb.co/qPWxZdj/6-unit-of-3-bedroom-for-sale.jpg",
        "https://i.ibb.co/v4yBgkZp/lifecamp-flat-for-sale.jpg",
        "https://i.ibb.co/0jCRfmHh/maitama-land-for-sale.jpg"
      ],
      type: 'For Sale',
      price: '₦85M',
      location: 'Gwarinpa, Abuja',
      beds: 3,
      baths: 2,
      area: '180 sqm',
      featured: true,
      agent: 'David Okafor',
      agentPhone: '+234 905 678 9012'
    },
    {
      id: 6,
      title: 'Office Space - Area 11',
      description: 'Premium office space in the heart of Area 11, Abuja. Features modern amenities, 24/7 security, backup power, and excellent connectivity.',
      image: "https://i.ibb.co/HDnYDvJ2/office-space-for-rent-area-11.jpg",
      images: [
        "https://i.ibb.co/HDnYDvJ2/office-space-for-rent-area-11.jpg",
        "https://i.ibb.co/ns0zjwhG/office-space-for-rent-at-central-area.jpg",
        "https://i.ibb.co/gFghF6ZD/premium-office-space-for-rent.jpg"
      ],
      type: 'For Rent',
      price: '₦2.5M',
      location: 'Area 11, Abuja',
      area: '250 sqm',
      featured: false,
      agent: 'Sarah Johnson',
      agentPhone: '+234 903 456 7890',
      baths: 2
    }
  ];

  // Keyboard navigation handlers
  const handleCardKeyDown = useCallback((event: React.KeyboardEvent, property: Property) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        modalTriggerRef.current = event.currentTarget as HTMLDivElement;
        openModal(property);
        break;
      case 'ArrowRight':
        event.preventDefault();
        setFocusedCardIndex((prev) => Math.min(prev + 1, properties.length - 1));
        break;
      case 'ArrowLeft':
        event.preventDefault();
        setFocusedCardIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedCardIndex((prev) => Math.min(prev + 3, properties.length - 1)); // Assuming 3 columns
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedCardIndex((prev) => Math.max(prev - 3, 0)); // Assuming 3 columns
        break;
    }
  }, [properties.length]);

  const handleModalKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        prevImage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        nextImage();
        break;
    }
  }, []);

  // Toggle high-contrast mode
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => !prev);
  }, []);

  // Share function
  const handleShare = async (property: Property) => {
    const shareData = {
      title: property.title,
      text: `Check out this property: ${property.title} - ${property.price}`,
      url: window.location.href + `#property-${property.id}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
        // You could add a toast notification here
        alert('Property link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Modal functions with enhanced focus management
  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus the modal after a brief delay to ensure it's rendered
    setTimeout(() => {
      modalRef.current?.focus();
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
    
    // Return focus to the trigger element
    setTimeout(() => {
      modalTriggerRef.current?.focus();
    }, 100);
  };

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };
  return <section id="properties" className="py-20 bg-white">
      {/* Skip Navigation Link */}
      <a 
        href="#property-grid"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-homelight-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to property grid
      </a>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex justify-between items-center mb-8">
            <div></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Featured Properties
              </h2>
              <div 
                className="w-24 h-1 mx-auto rounded-full"
                style={{ backgroundColor: 'rgb(70, 182, 255)' }}
              ></div>
            </div>
            {/* High-Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className="p-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(229, 231, 235)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
              }}
              aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
              title={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
            >
              <Contrast size={20} className={isHighContrast ? "text-black" : "text-gray-600"} />
            </button>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto font-opensans text-xl leading-relaxed">
            Discover our exclusive selection of premium properties across Nigeria, 
            carefully curated to meet your real estate investment and housing needs.
          </p>
        </div>

        {/* Enhanced Responsive Grid with Improved Spacing */}
        <div 
          id="property-grid"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8"
          role="grid"
          aria-label="Property listings"
        >
          {(showAllProperties ? properties : properties.slice(0, 4)).map((property, index) => (
            <div 
              key={property.id}
              ref={focusedCardIndex === index ? (ref) => ref?.focus() : null}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${property.title}. Price: ${property.price}. Location: ${property.location}.`}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 border border-gray-100"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px';
              }}
              onClick={() => {
                modalTriggerRef.current = document.activeElement as HTMLDivElement;
                openModal(property);
              }}
              onKeyDown={(e) => handleCardKeyDown(e, property)}
            >
              {/* Image Container with 3:2 Aspect Ratio and Lazy Loading */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                <LazyImage
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Enhanced Card Content with Better Spacing */}
              <div className="p-4 space-y-3">
                {/* Property Title & Location */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 font-montserrat leading-tight group-hover:text-blue-700 transition-colors duration-200">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm font-medium">
                    <MapPinIcon size={16} className="mr-2 text-homelight-primary" />
                    <span className="font-opensans">{property.location}</span>
                  </div>
                </div>

                {/* Property Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-opensans line-clamp-2">
                  {property.description}
                </p>

                {/* Property Details with Enhanced Icons */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    {property.beds && (
                      <div className="flex items-center text-gray-600 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-homelight-primary/10 flex items-center justify-center mr-2">
                          <BedIcon size={12} className="text-homelight-primary" />
                        </div>
                        <span className="font-montserrat font-semibold">{property.beds}</span>
                        <span className="text-xs text-gray-400 ml-1">beds</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center text-gray-600 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-homelight-primary/10 flex items-center justify-center mr-2">
                          <BathIcon size={12} className="text-homelight-primary" />
                        </div>
                        <span className="font-montserrat font-semibold">{property.baths}</span>
                        <span className="text-xs text-gray-400 ml-1">baths</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-homelight-primary/10 flex items-center justify-center mr-2">
                        <Square size={12} className="text-homelight-primary" />
                      </div>
                      <span className="font-montserrat font-semibold">{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3">
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-gray-900 font-montserrat">
                      {property.price}
                    </p>
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded text-xs font-normal font-montserrat"
                      style={{
                        backgroundColor: 'rgb(238, 240, 246)',
                        color: 'rgb(70, 182, 255)'
                      }}
                    >
                      {property.type}
                    </span>
                  </div>
                  <button 
                    className="px-4 py-2 bg-white text-blue-600 font-normal rounded border hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm shadow-sm hover:shadow-md"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      color: 'rgb(70, 182, 255)',
                      borderColor: 'rgb(238, 240, 246)',
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllProperties && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAllProperties(true)}
              className="px-8 py-3 bg-white text-blue-600 font-normal rounded border hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgb(70, 182, 255)',
                borderColor: 'rgb(238, 240, 246)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
              }}
            >
              View All Properties
            </button>
          </div>
        )}

        {showAllProperties && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAllProperties(false)}
              className="px-8 py-3 bg-white text-gray-600 font-normal rounded border border-gray-200 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-sm hover:shadow-md"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgb(107, 114, 128)',
                borderColor: 'rgb(229, 231, 235)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
              }}
            >
              Show Less
            </button>
          </div>
        )}

        {/* Property Detail Modal with Enhanced Accessibility */}
        {isModalOpen && selectedProperty && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onKeyDown={handleModalKeyDown}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
              aria-hidden="true"
            />
            
            {/* Modal Content */}
            <div 
              ref={modalRef}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden focus:outline-none"
              tabIndex={-1}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 id="modal-title" className="text-2xl font-bold text-gray-900 font-montserrat">
                  {selectedProperty.title}
                </h2>
                <button
                  onClick={closeModal}
                  aria-label="Close property details"
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-homelight-primary min-w-[40px] min-h-[40px]"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                  {/* Image Carousel with Enhanced Accessibility */}
                <div className="relative" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={selectedProperty.images[currentImageIndex]}
                    alt={`${selectedProperty.title} - Image ${currentImageIndex + 1} of ${selectedProperty.images.length}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  
                  {/* Image Navigation */}
                  {selectedProperty.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[40px] min-h-[40px]"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[40px] min-h-[40px]"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2" role="tablist" aria-label="Image indicators">
                        {selectedProperty.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            role="tab"
                            aria-selected={index === currentImageIndex}
                            aria-label={`View image ${index + 1}`}
                            className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span 
                          className="px-3 py-1 rounded text-sm font-normal"
                          style={{
                            backgroundColor: 'rgb(238, 240, 246)',
                            color: 'rgb(70, 182, 255)'
                          }}
                        >
                          {selectedProperty.type}
                        </span>
                        <span className="text-2xl font-bold text-gray-900 font-montserrat">
                          {selectedProperty.price}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPinIcon size={16} className="mr-2" />
                        <span className="font-roboto">{selectedProperty.location}</span>
                      </div>

                      <p className="text-gray-600 font-roboto mb-6">
                        {selectedProperty.description}
                      </p>

                      {/* Property Specifications */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {selectedProperty.beds && (
                          <div 
                            className="text-center p-3 rounded-lg border"
                            style={{
                              backgroundColor: 'rgb(249, 250, 251)',
                              borderColor: 'rgb(229, 231, 235)'
                            }}
                          >
                            <BedIcon size={24} className="mx-auto mb-2 text-gray-600" />
                            <div className="text-sm font-medium text-gray-900">{selectedProperty.beds}</div>
                            <div className="text-xs text-gray-500">Bedrooms</div>
                          </div>
                        )}
                        {selectedProperty.baths && (
                          <div 
                            className="text-center p-3 rounded-lg border"
                            style={{
                              backgroundColor: 'rgb(249, 250, 251)',
                              borderColor: 'rgb(229, 231, 235)'
                            }}
                          >
                            <BathIcon size={24} className="mx-auto mb-2 text-gray-600" />
                            <div className="text-sm font-medium text-gray-900">{selectedProperty.baths}</div>
                            <div className="text-xs text-gray-500">Bathrooms</div>
                          </div>
                        )}
                        <div 
                          className="text-center p-3 rounded-lg border"
                          style={{
                            backgroundColor: 'rgb(249, 250, 251)',
                            borderColor: 'rgb(229, 231, 235)'
                          }}
                        >
                          <Square size={24} className="mx-auto mb-2 text-gray-600" />
                          <div className="text-sm font-medium text-gray-900">{selectedProperty.area}</div>
                          <div className="text-xs text-gray-500">Area</div>
                        </div>
                      </div>
                    </div>

                    {/* Agent Information & CTAs */}
                    <div>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">
                          Contact Agent
                        </h3>
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-900">{selectedProperty.agent}</div>
                          <div className="text-sm text-gray-600">{selectedProperty.agentPhone}</div>
                        </div>

                        <div className="space-y-3">
                          <button 
                            className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-normal rounded border border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{
                              backgroundColor: 'rgb(17, 146, 229)',
                              borderColor: 'rgb(17, 146, 229)',
                              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                            }}
                          >
                            <Phone size={16} className="mr-2" />
                            Call Agent
                          </button>
                          <button 
                            className="w-full flex items-center justify-center px-4 py-3 bg-white text-blue-600 font-normal rounded border hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{
                              backgroundColor: 'rgb(255, 255, 255)',
                              color: 'rgb(70, 182, 255)',
                              borderColor: 'rgb(238, 240, 246)',
                              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                            }}
                          >
                            <Calendar size={16} className="mr-2" />
                            Schedule Tour
                          </button>
                          <button
                            onClick={() => handleShare(selectedProperty)}
                            className="w-full flex items-center justify-center px-4 py-3 bg-white text-gray-600 font-normal rounded border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{
                              backgroundColor: 'rgb(255, 255, 255)',
                              color: 'rgb(107, 114, 128)',
                              borderColor: 'rgb(229, 231, 235)',
                              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
                            }}
                          >
                            <Share2 size={16} className="mr-2" />
                            Share Property
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>;
}