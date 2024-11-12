import React from 'react'
import Button2 from './Button2'



function About() {
  return (
    <main data-scroll data-scroll-speed="-.2" className='z-30 relative flex flex-col bg-bg text-black pb-40'>
        <section className="flex whitespace-wrap p-16 tracking-tighter font-light border-b-[1px] border-black">
            <h1 className='text-[5vw] leading-none'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </section>
        <section className="flex px-16 w-full py-10 border-b-[1px] border-black">
            <div className="w-1/2">
                <p>What you can expect:</p>
            </div>
            <div className='w-1/4 flex flex-col'>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. <br /><br />We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-1/4">
                <div>
                    <p>S:</p>
                    <br />
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>Facebook</p>
                    <p>Linkedin</p>    
                </div>
            </div>
        </section>
        <section className=' flex px-20 py-5 pb-10'>
            <div className='w-1/2'>
                <h1 className='text-[5vw] font-bold font-["Bebas_Neue"]'>Our approach:</h1>
                <Button2 name="Read More" />
            </div>
            <div className='w-1/2 h-[68vh] bg-headingBg overflow-hidden flex items-center justify-center rounded-xl'>
                <div className="img-wrapper w-full h-full">
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className='object-cover w-full h-full'/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default About
