import { ArrowUp, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const linkedinUrl = "https://www.linkedin.com/in/sahasra-poreddy-101850380/"; // User provided LinkedIn profile

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-content">
          
          <div className="footer-left">
            <h3 className="text-gradient footer-brand">Sahasra Poreddy</h3>
            <p className="footer-tagline">Building impactful data solutions.</p>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Sahasra Poreddy. All Rights Reserved.</p>
          </div>
          
          <div className="footer-right">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
              <ArrowUp size={20} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
