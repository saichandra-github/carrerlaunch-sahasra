import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { portfolioData } from '../../data/portfolio';
import { sendContactMessage } from '../../services/contactService';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await sendContactMessage(formData);
      
      if (!response.success) throw new Error(response.error);

      toast.success(
        <div>
          <b>✅ Message sent successfully!</b>
          <p style={{ margin: 0, marginTop: '4px', fontSize: '14px' }}>Thank you for reaching out. I'll get back to you soon.</p>
        </div>,
        { duration: 5000 }
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error(
        <div>
          <b>❌ Something went wrong.</b>
          <p style={{ margin: 0, marginTop: '4px', fontSize: '14px' }}>Please try again later.</p>
        </div>,
        { duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <MapPin />, title: "Location", detail: portfolioData.contact.location },
    { icon: <Mail />, title: "Email", detail: portfolioData.contact.email },
    { icon: <Phone />, title: "Phone", detail: portfolioData.contact.phone },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Let's work together to create something amazing.</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="info-card glass interactive"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-details">
                  <h3>{info.title}</h3>
                  <p>{info.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={`interactive ${errors.name ? 'error' : ''}`}
                />
                <label htmlFor="name">Your Name</label>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={`interactive ${errors.email ? 'error' : ''}`}
                />
                <label htmlFor="email">Your Email</label>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={`interactive ${errors.message ? 'error' : ''}`}
                ></textarea>
                <label htmlFor="message">Your Message</label>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-btn interactive magnetic-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
