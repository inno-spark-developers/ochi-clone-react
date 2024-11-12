import React from 'react'
import Cards from './Cards'
import card1Img from '../images/card1img.png'
import card2Img from '../images/card2img.jpg'
import card3Img from '../images/card3img.jpg'
import card4Img from '../images/card4img.png'
import Button2 from './Button2'



function Projects() {

  const Btn = {
    first:{name:["Audit","Copywriting","Sales Deck","Slide Design"],img:card1Img},  
    second:{name:["Agency","Company Presentation"],img:card2Img},  
    third:{name:["Brand Identity","Design Research","Investor Desk"],img:card3Img},  
    fourth:{name:["Brand Template"],img:card4Img},  
  }

  const Card = {
    first:{
            title1:"Fyde",
            title2:"Audi",
          },
    second:{
            title1:"TRAWA",
            title2:"PREMIUM BLEND",      
          }
  }

  return (
    <main className='bg-primary text-secondary pt-10 flex flex-col'>
      <h1 className='p-16 border-b-[1px] border-secondary text-[5vw]'>Featured Projects</h1>
      <Cards one={Btn.first.name} two={Btn.second.name} image1={Btn.first.img} image2={Btn.second.img} name={Card.first}/>
      <Cards one={Btn.third.name} two={Btn.fourth.name} image1={Btn.third.img} image2={Btn.fourth.img} name={Card.second}/>
      <section className='p-20 flex items-center justify-center w-full'>
        <Button2 name="View all case studies"/>
      </section>
    </main>
  )
}

export default Projects
