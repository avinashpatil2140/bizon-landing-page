import { useState } from 'react'
import './Testimonials.css'

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      name: 'John Anderson',
      company: 'TechCorp Solutions',
      rating: 5,
      text: 'Outstanding digital marketing services! They transformed our online presence and significantly increased our customer engagement. Highly professional team.'
    },
    {
      name: 'Sarah Mitchell',
      company: 'Green Earth Industries',
      rating: 5,
      text: 'The SEO strategies implemented by this team brought remarkable results. Our website traffic doubled within three months. Truly exceptional work!'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Innovations Ltd',
      rating: 5,
      text: 'Professional and results-driven approach to social media marketing. They understood our brand perfectly and delivered exactly what we needed.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Bright Future Co',
      rating: 5,
      text: 'Excellent content marketing strategies! Our engagement rates have never been better. The team is creative, responsive, and highly skilled.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Real results and testimonials from businesses we've helped succeed
        </p>

        <div className="testimonials-slider">
          <div className="testimonial-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
