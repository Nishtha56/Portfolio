import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const certs = [
  {
    title: 'Generative AI Professional - Oracle',
    date: 'Sept 2025',
    provider: 'Oracle',
    link: 'https://drive.google.com/file/d/1_xKxlHoMjrCfG3lHa0dXxmcSV6PWTZQ0/view?usp=drive_link',
    image: '/certifications/oracle-generative-ai.png'
  },
  {
    title: 'OCI Data Science - Oracle',
    date: 'Sept 2025',
    provider: 'Oracle',
    link: 'https://drive.google.com/file/d/1Hoyc7kFPuUjwRXuLHfaM-9nXpin93AU1/view',
    image: '/certifications/oracle-oci-data-science.png'
  },
  {
    title: 'Data Structure and Algorithm - ByteXL',
    date: 'July 2025',
    provider: 'ByteXL',
    link: 'https://drive.google.com/file/d/1qO4LaXbIN4zCdEoUCi4TBgYDSFfUqROQ/view?usp=sharing',
    image: '/certifications/bytexl-dsa.png'
  },
  {
    title: 'Introduction to Internet of Things - NPTEL',
    date: 'May 2025',
    provider: 'NPTEL',
    link: 'https://drive.google.com/file/d/13nGdAOSJx4dye74bixokMkCocJrVGskN/view',
    image: '/certifications/nptel-iot.png'
  },
  {
    title: 'Cloud Computing - NPTEL',
    date: 'May 2025',
    provider: 'NPTEL',
    link: 'https://drive.google.com/file/d/1DJsip92vG_u9F37A3TH1WrK5YRxB8nid/view?usp=sharing',
    image: '/certifications/nptel-cloud.png'
  },
  {
    title: 'Java Basic - HackerRank',
    date: 'Feb 2026',
    provider: 'HackerRank',
    link: 'https://drive.google.com/file/d/16T3dXcbIX9undwbVzg6QVblqm5Db0bdT/view?usp=drive_link',
    image: '/certifications/hackerrank-java-basic.png'
  }
];

const Certifications = () => {
  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Certifications</span>
        <h2 className="section-title">Verified Learning</h2>
        <p className="section-subtitle">
          Credentials that validate my skills across programming, AI, data structures, and cloud-based technologies.
        </p>
      </header>

      <div className="grid-two-responsive cert-grid">
        {certs.map((cert, idx) => (
          <motion.article
            key={cert.title}
            className="glass-card cert-card"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <motion.div className="cert-image-wrap" whileHover={{ scale: 1.015 }} transition={{ duration: 0.22 }}>
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="cert-image"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <div className="cert-content">
              <motion.h3
                className="cert-title"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                {cert.title}
              </motion.h3>
              <span className="cert-meta">
                {cert.provider} - {cert.date}
              </span>
              <p className="cert-note">Replace this placeholder image with your actual certificate photo.</p>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline cert-link-btn btn-arrow-inline"
                style={{ alignSelf: 'flex-start', fontSize: '0.78rem' }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                View Certificate
                <FaArrowRight size={11} className="btn-arrow-icon" />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default Certifications;
