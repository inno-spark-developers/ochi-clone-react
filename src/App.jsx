import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import EyesContainer from './components/EyesContainer'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Ready from './components/Ready'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='bg-primary relative text-secondary p-1 overflow-x-hidden'>
        <Navbar/>
        <Landing/>
        <Marquee/>
        <About/>
        <EyesContainer/>
        <Projects/>
        <Reviews/>
        <Ready/>
      </div>
    </>
  )
}

export default App
