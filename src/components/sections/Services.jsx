function Services() {
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

  const services = [
    {
      number: '01',
      title: 'Custom Websites',
      description: 'Stand out from the crowd with a unique, hand-crafted website designed specifically for your brand.',
      features: [
        'Unique, custom design tailored to your brand',
        'Clean, semantic HTML5 & CSS3 code',
        'Fully responsive across all devices',
        'Performance optimized',
        'SEO-friendly structure'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      number: '02',
      title: 'CMS Maintenance',
      description: 'Keep your content management system running smoothly with our maintenance services.',
      features: [
        'Regular CMS and plugin updates',
        'Security monitoring and patches',
        'Database optimization',
        'Regular backups and recovery',
        'Priority technical support'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Web Applications',
      description: 'Powerful full-stack web applications with custom functionality and API integrations.',
      features: [
        'Custom backend development',
        'RESTful API design',
        'Database design and integration',
        'User authentication',
        'Third-party API integrations'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive action.',
      features: [
        'Conversion-focused design',
        'A/B testing ready',
        'Fast loading times',
        'Mobile-optimized layouts',
        'Analytics tracking setup'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive web development solutions to help your business thrive online</p>

        <div className="services-detail-grid">
          {services.map((service, index) => (
            <div key={index} className="service-detail-item">
              <div className="service-detail-icon">
                {service.icon}
              </div>
              <div className="service-number-badge">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Get Started?</h3>
          <p>Let's discuss your project and find the perfect solution for your needs.</p>
          <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default Services
