import { useEffect } from 'react';

export const useIOSOptimization = () => {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Enable smooth scrolling and optimize for iOS using setProperty to avoid TS issues
      document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
      document.documentElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
      
      // Add hardware acceleration
      document.body.style.setProperty('-webkit-transform', 'translate3d(0,0,0)');
      document.body.style.setProperty('-webkit-backface-visibility', 'hidden');
      document.body.style.setProperty('transform', 'translate3d(0,0,0)');
      document.body.style.setProperty('backface-visibility', 'hidden');
      
      // Prevent rubber band scrolling
      document.body.style.setProperty('overscroll-behavior', 'none');
      
      // Prevent zoom on input focus
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
        );
      }
    }

    return () => {
      if (isIOS) {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 
            'width=device-width, initial-scale=1'
          );
        }
      }
    };
  }, []);

  return null;
};