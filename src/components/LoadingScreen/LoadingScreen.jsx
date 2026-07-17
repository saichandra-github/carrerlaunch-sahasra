import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Give it a beat before unmounting
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="loading-content">
        <motion.div
          className="logo-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text text-gradient">Portfolio</span>
        </motion.div>
        <div className="progress-container">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear', duration: 0.2 }}
          />
        </div>
        <motion.div
          className="progress-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.min(progress, 100)}%
        </motion.div>
      </div>
      <div className="loading-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`} />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
