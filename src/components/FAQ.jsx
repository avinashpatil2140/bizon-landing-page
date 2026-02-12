import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What digital marketing services does BizOn Digital offer?',
      answer: 'We provide comprehensive digital marketing solutions including SEO & Local SEO, Google Ads & PPC Management, Social Media Marketing, Website Development, E-commerce Solutions, Email Marketing, Content Marketing, and Brand Strategy. Our services are tailored to drive measurable ROI and business growth.'
    },
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy. Typically, you can expect to see initial improvements within 3-6 months, with more significant results appearing after 6-12 months. The timeline depends on your industry competitiveness, current website status, and target keywords.'
    },
    {
      question: 'Do you offer custom pricing packages?',
      answer: 'Yes, we understand that every business is unique. We offer fully customized pricing packages based on your specific needs, goals, and budget. We provide transparent quotes with no hidden fees.'
    },
    {
      question: 'Can I cancel my service contract anytime?',
      answer: 'We believe in building long-term relationships with our clients. While we recommend minimum engagement periods for optimal results, we work with clients to find flexible terms that work for everyone.'
    },
    {
      question: 'How do you measure ROI and campaign success?',
      answer: 'We track comprehensive metrics across all channels including traffic, conversions, leads, revenue, engagement rates, and more. We provide detailed monthly reports with clear KPIs aligned to your business goals.'
    },
    {
      question: 'Do you provide 24/7 support for campaigns?',
      answer: 'Yes, we offer ongoing support for your campaigns. Our team monitors performance continuously and is available to address urgent issues. We also provide regular strategy reviews and recommendations.'
    }
  ]

  return (
    <section className="faq section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Get answers to common questions about our digital marketing services, pricing, timelines, and support
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className="faq-icon">+</span>
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
