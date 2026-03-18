import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Astra – Autism Spectrum Disorder Detection',
    description:
      'Developed a full stack autism detection system allowing users to detect autism, take therapy activities, and track progress in real time.',
    features: [
      'Autism prediction ML model',
      'Interactive therapy activities',
      'Real time tracking dashboard',
      'Qualified Smart India Hackathon first round (Top 50 teams)'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/', 
    live: 'https://'
  },
  {
    title: 'Hotel Management System',
    description:
      'Desktop-based system to manage hotel bookings and customer records, focusing on simplicity and reliability.',
    features: [
      'Room booking management',
      'Check-in and check-out tracking',
      'Customer record management'
    ],
    tech: ['Python', 'SQL', 'Tkinter'],
    github: 'https://github.com/',
    live: ''
  }
];

const Projects = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          A snapshot of the projects where I combined full stack engineering,
          data analysis, and user-centric design.
        </p>
      </header>

      <div className="grid-two-responsive">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="glass-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      style={{
        padding: '1.3rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: -60,
          background:
            'radial-gradient(circle at 0 0, rgba(56,189,248,0.18), transparent 60%)'
        }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div style={{ position: 'relative' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>{project.title}</h3>
        <p
          style={{
            fontSize: '0.86rem',
            color: 'var(--text-soft)',
            marginBottom: 8
          }}
        >
          {project.description}
        </p>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.8rem',
            color: 'var(--text-soft)',
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}
        >
          {project.features.map((f) => (
            <li key={f} style={{ display: 'flex', gap: 6 }}>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 999,
                  background: '#38bdf8',
                  marginTop: 7
                }}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          position: 'relative',
          marginTop: 10,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6
        }}
      >
        {project.tech.map((t) => (
          <span key={t} className="chip" style={{ fontSize: '0.72rem' }}>
            {t}
          </span>
        ))}
      </div>

      <div
        style={{
          position: 'relative',
          marginTop: 10,
          display: 'flex',
          gap: 8
        }}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-arrow-inline"
          style={{ fontSize: '0.8rem', padding: '0.45rem 0.8rem' }}
        >
          <FaGithub size={13} />
          GitHub
          <FaArrowRight size={11} className="btn-arrow-icon" />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-arrow-inline"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.8rem' }}
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
            <FaArrowRight size={11} className="btn-arrow-icon" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default Projects;

