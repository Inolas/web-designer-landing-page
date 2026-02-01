function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Building Digital Experiences That <span className="highlight">Drive Results</span></h1>
          <p>From stunning websites to powerful web applications, we bring your vision to life with clean code and modern design.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => scrollToSection(e, 'contact')}>Start Your Project</a>
            <a href="#services" className="btn btn-outline btn-large" onClick={(e) => scrollToSection(e, 'services')}>View Services</a>
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
  )
}

export default Hero
