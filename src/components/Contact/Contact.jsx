import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Contact.css';

const Contact = () => {
  const email = portfolioData.contact.email;
  const phone = portfolioData.contact.phone;
  const location = portfolioData.contact.location;

  const mailtoLink = `mailto:${email}?subject=Portfolio%20Inquiry&body=Hello%20Sahasra,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity.%0A%0ARegards,`;
  const telLink = `tel:${phone.replace(/\s+/g, '')}`;

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Let's connect and create something amazing.</p>
        </motion.div>

        <div className="contact-content-centered">
          <motion.div
            className="contact-cards-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Location Card */}
            <div className="info-card glass-panel interactive hover-lift">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-details">
                <h3>Location</h3>
                <p>{location}</p>
              </div>
            </div>

            {/* Email Card */}
            <a href={mailtoLink} className="info-card glass-panel interactive hover-lift contact-link">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-details">
                <h3>Email</h3>
                <p>{email}</p>
              </div>
            </a>

            {/* Phone Card */}
            <a href={telLink} className="info-card glass-panel interactive hover-lift contact-link">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>{phone}</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
