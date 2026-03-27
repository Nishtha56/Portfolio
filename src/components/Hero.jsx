import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = ({ onScrollTo }) => {
  return (
    <div className="grid-two hero-grid" style={{ alignItems: 'center' }}>
      <div className="hero-text-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
        <motion.span
          className="badge-pill"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Computer Science - Full Stack - Data
        </motion.span>

        <motion.h1
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            lineHeight: 1.08,
            letterSpacing: -0.04
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span style={{ color: 'var(--text-soft)', fontWeight: 400 }}>Hi, I&apos;m</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e5e7eb, #a5b4fc, #38bdf8)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Nishtha
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-soft)',
            maxWidth: 560
          }}
        >
          <AnimatedTitle />
        </motion.p>

        <motion.div
          className="btn-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <a href="/NewNishthaCollegeCV1.pdf" className="btn btn-primary" download="Nishtha-CV.pdf">
            <FaDownload size={14} />
            Download Resume
          </a>
          <button className="btn btn-outline btn-arrow-inline" onClick={() => onScrollTo('projects')}>
            View Projects
            <FaArrowRight size={13} className="btn-arrow-icon" />
          </button>
          <a href="https://github.com/Nishtha56" target="_blank" rel="noreferrer" className="btn btn-outline">
            <FaGithub size={14} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nishtha56/" target="_blank" rel="noreferrer" className="btn btn-outline">
            <FaLinkedin size={14} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="glass-card card-float"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        style={{
          padding: '1.35rem 1.2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: -40,
            background:
              'radial-gradient(circle at 0 0, rgba(56,189,248,0.24), transparent 60%), radial-gradient(circle at 120% 120%, rgba(129,140,248,0.3), transparent 60%)',
            opacity: 0.55,
            pointerEvents: 'none'
          }}
          animate={{ opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem'
          }}
        >
          <h2
            style={{
              fontSize: '1.02rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            Developer Snapshot
            <span className="chip" style={{ fontSize: '0.7rem', fontWeight: 500 }}>
              Open to Opportunities
            </span>
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-soft)' }}>
            Computer Science student at Lovely Professional University, building full stack solutions and data-driven
            applications with a strong foundation in DSA.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '0.65rem',
              marginTop: '0.2rem'
            }}
          >
            <InfoCard title="Full Stack" subtitle="React - Node - Express" />
            <InfoCard title="Data and ML" subtitle="Python - SQL - Analytics" />
            <InfoCard title="Problem Solving" subtitle="200+ DSA problems" />
            <InfoCard title="Hackathon Experience" subtitle="SIH Top 50 team" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const InfoCard = ({ title, subtitle }) => (
  <motion.div className="hero-info-card" whileHover={{ y: -3, borderColor: 'var(--accent-strong)' }} transition={{ duration: 0.18 }}>
    <span style={{ fontWeight: 500 }}>{title}</span>
    <span style={{ color: 'var(--text-soft)', fontSize: '0.76rem' }}>{subtitle}</span>
  </motion.div>
);

const AnimatedTitle = () => {
  const base = 'Computer Science Student | ';
  const segments = ['Full Stack Developer', 'Data Analyst', 'ML Enthusiast', 'Problem Solver'];

  return (
    <span>
      {base}
      <span
        style={{
          display: 'inline-flex',
          position: 'relative',
          minWidth: 0
        }}
      >
        <motion.span
          style={{
            background: 'linear-gradient(135deg, #f97316, #a855f7, #38bdf8)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600
          }}
          variants={textCycleVariants}
          animate="animate"
        >
          {segments.map((seg) => (
            <span key={seg} style={{ paddingRight: 8 }}>
              {seg}
            </span>
          ))}
        </motion.span>
      </span>
    </span>
  );
};

const textCycleVariants = {
  animate: {
    x: ['0%', '-100%', '-200%', '-300%', '0%'],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export default Hero;
