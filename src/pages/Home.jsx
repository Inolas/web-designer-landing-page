import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Building Digital Experiences That <span className="highlight">Drive Results</span></h1>
            <p>From stunning websites to powerful web applications, we bring your vision to life with clean code and modern design.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
              <Link to="/services" className="btn btn-outline btn-large">View Services</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <pre><code><span className="code-keyword">const</span> <span className="code-variable">yourWebsite</span> = {'{'}{'\n'}
  <span className="code-property">design</span>: <span className="code-string">'modern'</span>,{'\n'}
  <span className="code-property">responsive</span>: <span className="code-boolean">true</span>,{'\n'}
  <span className="code-property">performance</span>: <span className="code-string">'optimized'</span>,{'\n'}
  <span className="code-property">seo</span>: <span className="code-string">'ready'</span>{'\n'}
{'}'};{'\n'}{'\n'}
<span className="code-keyword">await</span> <span className="code-function">buildDreamSite</span>(yourWebsite);</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Inolas Websites?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Responsive Design</h3>
              <p>Your website will look perfect on every device, from mobile phones to large desktop monitors.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Optimized code and modern techniques ensure your site loads quickly and performs smoothly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Secure & Reliable</h3>
              <p>Built with security best practices and hosted on reliable infrastructure you can trust.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>SEO Optimized</h3>
              <p>Built-in search engine optimization helps your business get discovered online.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive web solutions tailored to your needs</p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Custom Websites</h3>
              <p>Beautifully designed, hand-coded websites that stand out from template-based solutions.</p>
              <Link to="/services#custom-websites" className="link-arrow">Learn more</Link>
            </div>
            <div className="service-card">
              <h3>CMS Maintenance</h3>
              <p>Keep your WordPress and CMS platforms secure, updated, and running smoothly.</p>
              <Link to="/services#cms" className="link-arrow">Learn more</Link>
            </div>
            <div className="service-card">
              <h3>Web Applications</h3>
              <p>Full-stack web applications with custom backends, APIs, and database integration.</p>
              <Link to="/services#web-apps" className="link-arrow">Learn more</Link>
            </div>
            <div className="service-card">
              <h3>Landing Pages</h3>
              <p>High-converting landing pages designed to capture leads and drive action.</p>
              <Link to="/services#landing-pages" className="link-arrow">Learn more</Link>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's discuss your project and create a website that helps your business grow.</p>
            <Link to="/contact" className="btn btn-white btn-large">Get Started Today</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
