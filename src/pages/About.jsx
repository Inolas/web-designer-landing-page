import { Link } from 'react-router-dom'

function About() {
  const values = [
    {
      title: 'Quality First',
      description: 'We never cut corners. Every line of code is written with care and attention to detail.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      )
    },
    {
      title: 'Clear Communication',
      description: 'We keep you informed every step of the way. No jargon, no surprises, just honest updates.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Results Driven',
      description: 'A beautiful website is great, but one that achieves your business goals is even better.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      )
    },
    {
      title: 'Long-term Partnership',
      description: 'We build relationships, not just websites. Your success is our success.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ]

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript/React', level: 90 },
    { name: 'Node.js/Backend', level: 85 },
    { name: 'WordPress/CMS', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Database/SQL', level: 85 }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Passionate about creating exceptional web experiences</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Building the Web, One Project at a Time</h2>
              <p>
                Inolas Websites was founded with a simple mission: to help businesses succeed online
                through thoughtful design and solid development. We believe that every business,
                regardless of size, deserves a professional web presence that truly represents their brand.
              </p>
              <p>
                With years of experience in web development, we've worked with clients across various
                industries, from local startups to established businesses. We take pride in understanding
                each client's unique needs and delivering solutions that exceed expectations.
              </p>
              <p>
                What sets us apart is our commitment to quality and our genuine care for our clients'
                success. We don't just build websites; we build partnerships that help businesses grow
                and thrive in the digital landscape.
              </p>
            </div>
            <div className="about-visual">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <div className="skills-grid">
            <div className="skills-content">
              <h2>Our Expertise</h2>
              <p>
                We stay current with the latest technologies and best practices to deliver
                modern, performant websites that stand the test of time.
              </p>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-visual">
              <div className="tech-stack">
                <h3>Technologies We Use</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">WordPress</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">GraphQL</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Figma</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Ready to start your project? We'd love to hear from you.</p>
            <Link to="/contact" className="btn btn-white btn-large">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
