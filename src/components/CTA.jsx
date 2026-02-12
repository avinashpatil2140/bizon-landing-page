import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready To Start Your Project?</h2>
          <p className="cta-subtitle">
            Schedule your free 30-minute digital marketing consultation. Get a customized growth strategy, competitive analysis, and actionable recommendations—no obligations.
          </p>
          <div className="cta-buttons">
            <a href="https://bizondigital.com/contact" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Claim Your Free Consultation</a>
          </div>
          <div className="cta-features">
            <div className="feature">
              <span className="icon">✓</span>
              <p>Customized growth strategy</p>
            </div>
            <div className="feature">
              <span className="icon">✓</span>
              <p>Competitive analysis</p>
            </div>
            <div className="feature">
              <span className="icon">✓</span>
              <p>Actionable recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
