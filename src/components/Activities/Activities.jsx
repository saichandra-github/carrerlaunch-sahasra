import { Award, Users, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { motion } from 'framer-motion';
import './Activities.css';

const Activities = () => {
  return (
    <section id="activities" className="activities section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Campus Activities</h2>
          <p className="section-subtitle">
            Leadership, hackathons, and volunteer work outside the classroom.
          </p>
        </motion.div>

        <div className="activities-timeline">
          {portfolioData.activities.map((activity, index) => (
            <motion.div 
              key={activity.id} 
              className="activities-timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="activities-timeline-dot">
                {index % 2 === 0 ? <Users size={16} /> : <Award size={16} />}
              </div>
              
              <div className="activities-timeline-content glass-panel hover-lift">
                <div className="activity-header">
                  <h3>{activity.title}</h3>
                  <span className="activity-period">
                    <Calendar size={14} style={{ marginRight: '4px' }} /> {activity.period}
                  </span>
                </div>
                
                <h4 className="text-gradient">{activity.role}</h4>
                <p>{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
