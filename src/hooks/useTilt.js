import { useState, useRef, useCallback, useEffect } from 'react';

export function useTilt(maxTilt = 6, scale = 1.02) {
  const ref = useRef(null);
  const requestRef = useRef();
  
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.25s ease-out'
  });

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateX = (0.5 - y) * (maxTilt * 2);
      const rotateY = (x - 0.5) * (maxTilt * 2);
      
      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 0.25s ease-out',
        willChange: 'transform',
        zIndex: 10,
      });
    });
  }, [maxTilt, scale]);

  const onMouseLeave = useCallback(() => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s ease-out',
      willChange: 'transform',
      zIndex: 1,
    });
  }, []);

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return { ref, onMouseMove, onMouseLeave, style };
}
