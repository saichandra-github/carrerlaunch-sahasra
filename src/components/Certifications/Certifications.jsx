import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Licenses & <span className="text-gradient">Certifications</span></h2>
          <p className="section-subtitle">Professional credentials and coursework completions.</p>
        </motion.div>

        <div className="certifications-grid">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="cert-card glass-panel hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-icon-wrapper">
                <Award size={28} className="text-accent" />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-provider">{cert.provider}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-icon cert-btn" aria-label={`View ${cert.title} certificate`}>
                <ExternalLink size={16} /> View
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
