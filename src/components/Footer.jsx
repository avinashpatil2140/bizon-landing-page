import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">BizOn Digital</h3>
            <p className="footer-description">
              Leading digital marketing agency dedicated to transforming businesses through innovative strategies and data-driven solutions.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/bizondigital" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://linkedin.com/company/bizondigital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://twitter.com/bizondigital" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://instagram.com/bizondigital" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="https://bizondigital.com/" target="_blank" rel="noopener noreferrer">Home</a></li>
              <li><a href="https://bizondigital.com/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="https://bizondigital.com/services" target="_blank" rel="noopener noreferrer">Services</a></li>
              <li><a href="https://bizondigital.com/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="https://bizondigital.com/services/seo" target="_blank" rel="noopener noreferrer">SEO</a></li>
              <li><a href="https://bizondigital.com/services/paid-ads" target="_blank" rel="noopener noreferrer">Paid Ads</a></li>
              <li><a href="https://bizondigital.com/services/social-media" target="_blank" rel="noopener noreferrer">Social Media</a></li>
              <li><a href="https://bizondigital.com/services/web-development" target="_blank" rel="noopener noreferrer">Web Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="https://bizondigital.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="https://bizondigital.com/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="https://bizondigital.com/refund" target="_blank" rel="noopener noreferrer">Refund Policy</a></li>
              <li><a href="https://bizondigital.com/help" target="_blank" rel="noopener noreferrer">Help Desk</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BizOn Digital. All rights reserved. Designed for digital excellence.</p>
          <div className="footer-links">
            <a href="https://bizondigital.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://bizondigital.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="https://bizondigital.com/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
