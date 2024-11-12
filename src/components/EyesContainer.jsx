import React from 'react'
import bgImg from '../images/bg.jpg'
import Eyes from './Eyes'


function EyesContainer() {
  return (
    <main data-scroll data-scroll-section data-scroll-speed=".1" className='h-screen bg-black flex items-center justify-center relative'>
        <img src={bgImg} alt="" className='w-full h-full object-cover'/>
        <Eyes/>
        
    </main>
  )
}

export default EyesContainer
