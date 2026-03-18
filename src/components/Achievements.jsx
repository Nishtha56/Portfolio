import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from 'react-icons/si';

const achievements = [
  {
    platform: 'LeetCode',
    detail: '1450+ rank in contest with consistent DSA and competitive problem-solving practice.',
    icon: SiLeetcode,
    link: 'https://leetcode.com/u/nishtha80/'
  },
  {
    platform: 'HackerRank',
    detail: 'Earned 5 stars in C++, Java, and Python with regular problem-solving practice.',
    icon: SiHackerrank,
    link: 'https://www.hackerrank.com/profile/nishtha70'
  },
  {
    platform: 'Codeforces',
    detail: 'Active competitive programmer focused on improving speed, accuracy, and contest strategy.',
    icon: SiCodeforces,
    link: 'https://codeforces.com/profile/nishtha70'
  },
  {
    platform: 'GeeksforGeeks',
    detail: 'Consistent DSA practice and interview-focused preparation.',
    icon: SiGeeksforgeeks,
    link: 'https://www.geeksforgeeks.org/profile/nishtha56?tab=activity'
  }
];

const Achievements = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Achievements</span>
        <h2 className="section-title">Competitive Programming & DSA</h2>
        <p className="section-subtitle">
          I actively participate in coding contests and practise DSA to stay
          sharp and improve problem-solving skills.
        </p>
      </header>

      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        style={{
          padding: '1.3rem 1.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.88rem',
            color: 'var(--text-soft)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.platform}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      marginTop: 2
                    }}
                  >
                    <Icon size={16} />
                  </span>
                  <span>
                    <strong style={{ color: 'var(--text-main)' }}>{item.platform}: </strong>
                    {item.detail}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};

export default Achievements;

