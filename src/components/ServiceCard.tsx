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
        group relative bg-white rounded-lg p-8 
        border border-gray-100 
        cursor-pointer transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        focus:scale-[1.02] focus:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        h-full
        ${hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
      style={{
        transitionDelay: hasIntersected ? `${index * 100}ms` : '0ms',
        boxShadow: isActive 
          ? 'rgba(0, 0, 0, 0.15) 0px 8px 24px 0px' 
          : 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'
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
      {/* Content */}
      <div className="flex flex-col h-full">
        {/* Icon with hover animation */}
        <div className={`
          mb-6 transition-transform duration-300 ease-out
          ${isActive ? 'scale-105' : 'scale-100'}
        `}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p 
          id={`service-desc-${index}`}
          className="text-gray-600 leading-relaxed mb-6 flex-grow"
        >
          {description}
        </p>

        {/* Learn More CTA - appears on hover/focus */}
        <div className={`
          flex items-center font-medium
          transition-all duration-300 ease-out
          ${isActive 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-70 translate-y-1'
          }
        `}
        style={{ color: 'rgb(70, 182, 255)' }}
        >
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
    </article>
  );
};
