import { Download, Target, Code, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            My career goals, passions, and areas of interest.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text glass-panel p-md">
            <h3 className="text-gradient">My Story</h3>
            <p>
              {portfolioData.personal.bio}
            </p>
            
            <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-md hover-lift interactive">
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="about-cards">
            <div className="info-card glass-panel hover-lift delay-100">
              <div className="icon-wrapper">
                <Target size={24} className="text-accent" />
              </div>
              <h4>Career Objective</h4>
              <p>My goal is to continuously learn, enhance my technical skills, and build a successful career in Data Science and Artificial Intelligence by contributing to impactful and innovative projects.</p>
            </div>
            
            <div className="info-card glass-panel hover-lift delay-200">
              <div className="icon-wrapper">
                <Code size={24} className="text-accent" />
              </div>
              <h4>Passion</h4>
              <p>Technology and continuous learning.</p>
            </div>

            <div className="info-card glass-panel hover-lift delay-300">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
