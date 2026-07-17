import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import profileImg from '../../assets/MyProfile.jpeg';
import './Hero.css';

const Hero = () => {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const role = personal.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % personal.roles.length);
        return;
      }
      
      setCurrentText((prev) => 
        isDeleting 
          ? role.substring(0, prev.length - 1)
          : role.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, personal.roles]);

  // Stagger variants for bio
  const words = personal.shortDescription.split(' ');

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-content">
          {/* LEFT SIDE: 60% */}
          <div className="hero-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="greeting"
            >
              <span className="greeting-text">👋 Hi, I'm</span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-purple-blue">{personal.name}</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="role-container"
            >
              <span className="role-text">{currentText}</span>
              <span className="cursor-blink">|</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-description"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.02 }}
                  style={{ display: 'inline-block', marginRight: '5px' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#projects" className="primary-btn interactive magnetic-btn">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="/myresume.pdf" 
                download="Sahasra_Poreddy_Resume.pdf"
                className="secondary-btn interactive magnetic-btn"
                aria-label="Download Sahasra Poreddy Resume"
              >
                <span>Download Resume</span>
                <Download size={18} />
              </a>
              <a href="#contact" className="third-btn interactive magnetic-btn">
                <span>Contact Me</span>
                <MessageSquare size={18} />
              </a>
            </motion.div>

            <motion.div 
              className="quick-info-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {personal.quickInfo.map((info) => (
                <div key={info.id} className="quick-info-item">
                  <span className="quick-icon">{info.icon}</span>
                  <span className="quick-text">{info.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </div>

          {/* RIGHT SIDE: 40% */}
          <div className="hero-right">
            <motion.div
              className="floating-portrait-container"
              initial={{ opacity: 0, x: 50, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <img src={profileImg} alt={personal.name} className="hero-profile-image" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
