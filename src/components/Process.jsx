import './Process.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we discuss your business goals, target audience, and current marketing efforts to understand your needs.'
    },
    {
      number: '02',
      title: 'Research & Strategy',
      description: 'We conduct thorough market research and develop a customized strategy tailored to your specific business objectives and target market.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our expert team executes the strategy across all channels using proven tactics and best practices to deliver maximum impact.'
    },
    {
      number: '04',
      title: 'Monitoring',
      description: 'We continuously monitor campaign performance, track KPIs, and make real-time adjustments to optimize results.'
    },
    {
      number: '05',
      title: 'Reporting',
      description: 'Detailed reports and transparent communication keep you informed about progress, achievements, and areas for improvement.'
    },
    {
      number: '06',
      title: 'Improvement',
      description: 'We continuously analyze results and refine strategies to ensure sustained growth and improved performance over time.'
    }
  ]

  return (
    <section className="process section">
      <div className="container">
        <h2 className="section-title">Our Working Process</h2>
        <p className="section-subtitle">
          A systematic approach to achieving your business goals with proven results
        </p>

        <div className="process-grid stagger">
          {steps.map((step) => (
            <div key={step.number} className="process-card card">
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
