import { useState, useEffect } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    closeMenu()
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pricing', 'about', 'faq', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          Inolas<span>Websites</span>
        </a>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
          <li><a href="#pricing" className={activeSection === 'pricing' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#faq" className={activeSection === 'faq' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
          <li><a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
