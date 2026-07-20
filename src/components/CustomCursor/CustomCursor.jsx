import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering over an interactive element
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.5,
      backgroundColor: 'rgba(139, 92, 246, 0.2)', // Accent color with low opacity
      border: '1px solid rgba(139, 92, 246, 0.8)',
      mixBlendMode: 'screen',
    },
  };

  return (
    <>
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="cursor-outline"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
