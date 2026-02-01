import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
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
      question: 'What are your payment terms?',
      answer: 'We typically require 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.'
    },
    {
      question: 'Do you provide hosting?',
      answer: 'We can help you set up hosting with reliable providers and manage it for you, or work with your existing hosting. We\'ll recommend the best option based on your site\'s needs.'
    },
    {
      question: 'What about SEO - will my site rank on Google?',
      answer: 'We build all sites with SEO best practices: proper structure, fast loading times, mobile optimization, and meta tags. For comprehensive SEO strategies, we offer additional services.'
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Yes! All packages include a post-launch support period. We also offer ongoing maintenance plans for continued updates, security monitoring, and priority support.'
    },
    {
      question: 'What if I need changes after the project is complete?',
      answer: 'Minor changes within the support period are included. After that, we offer hourly rates or maintenance packages for ongoing updates. We\'re always here to help your site grow.'
    }
  ]

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to common questions about our services</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item-accordion ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
