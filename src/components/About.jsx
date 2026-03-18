import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">About</span>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">
          Blending full stack development, data analytics, and machine learning
          to build end-to-end, impact-driven products.
        </p>
      </header>

      <motion.div
        className="glass-card"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.24 }}
        style={{
          padding: '1.5rem 1.4rem',
          fontSize: '0.95rem',
          lineHeight: 1.6
        }}
      >
        <p style={{ marginBottom: '0.85rem', color: 'var(--text-soft)' }}>
          I am a Computer Science student at Lovely Professional University
          with a strong interest in full stack development, data analytics, and
          machine learning. I enjoy building real-world applications, solving
          complex problems using data structures and algorithms, and working on
          impactful projects.
        </p>
        <p style={{ color: 'var(--text-soft)' }}>
          I have experience with modern web technologies, data analysis tools,
          and cloud technologies. I&apos;m driven by curiosity and continuous
          learning — from designing scalable backend systems to turning raw data
          into actionable insights and intuitive user experiences.
        </p>
      </motion.div>
    </>
  );
};

export default About;

