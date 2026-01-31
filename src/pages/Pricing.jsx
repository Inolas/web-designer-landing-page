import { Link } from 'react-router-dom'
import { useState } from 'react'

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('one-time')

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
        { text: 'Custom functionality', included: false },
        { text: 'E-commerce features', included: false }
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
        { text: 'CMS integration (WordPress)', included: true },
        { text: 'Basic custom functionality', included: true },
        { text: 'E-commerce features', included: false }
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
        { text: 'Advanced custom functionality', included: true },
        { text: 'E-commerce ready', included: true }
      ],
      popular: false
    }
  ]

  const addOns = [
    { name: 'Logo Design', price: 200, description: 'Professional logo design with 3 concepts' },
    { name: 'Copywriting', price: 150, description: 'Per page, SEO-optimized content' },
    { name: 'Photography', price: 300, description: 'Product or business photography session' },
    { name: 'Monthly Maintenance', price: 75, description: 'Per month, updates & backups' },
    { name: 'SSL Certificate', price: 50, description: 'Annual, secure HTTPS for your site' },
    { name: 'Domain Registration', price: 15, description: 'Annual, includes DNS management' }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Pricing</h1>
          <p>Transparent pricing with packages to fit every budget</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
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
                <Link to="/contact" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-block`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="addons-section">
        <div className="container">
          <h2 className="section-title">Add-On Services</h2>
          <p className="section-subtitle">Enhance your project with these additional services</p>
          <div className="addons-grid">
            {addOns.map((addon) => (
              <div key={addon.name} className="addon-card">
                <div className="addon-info">
                  <h4>{addon.name}</h4>
                  <p>{addon.description}</p>
                </div>
                <div className="addon-price">
                  <span className="currency">$</span>
                  <span className="amount">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the price?</h4>
              <p>All packages include design, development, basic SEO setup, mobile responsiveness, and post-launch support as specified.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer payment plans?</h4>
              <p>Yes! We typically require 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments.</p>
            </div>
            <div className="faq-item">
              <h4>What if I need something custom?</h4>
              <p>We're happy to provide custom quotes for unique requirements. Contact us to discuss your specific needs.</p>
            </div>
            <div className="faq-item">
              <h4>Are there any hidden fees?</h4>
              <p>No hidden fees. The price you see is the price you pay. Hosting and domain costs are separate unless specified.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Quote?</h2>
            <p>Every project is unique. Let's discuss your requirements and create a tailored solution.</p>
            <Link to="/contact" className="btn btn-white btn-large">Get Custom Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
