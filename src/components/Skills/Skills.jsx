import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { portfolioData } from '../../data/portfolio';
import './Skills.css';

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">My toolbox for building digital experiences.</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={defaultTiltOptions} className="skill-card-tilt">
                <div className="skill-card glass interactive">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-category">{skill.category}</p>
                  <div className="skill-progress-bar">
                    <motion.div 
                      className="skill-progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      style={{ background: skill.color }}
                    />
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
