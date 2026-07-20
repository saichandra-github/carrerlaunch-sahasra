import { Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Footer.css';

const Footer = () => {

  const { social, email } = portfolioData.contact;

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-content">
          
          <div className="footer-left">
            <h3 className="text-gradient footer-brand">Sahasra Poreddy</h3>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Sahasra Poreddy. All Rights Reserved.</p>
          </div>
          
          <div className="footer-right">
            {social.linkedin && social.linkedin !== '#' && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
