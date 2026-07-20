import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Home from './pages/Home';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Background3D from './components/Background3D/Background3D';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <div className="app-container" key="app">
            <Background3D />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
