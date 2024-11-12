import React from 'react'

function Button(prop) {
  return (
    <button className='py-[1px] px-3 transition-all duration-[4s] border-[1px] group text-sm relative overflow-hidden uppercase rounded-3xl bg-transparent border-secondary'>
        <div className="group-hover:text-primary z-10 relative">
            {prop.name}
        </div>
        <span className='z-0 w-0 h-0 bg-secondary duration-500 transition-all group-hover:h-48 inline-block group-hover:w-48 absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></span>
    </button>
  )
}

export default Button
