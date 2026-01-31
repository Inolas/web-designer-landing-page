import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const services = [
    {
      id: 'custom-websites',
      number: '01',
      title: 'Custom Websites',
      description: 'Stand out from the crowd with a unique, hand-crafted website designed specifically for your brand. Unlike template-based solutions, our custom websites are built from the ground up to meet your exact requirements.',
      features: [
        'Unique, custom design tailored to your brand',
        'Clean, semantic HTML5 & CSS3 code',
        'Fully responsive across all devices',
        'Cross-browser compatibility',
        'Performance optimized',
        'SEO-friendly structure'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <line x1="6" y1="7" x2="10" y2="7"></line>
          <line x1="6" y1="10" x2="14" y2="10"></line>
          <line x1="6" y1="13" x2="12" y2="13"></line>
        </svg>
      )
    },
    {
      id: 'cms',
      number: '02',
      title: 'CMS Maintenance',
      description: 'Keep your content management system running smoothly with our maintenance services. We handle updates, security patches, backups, and ongoing support for WordPress and other CMS platforms.',
      features: [
        'Regular CMS and plugin updates',
        'Security monitoring and patches',
        'Database optimization',
        'Regular backups and recovery',
        'Performance monitoring',
        'Priority technical support'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      id: 'web-apps',
      number: '03',
      title: 'Web Applications',
      description: 'Need more than a standard website? We build powerful full-stack web applications with custom functionality, user authentication, databases, and API integrations to solve complex business problems.',
      features: [
        'Custom backend development',
        'RESTful API design and development',
        'Database design and integration',
        'User authentication and authorization',
        'Third-party API integrations',
        'Real-time features and notifications'
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
      id: 'landing-pages',
      number: '04',
      title: 'Landing Pages',
      description: 'Convert visitors into customers with high-impact landing pages designed to drive action. Perfect for marketing campaigns, product launches, and lead generation.',
      features: [
        'Conversion-focused design',
        'A/B testing ready',
        'Fast loading times',
        'Mobile-optimized layouts',
        'Form integration',
        'Analytics tracking setup'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 'responsive-design',
      number: '05',
      title: 'Responsive Design',
      description: 'Every website we build is fully responsive, ensuring a seamless experience whether your visitors are on a phone, tablet, laptop, or desktop computer.',
      features: [
        'Mobile-first approach',
        'Fluid layouts and flexible images',
        'Touch-friendly navigation',
        'Optimized for all screen sizes',
        'Retina-ready graphics',
        'Cross-device testing'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 'maintenance',
      number: '06',
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly with our ongoing maintenance and support services. We handle updates, security, backups, and technical issues so you can focus on your business.',
      features: [
        'Regular software updates',
        'Security monitoring',
        'Daily/weekly backups',
        'Performance monitoring',
        'Content updates',
        'Priority support'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ]

  const processSteps = [
    { number: 1, title: 'Discovery', description: 'We learn about your business, goals, and requirements through detailed consultation.' },
    { number: 2, title: 'Planning', description: 'We create a detailed project plan, sitemap, and wireframes for your approval.' },
    { number: 3, title: 'Design', description: 'Our designers create stunning mockups that bring your vision to life.' },
    { number: 4, title: 'Development', description: 'We build your website with clean, efficient code and modern technologies.' },
    { number: 5, title: 'Testing', description: 'Rigorous testing ensures everything works perfectly across all devices.' },
    { number: 6, title: 'Launch', description: 'We deploy your site and provide training on how to manage your content.' }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive web development solutions to help your business thrive online</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail-card ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="service-detail-content">
                <div className="service-number">{service.number}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to="/pricing" className="btn btn-primary">View Pricing</Link>
              </div>
              <div className="service-detail-visual">
                <div className="visual-box">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">A streamlined approach to deliver results</p>
          <div className="process-timeline">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and find the perfect solution for your needs.</p>
            <Link to="/contact" className="btn btn-white btn-large">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
