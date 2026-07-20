import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const defaultTiltOptions = {
  reverse: false,
  max: 10,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ height: '100%' }}
    >
      <Tilt options={defaultTiltOptions} className="project-card-wrapper">
        <div 
          className="project-card glass interactive hover-lift"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Effect */}
          <motion.div
            className="spotlight"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(139, 92, 246, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          <div className="project-image-container">
            <img src={project.image || "https://placehold.co/600x400/1a1a1a/8b5cf6?text=Project"} alt={project.title} className="project-image" loading="lazy" />
          </div>

          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            
            {project.status && (
              <div className={`status-badge ${project.status === 'Completed' ? 'status-completed' : 'status-working'}`}>
                {project.status === 'Completed' ? '✅ Completed' : '🟡 Currently Working'}
              </div>
            )}
            
            <p className="project-description">{project.description}</p>
            
            <div className="tech-stack" style={{ marginBottom: '20px' }}>
              {project.tech?.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-icon" aria-label={`Live demo for ${project.title}`}>
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
