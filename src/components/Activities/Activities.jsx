import { Award, Users } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Activities.css';

const Activities = () => {
  return (
    <section id="activities" className="activities section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Campus Activities</h2>
          <p className="section-subtitle">
            Leadership, hackathons, and volunteer work outside the classroom.
          </p>
        </div>

        <div className="activities-grid">
          {portfolioData.activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`activity-card glass-panel hover-lift delay-${(index % 4) * 100}`}
            >
              <div className="activity-icon">
                {index % 2 === 0 ? <Users size={24} /> : <Award size={24} />}
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <h4 className="text-gradient">{activity.role}</h4>
                <span className="activity-period">{activity.period}</span>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
