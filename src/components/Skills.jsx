import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCog, FaTools, FaUsers } from 'react-icons/fa';

const skillsData = [
  {
    title: 'Languages',
    icon: <FaCode />,
    color: '#38bdf8',
    items: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    title: 'Development',
    icon: <FaCog />,
    color: '#a855f7',
    items: ['HTML', 'CSS', 'ReactJS', 'NodeJS', 'ExpressJS']
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    color: '#f97316',
    items: [
      'MySQL',
      'MongoDB',
      'Power BI',
      'Tableau',
      'Docker',
      'Apache Spark',
      'Figma',
      'Git',
      'GitHub'
    ]
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers />,
    color: '#22c55e',
    items: ['Communication', 'Problem Solving', 'Detail Oriented', 'Adaptable']
  }
];

const Skills = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">Tech Stack & Strengths</h2>
        <p className="section-subtitle">
          A curated collection of technologies and skills I use to build
          reliable, scalable, and delightful experiences.
        </p>
      </header>

      <div className="grid-two-responsive">
        {skillsData.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </>
  );
};

const SkillCard = ({ group, index }) => {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      style={{
        padding: '1.3rem 1.2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: -60,
          background: `radial-gradient(circle at top left, ${group.color}33, transparent 55%)`,
          opacity: 0.5
        }}
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `radial-gradient(circle at 30% 0, ${group.color}, transparent 60%)`,
                color: '#f9fafb',
                fontSize: 14,
                boxShadow: '0 10px 26px rgba(15,23,42,0.8)'
              }}
            >
              {group.icon}
            </div>
            <div>
              <h3
                style={{
                  fontSize: '0.96rem',
                  margin: 0
                }}
              >
                {group.title}
              </h3>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-soft)'
                }}
              >
                {group.items.length} skills
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 6,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8
          }}
        >
          {group.items.map((skill) => (
            <motion.span
              key={skill}
              className="chip"
              whileHover={{
                y: -2,
                borderColor: `${group.color}aa`,
                color: '#e5e7eb'
              }}
              style={{ fontSize: '0.74rem' }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: group.color
                }}
              />
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

