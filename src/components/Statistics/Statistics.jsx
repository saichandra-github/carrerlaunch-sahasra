import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import './Statistics.css';

const Counter = ({ from, to, suffix, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="stat-value">
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="statistics section">
      <div className="container">
        <div className="stats-grid">
          {portfolioData.statistics.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card glass-panel"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-gradient">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
