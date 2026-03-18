import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Message captured locally. Connect via email / LinkedIn for now.');
    setTimeout(() => setStatus(''), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <header className="section-header">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">Let&apos;s Collaborate</h2>
        <p className="section-subtitle">
          Whether it&apos;s internships, projects, or tech discussions, I&apos;d
          love to connect.
        </p>
      </header>

      <div className="grid-two-responsive">
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          style={{
            padding: '1.2rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            fontSize: '0.9rem'
          }}
        >
          <p style={{ color: 'var(--text-soft)', marginBottom: 8 }}>
            I&apos;m currently looking for opportunities in software
            development, data analytics, and machine learning. Feel free to
            reach out via email, phone, or the form.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: '0.86rem' }}>
              <strong>Email: </strong>
              <a
                href="mailto:nishtha7038@gmail.com"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                nishtha7038@gmail.com
              </a>
            </span>
            <span style={{ fontSize: '0.86rem' }}>
              <strong>Phone: </strong>
              <a href="tel:+919780367664" className="link">
                +91-9780367664
              </a>
            </span>
          </div>

          <div
            style={{
              marginTop: 10,
              display: 'flex',
              gap: 8
            }}
          >
            <a
              href="https://github.com/Nishtha56"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
            >
              <FaGithub size={14} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nishtha56/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
            >
              <FaLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{
            padding: '1.2rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: '0.8rem' }}>Name</label>
            <input
              className="input"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={update('name')}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: '0.8rem' }}>Email</label>
            <input
              className="input"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={update('email')}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: '0.8rem' }}>Message</label>
            <textarea
              className="textarea"
              required
              placeholder="Tell me a bit about your project or opportunity..."
              value={form.message}
              onChange={update('message')}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              alignSelf: 'flex-start',
              marginTop: 4,
              paddingInline: '1.1rem'
            }}
          >
            Send Message
          </button>

          {status && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ fontSize: '0.8rem', color: 'var(--text-soft)' }}
            >
              {status}
            </motion.span>
          )}
        </motion.form>
      </div>
    </>
  );
};

export default Contact;

