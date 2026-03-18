import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'Lovely Professional University',
    degree: 'B.Tech Computer Science and Engineering',
    grade: 'CGPA: 8.6',
    duration: '2023 – Present'
  },
  {
    school: 'Kendriya Vidyalaya No. 3 Jalandhar Cantt',
    degree: 'Intermediate',
    grade: '85.4%',
    duration: ''
  },
  {
    school: 'Kendriya Vidyalaya No. 3 Jalandhar Cantt',
    degree: 'Matriculation',
    grade: '85.6%',
    duration: ''
  }
];

const Education = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Education</span>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-subtitle">
          A strong academic foundation in Computer Science, complemented by
          consistent performance in school and university.
        </p>
      </header>

      <div className="grid-three-responsive">
        {education.map((e, idx) => (
          <motion.article
            key={`${e.school}-${e.degree}`}
            className="glass-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            style={{ padding: '1.1rem 1rem' }}
          >
            <h3
              style={{
                fontSize: '0.95rem',
                margin: 0,
                marginBottom: 4
              }}
            >
              {e.school}
            </h3>
            <p
              style={{
                fontSize: '0.82rem',
                margin: 0,
                color: 'var(--text-soft)'
              }}
            >
              {e.degree}
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                margin: '0.45rem 0 0.2rem',
                color: 'var(--text-soft)'
              }}
            >
              {e.grade}
              {e.duration && ` • ${e.duration}`}
            </p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default Education;

