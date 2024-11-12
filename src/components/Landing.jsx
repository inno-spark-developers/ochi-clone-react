import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import Button from './Button'
import '../App.css'
import { motion } from 'framer-motion';

const Landing = () => {

const heading = [
    "We Create",
    "Eye Opening",
    "Presentations"
]

const headingLinks = [
    "For public and private companies",
    "From the first pitch to IPO"
]

return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="landing h-[100vh] w-full mt-32 pt-0 relative">
        {heading.map((items, index)=>{
            return <div className='relative'>
                        <div className='flex relative items-center ml-20 gap-3'>
                            {index === 1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{delay:0.6,ease:"linear",duration:0.6}} className='bg-headingBg h-20 w-[9vw] relative -top-2 rounded-lg'></motion.div>}
                            <h1 className='text-[9vw] leading-[7.6vw] font-["Bebas_Neue",sans-serif] tracking-normal font-bold'>{items}</h1>
                        </div>
                    </div> 
        })}
        
        <div className="flex border-t-[1px] border-secondary justify-between items-center w-full h-fit px-20 py-5 mt-20">
            {headingLinks.map(e =>{
                return <h1 className=''>{e}</h1>
            })}

            <div className='btn relative gap-2 flex '>
                <Button name='Start the Project'/>
                <div className='text-secondary p-2 border-[1.8px] font-light border-secondary rounded-full rotate-45'>
                    <FaArrowUpLong/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Landing
