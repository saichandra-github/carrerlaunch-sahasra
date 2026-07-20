import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './FloatingScroll.css';

const FloatingScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate rotation for progress ring
  const strokeDashoffset = useTransform(scaleX, [0, 1], [113, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      className={`floating-scroll ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="progress-ring" width="44" height="44">
        <circle
          className="progress-ring-circle-bg"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="3"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
        />
        <motion.circle
          className="progress-ring-circle"
          stroke="var(--accent-primary)"
          strokeWidth="3"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
          style={{ 
            strokeDasharray: 113, 
            strokeDashoffset: strokeDashoffset,
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%'
          }}
        />
      </svg>
      <ArrowUp size={20} className="arrow-icon" />
    </motion.div>
  );
};

export default FloatingScroll;
