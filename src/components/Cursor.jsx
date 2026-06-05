import { useState, useEffect } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only run on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    
    // Automatically detect interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a, button, .hover-trigger')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>


      
      {/* Inner Dot */}
      <div 
        className={`pointer-events-none fixed top-0 left-0 z-100 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white transition-transform duration-100 ease-out mix-blend-difference ${isClicking ? 'scale-50' : 'scale-100'} ${isHovering ? 'scale-0' : ''}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }} 
      />

      {/* Outer Ring */}
      <div 
        className={`pointer-events-none fixed top-0 left-0 z-100 w-8 h-8 -ml-4 -mt-4 rounded-full border border-slate-300 transition-all duration-300 ease-out mix-blend-difference ${isHovering ? 'scale-[1.8] bg-white opacity-20 border-transparent' : 'scale-100'} ${isClicking ? 'scale-[0.8]' : ''}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
    </>
  );
}
