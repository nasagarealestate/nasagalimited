import React from 'react';
import { useParallax } from '../hooks/useParallax';

interface BillboardImageProps {
  className?: string;
}

export const BillboardImage: React.FC<BillboardImageProps> = ({ className = '' }) => {
  const parallaxOffset = useParallax({ speed: 0.3 });

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Parallax container */}
      <div 
        className="transform-gpu transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${-parallaxOffset}px)`,
        }}
      >
        <picture className="block w-full h-full">
          {/* Modern format with fallback */}
          <source 
            srcSet="https://i.ibb.co/fYdRGcPN/nasaga-bill-board.jpg" 
            type="image/webp"
          />
          <img
            src="https://i.ibb.co/fYdRGcPN/nasaga-bill-board.jpg"
            alt="Nasaga Limited billboard showcasing our real estate expertise and brand presence"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            style={{
              minHeight: '500px',
              aspectRatio: '4/5',
            }}
          />
        </picture>
      </div>

      {/* Overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Brand overlay - positioned over the billboard */}
      
    </div>
  );
};
