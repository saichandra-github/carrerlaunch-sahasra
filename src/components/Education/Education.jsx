import { BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and qualifications.</p>
        </div>

        <div className="timeline">
          {portfolioData.education.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-content glass-panel hover-lift delay-100">
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
                    <strong>Relevant Coursework:</strong>
                    <div className="course-tags">
                      {item.coursework.map((course, idx) => (
                        <span key={idx} className="tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
