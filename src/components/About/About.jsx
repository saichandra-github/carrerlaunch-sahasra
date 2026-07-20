import { Target, TrendingUp, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            My career goals, objectives, and areas of interest.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-panel p-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-gradient">About Me</h3>
            <p>
              {portfolioData.personal.bio}
            </p>
          </motion.div>

          <div className="about-cards">
            <motion.div 
              className="info-card glass-panel hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="icon-wrapper">
                <Target size={24} className="text-accent" />
              </div>
              <h4>Current Objective</h4>
              <p>My objective is to continuously learn, enhance my technical skills, and build a strong foundation in Data Science.</p>
            </motion.div>
            
            <motion.div 
              className="info-card glass-panel hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="icon-wrapper">
                <TrendingUp size={24} className="text-accent" />
              </div>
              <h4>Career Goal</h4>
              <p>Build a successful career in AI & Machine Learning by contributing to impactful and innovative projects.</p>
            </motion.div>

            <motion.div 
              className="info-card glass-panel hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="icon-wrapper">
                <Heart size={24} className="text-accent" />
              </div>
              <h4>Areas of Interest</h4>
              <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-tertiary)', fontSize: '0.95rem' }}>
                <li>Data Science</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Data Analytics</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
