import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB = 'https://github.com/Nishtha56';
const LINKEDIN = 'https://www.linkedin.com/in/nishtha56/';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ activeSection, onScrollTo, theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    onScrollTo(id);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <nav
        className="app-shell"
        style={{
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 4 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: 32,
              height: 32,
              borderRadius: '999px',
              background:
                'radial-gradient(circle at 30% 0, #38bdf8 0, transparent 60%), radial-gradient(circle at 70% 120%, #6366f1 0, transparent 60%)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#f9fafb',
              boxShadow: '0 10px 22px rgba(15,23,42,0.35)'
            }}
          >
            N
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Nishtha</span>
            <span style={{ fontSize: '0.74rem', color: 'var(--text-soft)' }}>
              Dev • Data • ML
            </span>
          </div>
        </a>

        <div
          className="nav-links-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          <div
            className="nav-links"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.9rem'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '0.35rem 0.5rem',
                  borderRadius: 999,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  color:
                    activeSection === item.id
                      ? 'var(--text)'
                      : 'var(--text-soft)',
                  fontWeight: activeSection === item.id ? 600 : 400,
                  position: 'relative'
                }}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 999,
                      background: 'var(--accent-soft)',
                      zIndex: -1
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}
          >
            {/* Theme toggle – extra motion on the icon */}
            <motion.button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'light'}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <span className="theme-toggle-glow" aria-hidden />
              <span className="theme-toggle-icon">
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="moon"
                      initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      style={{ display: 'flex' }}
                    >
                      <motion.span style={{ display: 'flex' }}>
                        <FaMoon size={15} />
                      </motion.span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      }}
                      exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      style={{ display: 'flex' }}
                    >
                      <motion.span style={{ display: 'flex' }}>
                        <FaSun size={15} />
                      </motion.span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.button>

            <div
              className="nav-social-desktop"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <motion.a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ paddingInline: '0.7rem', height: 32, fontSize: 11 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label="GitHub profile"
              >
                <FaGithub size={13} />
              </motion.a>
              <motion.a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ paddingInline: '0.7rem', height: 32, fontSize: 11 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={13} />
              </motion.a>
            </div>

            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 4
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 18,
                  position: 'relative'
                }}
              >
                <motion.span
                  style={lineStyle}
                  animate={
                    open
                      ? { top: 8, rotate: 45 }
                      : { top: 0, rotate: 0 }
                  }
                />
                <motion.span
                  style={lineStyle}
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  style={lineStyle}
                  animate={
                    open
                      ? { bottom: 8, rotate: -45 }
                      : { bottom: 0, rotate: 0 }
                  }
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="app-shell"
            style={{
              paddingTop: 0,
              paddingBottom: 12,
              overflow: 'hidden'
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '0.65rem 0.9rem',
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.5rem 0.5rem',
                    borderRadius: 10,
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    color:
                      activeSection === item.id
                        ? 'var(--text)'
                        : 'var(--text-soft)',
                    fontWeight: activeSection === item.id ? 600 : 400
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  marginTop: 8,
                  paddingTop: 8,
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <a href={GITHUB} className="link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={LINKEDIN} className="link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-links-desktop { flex: 1; justify-content: flex-end; }
          .hamburger-btn { display: block !important; }
          .nav-social-desktop { display: none !important; }
        }
        @media (min-width: 901px) {
          .nav-links { display: flex !important; }
          .nav-social-desktop { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}
      </style>
    </header>
  );
};

const lineStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  height: 2,
  borderRadius: 999,
  background: 'var(--text)'
};

export default Navbar;
