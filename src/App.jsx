import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  FaArrowRight,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMoon,
  FaPhoneAlt,
  FaProjectDiagram,
  FaSun,
  FaTrophy,
  FaUser
} from 'react-icons/fa';
import { SiCodeforces, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from 'react-icons/si';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const skills = [
  {
    group: 'Languages',
    items: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    group: 'Development',
    items: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS']
  },
  {
    group: 'Tools',
    items: ['MongoDB', 'MySQL', 'Power BI', 'Tableau', 'Docker', 'Git', 'GitHub']
  },
  {
    group: 'Strengths',
    items: ['Problem Solving', 'Communication', 'Adaptable', 'Detail Oriented']
  }
];

const projects = [
  {
    title: 'Astra - Autism Spectrum Disorder Detection',
    summary:
      'Full stack platform for autism detection, therapy activities, and progress tracking dashboards.',
    highlights: [
      'ML-powered autism prediction',
      'Interactive therapy module',
      'Real-time progress dashboard',
      'Smart India Hackathon round-1 qualifier (Top 50 teams)'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/',
    live: 'https://astra-sih.onrender.com/'
  },
  {
    title: 'Maze Solver',
    summary: 'Interactive pathfinding visualizer that demonstrates graph traversal in a maze.',
    highlights: [
      'Implemented Breadth-First Search (BFS), Depth-First Search (DFS), and Dijkstra’s Algorithm.',
      'Enabled real-time visualization of node exploration and destination reachability.',
      'Compared algorithms using execution time, efficiency, and path optimality.',
      'Built an intuitive interface to understand pathfinding behavior step-by-step.'
    ],
    tech: ['Graph Algorithms (BFS, DFS, Dijkstra)', 'JavaScript'],
    github: 'https://github.com/Nishtha56/Maze-Solver',
    live: 'https://path-finder-three-phi.vercel.app/'
  },
  {
    title: 'Hotel Management System',
    summary: 'Developed a desktop-based application to manage hotel operations efficiently.',
    highlights: [
      'Implemented functionalities for room booking, customer check-in/check-out, and record management.',
      'Designed features to view, search, and filter booking records.',
      'Enabled CRUD operations (Add, Update, Delete) for customer data.'
    ],
    tech: ['Python', 'SQL', 'Tkinter'],
    github: 'https://github.com/',
    live: ''
  },
  {
    title: 'Acne and Pimple Prediction',
    summary:
      'Machine learning-based system to analyze lifestyle factors and predict the likelihood of acne occurrence.',
    highlights: [
      'Collected and processed data covering diet, stress levels, sleep patterns, water intake, and skincare habits.',
      'Included genetic factors to strengthen prediction quality.',
      'Built and evaluated predictive models for acne likelihood.',
      'Visualized insights for feature relationships and model interpretation.'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib'],
    github: 'https://github.com/Nishtha56/Acne-and-Pimple-Prediction',
    live: ''
  }
];

const experiences = [
  {
    role: 'Data Analyst Intern',
    org: '1M1B Foundation - AICTE',
    date: 'Aug 2025 - Sep 2025',
    points: [
      'Worked with mentors to structure project workflows.',
      'Analyzed social impact datasets for practical problem solving.'
    ]
  },
  {
    role: 'Data Analyst Intern',
    org: 'Edunet Foundation - AICTE Shell Skills4Future',
    date: 'Aug 2025 - Sep 2025',
    points: [
      'Built and optimized an ML model.',
      'Preprocessed 10,000+ rows with 15+ features.'
    ]
  }
];

const certifications = [
  {
    title: 'Generative AI Professional',
    issuer: 'Oracle',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1_xKxlHoMjrCfG3lHa0dXxmcSV6PWTZQ0/view?usp=drive_link',
    image: '/certifications/oracle-generative-ai.png'
  },
  {
    title: 'OCI Data Science',
    issuer: 'Oracle',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1Hoyc7kFPuUjwRXuLHfaM-9nXpin93AU1/view',
    image: '/certifications/oracle-oci-data-science.png'
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'ByteXL',
    date: 'Jul 2025',
    link: 'https://drive.google.com/file/d/1qO4LaXbIN4zCdEoUCi4TBgYDSFfUqROQ/view?usp=sharing',
    image: '/certifications/bytexl-dsa.png'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/1DJsip92vG_u9F37A3TH1WrK5YRxB8nid/view?usp=sharing',
    image: '/certifications/nptel-cloud.png'
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/13nGdAOSJx4dye74bixokMkCocJrVGskN/view',
    image: '/certifications/nptel-iot.png'
  },
  {
    title: 'Java Basic',
    issuer: 'HackerRank',
    date: 'Feb 2026',
    link: 'https://drive.google.com/file/d/16T3dXcbIX9undwbVzg6QVblqm5Db0bdT/view?usp=drive_link',
    image: '/certifications/hackerrank-java-basic.png'
  }
];

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

const education = [
  {
    school: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science and Engineering',
    meta: 'CGPA 8.6 | 2023 - Present'
  },
  {
    school: 'Kendriya Vidyalaya No. 3, Jalandhar Cantt',
    degree: 'Intermediate',
    meta: '85.4%'
  },
  {
    school: 'Kendriya Vidyalaya No. 3, Jalandhar Cantt',
    degree: 'Matriculation',
    meta: '85.6%'
  }
];

const roles = ['Full Stack Developer', 'Data Analyst', 'ML Enthusiast', 'Problem Solver'];

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}NewNishthaCollegeCV1.pdf?v=20260327-1`;
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1900);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: '-80px 0px -30% 0px' }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const node = document.getElementById(id);
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page-wrap">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <div className="ambient" aria-hidden>
        <span className="blob blob-one" />
        <span className="blob blob-two" />
        <span className="blob blob-three" />
      </div>

      <header className="site-nav">
        <div className="container nav-row">
          <button type="button" className="brand" onClick={() => scrollTo('home')}>
            <span className="brand-dot">N</span>
            <span>
              <strong>Nishtha</strong>
              <small>Portfolio</small>
            </span>
          </button>

          <nav className="desktop-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={active === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-btn"
              type="button"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>
            <button
              className="menu-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-links"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {navItems.map((item) => (
                <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container main-content">
        <section id="home" className="hero">
          <motion.div style={{ y: heroY }} className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="tag">Computer Science | Full Stack | Data</p>
              <h1>
                Building sharp digital products with <span>code, data, and design.</span>
              </h1>
              <p className="subtitle">
                I am Nishtha, a Computer Science student at Lovely Professional University focused on full stack
                engineering, analytics, and real-world impact projects.
              </p>

              <div className="role-row" aria-live="polite">
                <span>I work as:</span>
                <AnimatePresence mode="wait">
                  <motion.strong
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                  >
                    {roles[roleIndex]}
                  </motion.strong>
                </AnimatePresence>
              </div>

              <div className="cta-row">
                <a className="btn btn-primary" href={resumeUrl} download="Nishtha-CV.pdf">
                  <FaDownload /> Resume
                </a>
                <button className="btn btn-ghost" type="button" onClick={() => scrollTo('contact')}>
                  Contact Info <FaArrowRight />
                </button>
                <button className="btn btn-ghost" type="button" onClick={() => scrollTo('projects')}>
                  View Projects <FaArrowRight />
                </button>
              </div>

              <div className="social-row">
                <a className="social-btn" href="https://github.com/Nishtha56" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a className="social-btn" href="https://www.linkedin.com/in/nishtha56/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.aside
              className="hero-card"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="profile-photo-wrap">
                {!photoError ? (
                  <img
                    src="/profile.jpg"
                    alt="Nishtha profile"
                    className="profile-photo"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="profile-fallback" aria-label="Nishtha profile avatar">
                    <span className="profile-avatar-core">N</span>
                    <span className="profile-orbit profile-orbit-one" />
                    <span className="profile-orbit profile-orbit-two" />
                    <span className="profile-dot profile-dot-one" />
                    <span className="profile-dot profile-dot-two" />
                  </div>
                )}
              </div>
            </motion.aside>
          </motion.div>
        </section>

        <Section id="about" icon={<FaUser />} title="About" subtitle="Who I Am">
          <p>
            I enjoy crafting products that are both technically strong and easy to use. My focus spans frontend
            interfaces, scalable backend services, and data-driven decision making.
          </p>
          <p>
            I am especially excited by projects where analytics and product engineering meet, turning raw data into
            useful features people can rely on.
          </p>
          <p>
            As a Computer Science student at Lovely Professional University, I am continuously exploring how software
            can solve practical, real-world challenges. I like working end-to-end, from planning and architecture to
            implementation and refinement.
          </p>
          <p>
            I have a strong foundation in problem solving, data structures, and algorithms, which helps me write
            efficient and maintainable solutions. Beyond coding, I value collaboration, clear communication, and
            learning from feedback to improve with every project.
          </p>
        </Section>

        <Section id="skills" icon={<FaCode />} title="Skills" subtitle="Tech Stack & Strengths">
          <div className="skill-grid">
            {skills.map((group, idx) => (
              <motion.article
                key={group.group}
                className="skill-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <h3>{group.group}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" icon={<FaProjectDiagram />} title="Projects" subtitle="Selected Work">
          <div className="project-grid">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="chip-wrap">
                  {project.tech.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="link-row">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" icon={<FaBriefcase />} title="Experience" subtitle="Internship Journey">
          <div className="timeline">
            {experiences.map((item, idx) => (
              <motion.article
                key={item.org}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.12 }}
              >
                <span className="timeline-dot" />
                <h3>{item.role}</h3>
                <h4>{item.org}</h4>
                <small>{item.date}</small>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="certifications" icon={<FaCertificate />} title="Certifications" subtitle="Verified Learning">
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <motion.article
                key={cert.title}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="cert-thumb-wrap">
                  <img src={cert.image} alt={`${cert.title} certificate`} />
                </div>
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer} | {cert.date}
                </p>
                <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <FaExternalLinkAlt /> View
                </a>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="achievements" icon={<FaTrophy />} title="Achievements" subtitle="Competitive Coding">
          <div className="achievements-workflow">
            <div className="achievement-grid">
              {achievements.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.platform} href={item.link} target="_blank" rel="noreferrer" className="achievement-card">
                    <span className="achievement-icon">
                      <Icon />
                    </span>
                    <div>
                      <h3>{item.platform}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="workflow-side">
              <div className="dev-illustration" aria-hidden>
                <div className="laptop">
                  <span className="laptop-glow" />
                  <span className="laptop-screen">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="laptop-base" />
                </div>
                <span className="float-dot dot-a" />
                <span className="float-dot dot-b" />
                <span className="float-dot dot-c" />
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" icon={<FaGraduationCap />} title="Education" subtitle="Academic Background">
          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree} className="edu-card">
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <small>{item.meta}</small>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" icon={<FaEnvelope />} title="Contact" subtitle="Let Us Collaborate">
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Reach out directly</h3>
              <a href="mailto:nishtha7038@gmail.com">
                <FaEnvelope /> nishtha7038@gmail.com
              </a>
              <a href="tel:+919780367664">
                <FaPhoneAlt /> +91-9780367664
              </a>
              <a href="https://github.com/Nishtha56" target="_blank" rel="noreferrer">
                <FaGithub /> github.com/Nishtha56
              </a>
              <a href="https://www.linkedin.com/in/nishtha56/" target="_blank" rel="noreferrer">
                <FaLinkedin /> linkedin.com/in/nishtha56
              </a>
            </article>

            <motion.form
              className="contact-card"
              action="https://formsubmit.co/nishtha7038@gmail.com"
              method="POST"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3>Quick message</h3>
              <input type="hidden" name="_subject" value="New portfolio contact form message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" placeholder="Your Message..." required rows={4} />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </motion.form>
          </div>
        </Section>
      </main>

      <footer className="footer container">
        <span>Copyright {new Date().getFullYear()} Nishtha. All rights reserved.</span>
      </footer>
    </div>
  );
}

function Section({ id, icon, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <header className="section-head">
        <span className="section-icon">{icon}</span>
        <div>
          <p>{title}</p>
          <h2>{subtitle}</h2>
        </div>
      </header>
      <div className="section-panel">{children}</div>
    </motion.section>
  );
}

export default App;
