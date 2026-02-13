import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Accelerate Your Brand Growth with BizOn Digital</h2>
            <p className="hero-subtitle">
              We are Website Design Company in Pune. We Transform Clicks Into Customers With Data-Driven Marketing. We combine strategic planning, creative excellence, and performance-driven campaigns to boost your ROI.
            </p>
            <div className="hero-buttons">
              <a href="https://bizondigital.com/contact" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Your Free Marketing Audit</a>
              <a href="https://bizondigital.com/services" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Watch How We Can Help</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Years of Expertise</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Successful Campaigns</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-gradient"></div>
            <div className="floating-card card-1">
              <div className="card-icon">📈</div>
              <p>SEO Optimization</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">💰</div>
              <p>PPC Management</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📱</div>
              <p>Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
