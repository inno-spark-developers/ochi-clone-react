import React from 'react'
import Button from './Button'
import Button2 from './Button2'
import dp from '../images/mydp.jpg'

function Reviews() {

    const Clients = (prop)=>{
        return <div className='py-5 text-xl px-10 flex w-full items-center justify-between border-b-[1px] border-opacity-65 border-secondary'>
                    <h1 className='underline w-[40vw]'>{prop.name}</h1>
                    <h1 className='text-start w-[40vw]'>{prop.client}</h1>
                    <h1 className='underline'>Read</h1>
                </div>
    }

  return (
    <main data-scroll data-scroll-section data-scroll-speed=".1" className='flex flex-col cursor-pointer'>
        <h1 className='p-10 text-[6vw] px-20 font-semibold'>Clients' Reviews</h1>
        <section className="p-5 flex  px-20 border-t-[1px] border-secondary border-b-[1px]">
            <div className="w-full flex">
                <div className="flex w-full justify-between pr-32 font-semibold">
                    <div>
                        <h1>Karman Ventures</h1>
                    </div>
                    <div>
                        <h1>Services:</h1>
                        <div className="btn mt-32 flex flex-col gap-4">
                            <Button name='Investor Desk'/>
                            <Button name='Sale Desk'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <div className="w-full flex justify-between">
                    <div className='w-2/3'>
                        <h1>William Barnes</h1>
                        <img src={dp} alt="" className='bg-secondary h-28 w-28 rounded-xl mt-20 mb-10'/>
                        <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                    </div>
                    <div>
                        <h1 className='uppercase text-xl opacity-55'>Read</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className=''>
            <Clients name="Planetly" client="Nina Walloch"/>
            <Clients name="Workiz Easy" client="Tomer Levy"/>
            <Clients name="Premium Blend" client="Ellen Kim"/>
            <Clients name="Hypercare Systems" client="Brendan Goss"/>
            <Clients name="Officevibe" client="Raff Labrie"/>
            <Clients name="Orderlion" client="Stefan Strohmer"/>
            <Clients name="Black Book" client="Jaci Smith"/>
            <Clients name="Trawa Energy" client="David Budde"/>
        </section>
        <section className='flex gap-3 w-full py-20 pb-32 px-24'>
            <div className='h-[60vh] bg-headingBg w-[50vw] flex items-center justify-center relative rounded-lg'>
                <h1 className='text-[6vw] font-["Bebas_Neue"] text-bg font-semibold'>Ochi</h1>
                <div className="absolute left-3 -bottom-10 font-bold rounded-xl box-border">
                    <Button name="2019-22"/>
                </div>
                
            </div>
            <div className='h-[60vh] bg-secondary w-[25vw] flex items-center justify-center relative rounded-lg'>
                <h1 className='text-[6vw] font-["Bebas_Neue"] text-primary font-semibold'>Ochi</h1>
                <div className="absolute left-3 -bottom-20 font-bold rounded-xl box-border">
                    <Button2 name="2019-22"/>
                </div>
            </div>
            <div className='h-[60vh] bg-secondary w-[25vw] flex items-center justify-center relative rounded-lg'>
                <h1 className='text-[6vw] font-["Bebas_Neue"] text-primary font-semibold'>Ochi</h1>
                <div className="absolute left-3 -bottom-20 font-bold rounded-xl box-border">
                    <Button2 name="2019-22"/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Reviews
