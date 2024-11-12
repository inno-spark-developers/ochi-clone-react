import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Button2(prop) {
  return (
    <button className='flex gap-7 font-["Bebas_Neue"] items-center  py-4 px-9 transition-all border-[1px] group text-xl relative overflow-hidden uppercase rounded-[30px] bg-secondary text-primary border-secondary'>
        <div className='font-["Bebas_Neue"] font-light'>
            {prop.name}
        </div>
        <div className='rotate-45 relative text-sm text-secondary group-hover:z-10 group-hover:text-secondary '>
            <span className='absolute left-1/2 top-1/2 group-hover:scale-[2.5] transition-all group-hover:-z-10 -translate-x-1/2 -translate-y-1/2 bg-primary h-4 w-4 rounded-full'></span>
            <FaArrowUpLong/>
        </div>
    </button>
  )
}

export default Button2
