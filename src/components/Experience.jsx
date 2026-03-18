import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: '1M1B (One Million for One Billion) Foundation – AICTE',
    role: 'Data Analyst Intern',
    duration: 'August 2025 – September 2025',
    work: [
      'Collaborated with mentors and team members to design project workflows.',
      'Worked on social impact datasets and real world problem solving.'
    ],
    tech: ['Tableau', 'Python']
  },
  {
    company: 'Edunet Foundation – AICTE Shell Skills4Future',
    role: 'Data Analyst Intern',
    duration: 'August 2025 – September 2025',
    work: [
      'Developed and optimized ML model.',
      'Preprocessed dataset with 10,000+ records and 15+ features.'
    ],
    tech: ['Python']
  }
];

const Experience = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Internship Journey</h2>
        <p className="section-subtitle">
          Practical exposure to real-world data problems, social impact projects,
          and industry workflows.
        </p>
      </header>

      <div className="grid-two-responsive">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.company}
            className="glass-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            style={{ padding: '1.2rem 1.2rem' }}
          >
            <header
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                marginBottom: 8
              }}
            >
              <h3
                style={{
                  fontSize: '0.96rem',
                  margin: 0
                }}
              >
                {exp.role}
              </h3>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-soft)'
                }}
              >
                {exp.company}
              </span>
              <span
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-soft)'
                }}
              >
                {exp.duration}
              </span>
            </header>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 0.6rem',
                fontSize: '0.82rem',
                color: 'var(--text-soft)',
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}
            >
              {exp.work.map((item) => (
                <li key={item} style={{ display: 'flex', gap: 6 }}>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 999,
                      background: '#a855f7',
                      marginTop: 7
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {exp.tech.map((t) => (
                <span key={t} className="chip" style={{ fontSize: '0.72rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default Experience;

