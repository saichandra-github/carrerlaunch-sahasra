import { useState, useEffect, useContext } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code, User, Briefcase, GraduationCap, Mail, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../App';
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
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    }
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
        
        <ul className="navbar-links">
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
          <button 
            className="theme-toggle interactive" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="cta-button interactive" onClick={() => scrollToSection('contact')}>
            Let's Talk
          </button>
        </div>
      </nav>
      
      {/* Scroll Progress Line */}
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX }} 
      />
    </motion.header>
  );
};

export default Navbar;
