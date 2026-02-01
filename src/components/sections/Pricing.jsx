function Pricing() {
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

  const packages = [
    {
      name: 'Basic',
      price: 500,
      description: 'Perfect for small businesses and personal projects',
      features: [
        { text: 'Up to 5 pages', included: true },
        { text: 'Responsive design', included: true },
        { text: 'Contact form', included: true },
        { text: 'Basic SEO setup', included: true },
        { text: '2 rounds of revisions', included: true },
        { text: '30 days support', included: true },
        { text: 'CMS integration', included: false },
        { text: 'Custom functionality', included: false }
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: 1500,
      description: 'Ideal for growing businesses needing more features',
      features: [
        { text: 'Up to 10 pages', included: true },
        { text: 'Responsive design', included: true },
        { text: 'Contact form + newsletter', included: true },
        { text: 'Advanced SEO setup', included: true },
        { text: '4 rounds of revisions', included: true },
        { text: '60 days support', included: true },
        { text: 'CMS integration', included: true },
        { text: 'Basic custom functionality', included: true }
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 3000,
      description: 'Complete solution for established businesses',
      features: [
        { text: 'Unlimited pages', included: true },
        { text: 'Responsive design', included: true },
        { text: 'Advanced forms & integrations', included: true },
        { text: 'Full SEO optimization', included: true },
        { text: 'Unlimited revisions', included: true },
        { text: '90 days support', included: true },
        { text: 'CMS with custom features', included: true },
        { text: 'Advanced custom functionality', included: true }
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-subtitle">Transparent pricing with packages to fit every budget</p>

        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{pkg.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{pkg.price.toLocaleString()}</span>
                </div>
                <p className="pricing-description">{pkg.description}</p>
              </div>
              <ul className="pricing-features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className={feature.included ? 'included' : 'not-included'}>
                    {feature.included ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="x-icon">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-block`} onClick={(e) => scrollToSection(e, 'contact')}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>Need a custom quote? <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact us</a> to discuss your specific requirements.</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
