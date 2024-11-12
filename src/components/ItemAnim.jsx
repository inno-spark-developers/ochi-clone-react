import React from 'react'

function ItemAnim(prop) {
    return (
        <div className=' transition-all overflow-hidden py-1 px-1 group relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-secondary hover:after:w-full'>
            <h1 className='relative overflow-hidden group-hover:-translate-y-7 transition-all duration-300'>
                {prop.name}
            </h1>
            <span className='absolute -bottom-5 left-1 font-semibold group-hover:-translate-y-6 duration-300 transition-all inline-block'>{prop.name}</span>
        </div>
    )
}

export default ItemAnim
