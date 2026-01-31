function Footer() {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>Inolas<span>Websites</span></a>
            <p>Professional web development services for businesses of all sizes.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
              <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Custom Websites</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>CMS Maintenance</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Web Applications</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Landing Pages</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p>Ready to start your project?</p>
            <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Inolas Websites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
