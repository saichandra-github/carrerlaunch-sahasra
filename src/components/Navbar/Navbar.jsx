import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Code, User, Briefcase, GraduationCap, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { id: 'hero', label: 'Home', icon: <Code size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className="glass navbar">
        <div className="navbar-logo text-gradient interactive">
          Portfolio
        </div>
        
        {/* Desktop Links */}
        <ul className="navbar-links desktop-only">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link interactive ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Scroll to ${item.label}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="active-nav-indicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="cta-button interactive desktop-only" onClick={() => scrollToSection('contact')}>
            Let's Talk
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle interactive" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-navbar-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button className="mobile-cta-button" onClick={() => scrollToSection('contact')}>
                  Let's Talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Line */}
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX }} 
      />
    </motion.header>
  );
};

export default Navbar;
