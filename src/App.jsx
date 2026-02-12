import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Process />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
