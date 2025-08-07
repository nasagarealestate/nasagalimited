import { useEffect, useState, useCallback } from 'react';

interface UseParallaxProps {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = ({ speed = 0.5, disabled = false }: UseParallaxProps = {}) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (disabled) return;
    
    const scrolled = window.pageYOffset;
    const parallaxOffset = scrolled * speed;
    setOffset(parallaxOffset);
  }, [speed, disabled]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || disabled) {
      return;
    }

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, [handleScroll, disabled]);

  return offset;
};
