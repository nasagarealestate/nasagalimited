import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  onLearnMore?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  index,
  onLearnMore 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onLearnMore?.();
    }
  };

  const isActive = isHovered || isFocused;

  return (
    <article
      ref={elementRef}
      className={`
        group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 
        border border-white/20 shadow-lg
        cursor-pointer transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-2xl hover:bg-white/90
        focus:scale-[1.03] focus:shadow-2xl focus:bg-white/90
        focus:outline-none focus:ring-2 focus:ring-homelight-secondary focus:ring-offset-2
        transform-gpu
        ${hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
      style={{
        transitionDelay: hasIntersected ? `${index * 100}ms` : '0ms',
      }}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${title}`}
      aria-describedby={`service-desc-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      onClick={onLearnMore}
    >
      {/* Glassmorphism background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-homelight-primary/10 to-white/30 rounded-2xl opacity-60" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with hover animation */}
        <div className={`
          mb-4 transition-transform duration-300 ease-out
          ${isActive ? 'scale-110 rotate-3' : 'scale-100'}
        `}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-homelight-text font-open-sans">
          {title}
        </h3>

        {/* Description */}
        <p 
          id={`service-desc-${index}`}
          className="text-gray-600 font-open-sans leading-relaxed mb-4"
        >
          {description}
        </p>

        {/* Learn More CTA - appears on hover/focus */}
        <div className={`
          flex items-center text-homelight-primary font-medium font-open-sans
          transition-all duration-300 ease-out
          ${isActive 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2'
          }
        `}>
          <span className="mr-2">Learn More</span>
          <ChevronRight 
            size={16} 
            className={`
              transition-transform duration-300
              ${isActive ? 'translate-x-1' : 'translate-x-0'}
            `}
          />
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={`
        absolute inset-0 rounded-2xl bg-gradient-to-r from-homelight-primary/20 to-homelight-secondary/20
        transition-opacity duration-300
        ${isActive ? 'opacity-100' : 'opacity-0'}
      `} />
    </article>
  );
};
