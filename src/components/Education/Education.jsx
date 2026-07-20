import { BookOpen, Calendar, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and qualifications.</p>
        </motion.div>

        <div className="timeline">
          {portfolioData.education.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              
              <div className="timeline-content glass-panel hover-lift">
                <div className="edu-header">
                  <h3>{item.university}</h3>
                  <span className="edu-date">
                    <Calendar size={16} /> {item.graduation}
                  </span>
                </div>
                
                <h4 className="text-gradient">
                  {item.degree} {item.major ? `in ${item.major}` : ''}
                </h4>
                
                {item.minor && (
                  <p className="edu-minor">Minor in {item.minor}</p>
                )}
                
                <div className="edu-stats">
                  <span className="cgpa">
                    <GraduationCap size={16} /> {item.cgpa}
                  </span>
                </div>
                
                {item.coursework && item.coursework.length > 0 && (
                  <div className="coursework">
                    <strong><BookOpen size={14} style={{ display: 'inline', marginRight: '4px' }} /> Relevant Coursework:</strong>
                    <div className="course-tags" style={{ marginTop: '8px' }}>
                      {item.coursework.map((course, idx) => (
                        <span key={idx} className="tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
