import React from 'react'
import Button from './Button'


function Cards(prop) {

    const btns =
        { 
            one: prop.one,
            two: prop.two
        }


  return (
    <main className='flex p-12 gap-5'>
        <section className="one flex flex-col w-full">
            <div className="title flex items-center gap-2">
                <div className="circle w-2 h-2 bg-secondary rounded-full"></div>
                <h1 className='uppercase font-semibold'>{prop.name.title1}</h1>
            </div>
            <div className="relative bg-secondary h-[80vh] w-full rounded-lg my-3 group">
                <img src={prop.image1} alt="" className='object-cover w-full h-full'/>
                <div className='z-10 absolute right-0 top-1/3 p-4 bg-transparent overflow-hidden'>
                    <h1 className=' text-bg font-bold tracking-tighter text-9xl translate-y-full group-hover:translate-y-0 transition-all duration-600'>{prop.name.title1.split("").map((item)=>{return <span>{item}</span>})}</h1>
                </div>
            </div>
            <div className="btns flex flex-wrap gap-3 font-semibold">
                {btns.one.map(item => <Button name={item} /> )}
            </div>
        </section>
        <section className="one flex flex-col w-full">
            <div className="title flex items-center gap-2">
                <div className="circle w-2 h-2 bg-secondary rounded-full"></div>
                <h1 className='uppercase font-semibold'>{prop.name.title2}</h1>
            </div>
            <div className="relative bg-secondary h-[80vh] w-full rounded-lg my-3 group">
                <img src={prop.image2} alt="" className='object-cover w-full h-full'/>
                <div className='z-10 absolute left-0 top-1/3 p-4 bg-transparent overflow-hidden'>
                    <h1 className=' text-bg font-bold tracking-tighter text-9xl translate-y-full group-hover:translate-y-0 transition-all duration-600'>{prop.name.title2.split("").map((item)=>{return <span>{item}</span>})}</h1>
                </div>
            </div>
            <div className="btns flex flex-wrap gap-3 font-semibold">
                {btns.two.map(item => <Button name={item} /> )}
            </div>
        </section>
    </main>
  )
}

export default Cards
