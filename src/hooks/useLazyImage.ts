import { useState, useEffect, useRef } from 'react';

interface UseLazyImageProps {
  src: string;
  placeholder?: string;
  threshold?: number;
}

interface UseLazyImageReturn {
  imgRef: React.RefObject<HTMLImageElement>;
  isLoaded: boolean;
  isError: boolean;
  imgSrc: string;
}

export const useLazyImage = ({ 
  src, 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="100%25" height="100%25" fill="%23f3f4f6"/%3E%3C/svg%3E',
  threshold = 0.1 
}: UseLazyImageProps): UseLazyImageReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start loading the image
          const img = new Image();
          img.onload = () => {
            setImgSrc(src);
            setIsLoaded(true);
          };
          img.onerror = () => {
            setIsError(true);
          };
          img.src = src;
          
          // Stop observing once we start loading
          observer.unobserve(imgElement);
        }
      },
      { threshold }
    );

    observer.observe(imgElement);

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [src, threshold]);

  return {
    imgRef,
    isLoaded,
    isError,
    imgSrc
  };
};
