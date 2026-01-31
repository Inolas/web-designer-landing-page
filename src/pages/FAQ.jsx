import { useState } from 'react'
import { Link } from 'react-router-dom'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'How long does it take to build a website?',
          answer: 'Project timelines vary based on complexity. A basic website typically takes 2-4 weeks, while more complex projects with custom functionality can take 6-12 weeks. We\'ll provide a detailed timeline during our initial consultation.'
        },
        {
          question: 'Do I need to provide content for my website?',
          answer: 'Ideally, yes. You know your business best. However, we offer copywriting services if you need help creating content. We\'ll work with you to ensure your message is clear and compelling.'
        },
        {
          question: 'Will my website work on mobile devices?',
          answer: 'Absolutely! Every website we build is fully responsive and tested across all devices and screen sizes. Mobile-friendly design is standard, not an add-on.'
        },
        {
          question: 'Can I update the website myself after it\'s built?',
          answer: 'Yes! If you choose a CMS-based solution (like WordPress), you\'ll have full control to update content, add blog posts, and make changes. We provide training to ensure you\'re comfortable managing your site.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'What are your payment terms?',
          answer: 'We typically require 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we understand budget constraints. For qualifying projects, we can set up payment plans to spread the cost over several months. Let\'s discuss what works for you.'
        },
        {
          question: 'Are there ongoing costs after the website is built?',
          answer: 'The main ongoing costs are hosting (typically $10-50/month depending on your needs) and domain renewal ($15/year). Optional maintenance plans are available for updates and support.'
        },
        {
          question: 'What if I need changes after the project is complete?',
          answer: 'Minor changes within the support period are included. After that, we offer hourly rates or maintenance packages for ongoing updates. We\'re always here to help your site grow.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Do you provide hosting?',
          answer: 'We can help you set up hosting with reliable providers and manage it for you, or work with your existing hosting. We\'ll recommend the best option based on your site\'s needs.'
        },
        {
          question: 'Will my website be secure?',
          answer: 'Security is a priority. All our sites include SSL certificates (HTTPS), secure coding practices, and regular security updates. For CMS sites, we implement additional security measures.'
        },
        {
          question: 'What about SEO - will my site rank on Google?',
          answer: 'We build all sites with SEO best practices: proper structure, fast loading times, mobile optimization, and meta tags. For comprehensive SEO strategies, we offer additional services.'
        },
        {
          question: 'Can you integrate third-party tools and services?',
          answer: 'Yes! We regularly integrate payment processors, email marketing tools, CRM systems, booking systems, and more. Let us know what tools you use and we\'ll make them work together.'
        }
      ]
    },
    {
      category: 'Process',
      questions: [
        {
          question: 'What do you need from me to get started?',
          answer: 'We\'ll need: your logo and brand assets, content (text and images), examples of websites you like, and access to your domain/hosting if you have them. We\'ll guide you through everything.'
        },
        {
          question: 'How involved will I need to be in the process?',
          answer: 'Your involvement is important but manageable. Expect to participate in initial planning, provide feedback on designs, and review the final product. We handle the technical heavy lifting.'
        },
        {
          question: 'What if I don\'t like the design?',
          answer: 'We work collaboratively to ensure you love the result. Our process includes design mockups for your approval before development begins, plus revision rounds to refine the design.'
        },
        {
          question: 'Do you offer ongoing support after launch?',
          answer: 'Yes! All packages include a post-launch support period. We also offer ongoing maintenance plans for continued updates, security monitoring, and priority support.'
        }
      ]
    }
  ]

  let globalIndex = 0

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          {faqs.map((category) => (
            <div key={category.category} className="faq-category">
              <h2 className="faq-category-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++
                  return (
                    <div
                      key={currentIndex}
                      className={`faq-item-accordion ${openIndex === currentIndex ? 'open' : ''}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFAQ(currentIndex)}
                        aria-expanded={openIndex === currentIndex}
                      >
                        <span>{faq.question}</span>
                        <svg
                          className="faq-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-contact">
        <div className="container">
          <div className="faq-contact-content">
            <h2>Still Have Questions?</h2>
            <p>Can't find the answer you're looking for? We're here to help.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
