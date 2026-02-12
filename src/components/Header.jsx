import { useState } from 'react'
import './Header.css'

export default function Header({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>BizOn Digital</h1>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a onClick={() => scrollToSection('hero')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Get Free Consultation
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
