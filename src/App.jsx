import React from 'react'
import HeroSection from './components/HeroSection'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <HeroSection/>
      <Marquee/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
