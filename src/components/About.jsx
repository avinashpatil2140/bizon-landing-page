import './About.css'

export default function About() {
  const features = [
    {
      number: '01',
      title: 'Strategic Expertise',
      description: 'We bring years of experience in crafting data-driven digital marketing strategies that align with your business goals and drive sustainable growth.'
    },
    {
      number: '02',
      title: 'Proven Results',
      description: 'Our track record speaks for itself with successful campaigns that have helped businesses increase their online presence, engagement, and conversions.'
    },
    {
      number: '03',
      title: 'Innovative Approach',
      description: 'We stay ahead of industry trends and leverage cutting-edge tools and technologies to deliver creative solutions that make your brand stand out.'
    },
    {
      number: '04',
      title: 'Client-Focused Service',
      description: 'Your success is our priority. We work closely with you to understand your unique needs and deliver customized solutions with transparent communication.'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          BizOn Digital is a leading digital marketing agency dedicated to transforming businesses through innovative strategies and data-driven solutions that deliver measurable results.
        </p>

        <div className="features-grid stagger">
          {features.map((feature) => (
            <div key={feature.number} className="feature-card card">
              <div className="feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
