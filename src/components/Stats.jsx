import './Stats.css'

export default function Stats() {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Satisfied Clients</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Years of Expertise</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Successful Campaigns</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">250M+</h3>
            <p className="stat-label">Total Ad Spend Managed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
