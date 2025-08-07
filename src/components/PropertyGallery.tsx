import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, Share2, X, ChevronLeft, ChevronRight, MapPin as MapPinIcon, Phone, Calendar, Bed as BedIcon, Bath as BathIcon, Square, Eye, Contrast } from 'lucide-react';
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
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = useState<number>(-1);
  const modalTriggerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Load wishlist and high-contrast preference from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('propertyWishlist');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }

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

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('propertyWishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

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
      featured: true,
      agent: 'Sarah Johnson',
      agentPhone: '+234 903 456 7890',
      baths: 2
    },
    {
      id: 2,
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
      featured: false,
      agent: 'Michael Chen',
      agentPhone: '+234 904 567 8901',
      baths: 3
    },
    {
      id: 3,
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
      featured: false,
      agent: 'Emma Williams',
      agentPhone: '+234 906 789 0123',
      baths: 4
    },
    {
      id: 5,
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
      id: 6,
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
      featured: false,
      agent: 'James Okoro',
      agentPhone: '+234 908 901 2345'
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

  // Wishlist functions
  const toggleWishlist = (propertyId: number) => {
    setWishlistItems(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const isInWishlist = (propertyId: number) => wishlistItems.includes(propertyId);

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
  return <section id="properties" className="py-16 bg-gray-50">
      {/* Skip Navigation Link */}
      <a 
        href="#property-grid"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to property grid
      </a>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h2 className="text-3xl font-bold text-gray-900 font-montserrat">
              Featured Properties
            </h2>
            {/* High-Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
              title={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
            >
              <Contrast size={20} className={isHighContrast ? "text-black" : "text-gray-600"} />
            </button>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto font-roboto">
            Discover our exclusive selection of premium properties across Nigeria
          </p>
        </div>

        {/* Responsive Card Grid with Enhanced Mobile-First Design */}
        <div 
          id="property-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          role="grid"
          aria-label="Property listings"
        >
          {properties.map((property, index) => (
            <div 
              key={property.id}
              ref={focusedCardIndex === index ? (ref) => ref?.focus() : null}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${property.title}. Price: ${property.price}. Location: ${property.location}.`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => {
                modalTriggerRef.current = document.activeElement as HTMLDivElement;
                openModal(property);
              }}
              onKeyDown={(e) => handleCardKeyDown(e, property)}
            >
              {/* Image Container with 4:3 Aspect Ratio and Lazy Loading */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <LazyImage
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced Gradient Overlay for Better Contrast */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%)'
                  }}
                />

                {/* Additional overlay for high-contrast mode */}
                <div className={`absolute inset-0 transition-opacity duration-200 ${isHighContrast ? 'bg-black/50' : 'bg-transparent'}`} />

                {/* Wishlist & Share Icons */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(property.id);
                    }}
                    aria-label={isInWishlist(property.id) ? `Remove ${property.title} from wishlist` : `Add ${property.title} to wishlist`}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 min-w-[40px] min-h-[40px] ${
                      isInWishlist(property.id) 
                        ? 'bg-red-500/90 text-white' 
                        : 'bg-white/90 text-gray-600 hover:bg-red-500/90 hover:text-white'
                    }`}
                  >
                    <Heart size={16} fill={isInWishlist(property.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(property);
                    }}
                    aria-label={`Share ${property.title}`}
                    className="p-2 rounded-full bg-white/90 text-gray-600 hover:bg-blue-500/90 hover:text-white backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 min-w-[40px] min-h-[40px]"
                  >
                    <Share2 size={16} />
                  </button>
                </div>

                {/* Property Type & Price Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-roboto bg-blue-600/90 text-white backdrop-blur-sm">
                    {property.type}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-roboto bg-white/90 text-gray-900 backdrop-blur-sm">
                    {property.price}
                  </span>
                </div>

                {/* View Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white/95 text-gray-900 font-semibold rounded-lg backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <Eye size={16} className="inline mr-2" />
                    View Details
                  </button>
                </div>

                {/* Property Title Overlay with Enhanced Contrast */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className={`text-lg font-bold text-white mb-1 font-montserrat ${isHighContrast ? 'text-shadow-lg' : ''}`}
                      style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}>
                    {property.title}
                  </h3>
                  <div className={`flex items-center text-white/90 text-sm font-roboto ${isHighContrast ? 'text-shadow' : ''}`}
                       style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    <MapPinIcon size={14} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4 font-roboto line-clamp-2">
                  {property.description}
                </p>

                {/* Property Details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {property.beds && (
                      <div className="flex items-center text-gray-500 text-sm font-roboto font-medium">
                        <BedIcon size={16} className="mr-1" />
                        <span>{property.beds}</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center text-gray-500 text-sm font-roboto font-medium">
                        <BathIcon size={16} className="mr-1" />
                        <span>{property.baths}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-500 text-sm font-roboto font-medium">
                      <Square size={16} className="mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg font-montserrat">
            View All Properties
          </button>
        </div>

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
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[40px] min-h-[40px]"
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
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
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
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <BedIcon size={24} className="mx-auto mb-2 text-gray-600" />
                            <div className="text-sm font-medium text-gray-900">{selectedProperty.beds}</div>
                            <div className="text-xs text-gray-500">Bedrooms</div>
                          </div>
                        )}
                        {selectedProperty.baths && (
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <BathIcon size={24} className="mx-auto mb-2 text-gray-600" />
                            <div className="text-sm font-medium text-gray-900">{selectedProperty.baths}</div>
                            <div className="text-xs text-gray-500">Bathrooms</div>
                          </div>
                        )}
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
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
                          <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            <Phone size={16} className="mr-2" />
                            Call Agent
                          </button>
                          <button className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                            <Calendar size={16} className="mr-2" />
                            Schedule Tour
                          </button>
                          <button
                            onClick={() => handleShare(selectedProperty)}
                            className="w-full flex items-center justify-center px-4 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
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