import React, { useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0)

    window.addEventListener("mousemove",(e)=>{
        var x = e.clientX;
        var y = e.clientY;
        
        var delX = x - window.innerWidth/2;
        var delY = y - window.innerHeight/2;

        var angle = Math.atan2(delY, delX) * 180/Math.PI;
        setRotate(angle-180);
    })

  return (
    <div className="eyes absolute flex gap-6 z-10">
        <div className="eye h-48 w-48 rounded-full bg-white flex items-center justify-center">
            <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center'>
                <div className="line w-full h-10 flex items-center justify-start " style={{transform: ` rotate(${rotate}deg)`}}>
                <div className="dot bg-white rounded-full w-6 h-6 m-1"></div>
                </div>
            </div>
        </div>
        <div className="eye h-48 w-48 rounded-full bg-white flex items-center justify-center">
            <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center'>
                <div className="line w-full h-10 flex items-center justify-start " style={{transform: ` rotate(${rotate}deg)`}}>
                <div className="dot bg-white rounded-full w-6 h-6 m-1"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
