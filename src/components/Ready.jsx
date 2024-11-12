import React from 'react'
import Eyes from './Eyes'
import Button2 from './Button2'

function Ready() {
  return (
    <div className='m-0 flex flex-col gap-10 h-[140vh] items-center justify-center w-full text-center font-bold bg-bg text-[16vw] text-black '>
        <h1 className='font-["Bebas_Neue"] leading-[30vh] w-full h-fit'>READY TO <br /> START <br />THE PROJECT?</h1>
        <Eyes/>
        <Button2 name="Start the Project"/>
    </div>
  )
}

export default Ready
