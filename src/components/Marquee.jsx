import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <section data-scroll data-scroll-section data-scroll-speed=".1" className='bg-headingBg py-24 z-20 relative'>
      <div className="flex uppercase text-[20vw] pb-5 leading-none tracking-normal font-extrabold whitespace-nowrap gap-[3vw] overflow-hidden border-t-2 border-b-2 border-secondary ">
        <motion.h1 initial={{x:"0"}} animate={{x:"-80%"}} transition={{ease:"linear", repeat:Infinity, duration: 6}} className="font-['Bebas_Neue',sans-serif]">We are OCHI</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-80%"}} transition={{ease:"linear", repeat:Infinity, duration: 6}} className="font-['Bebas_Neue',sans-serif]">We are OCHI</motion.h1>
      </div>
    </section>
  )
}

export default Marquee
