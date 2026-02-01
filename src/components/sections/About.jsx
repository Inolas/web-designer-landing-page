function About() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript/React', level: 90 },
    { name: 'Node.js/Backend', level: 85 },
    { name: 'WordPress/CMS', level: 90 }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">Passionate about creating exceptional web experiences</p>

        <div className="about-content-grid">
          <div className="about-text">
            <h3>Building the Web, One Project at a Time</h3>
            <p>
              Inolas Websites was founded with a simple mission: to help businesses succeed online
              through thoughtful design and solid development. We believe that every business,
              regardless of size, deserves a professional web presence that truly represents their brand.
            </p>
            <p>
              With years of experience in web development, we've worked with clients across various
              industries. We take pride in understanding each client's unique needs and delivering
              solutions that exceed expectations.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section-inner">
          <h3>Our Expertise</h3>
          <div className="skills-grid">
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
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
            <div className="tech-stack">
              <h4>Technologies We Use</h4>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
