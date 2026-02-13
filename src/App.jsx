import { useState } from 'react'

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Design from './components/Design.jsx';
import Code from './components/Code.jsx'
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />   
      <Hero />     
      <About />
      
      <Code />
      <Design />
      <Contact />
      <Footer /> 
    </>
  )
}

export default App
