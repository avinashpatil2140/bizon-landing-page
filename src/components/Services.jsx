import './Services.css'

export default function Services() {
  const services = [
    {
      icon: '🔍',
      title: 'Search Engine Optimization',
      description: 'Boost your visibility and rank higher on search engines with strategic SEO techniques tailored to your business needs.',
      link: 'https://bizondigital.com/services/seo'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web and application development delivering high-performance, accessible and conversion-focused experiences.',
      link: 'https://bizondigital.com/services/web-development'
    },
    {
      icon: '📱',
      title: 'Social Media Strategy',
      description: 'Build engaging campaigns and grow your audience across all social media platforms with data-driven strategies.',
      link: 'https://bizondigital.com/services/social-media'
    },
    {
      icon: '💰',
      title: 'Paid Advertising',
      description: 'Google Ads and PPC management designed to maximize your ROI with targeted campaigns and constant optimization.',
      link: 'https://bizondigital.com/services/paid-ads'
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and data-driven insights for better decision making.',
      link: 'https://bizondigital.com/services'
    },
    {
      icon: '🎨',
      title: 'Branding & Design',
      description: 'Create a compelling brand identity with professional design and strategic branding solutions.',
      link: 'https://bizondigital.com/services/branding'
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive digital marketing solutions designed to accelerate your business growth and drive measurable results
        </p>

        <div className="services-grid stagger">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
