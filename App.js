import React from 'react'
import './index.css'
import Navbar from './sections/navbar/Navbar'
import FAQs from './sections/faqs/FAQs'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import Footer from './sections/footer/Footer'
import Contact from './sections/contact/Contact'
import FloatingNav from './sections/floating-nav/FloatingNav'
const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About /> 
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <FloatingNav />
      <Footer />


    </main>
  )
}

export default App