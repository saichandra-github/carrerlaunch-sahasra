import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import './Skills.css';

const Skills = () => {
  // We extract the array of 4 skills we defined in portfolio.js
  const skillsList = portfolioData.skills['Technical Skills'];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">Core technologies I use to build solutions.</p>
        </motion.div>

        <div className="skills-simple-grid">
          {skillsList.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="simple-skill-card glass-panel hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                
                <div className="skill-progress-container">
                  <div className="skill-level-text">Proficiency: {skill.level}%</div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
