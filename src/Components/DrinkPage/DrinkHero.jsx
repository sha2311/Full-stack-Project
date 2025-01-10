import { Button } from '@nextui-org/react'
import React from 'react'

const DrinkHero = () => {
  return (
    <section className='bg-[url("./eat-and-drink-hero-bg.png")] bg-no-repeat bg-top overflow-hidden h-[441px] md:h-[555px] w-full'>
           <div className='bg-[#FBFCFF] w-[330px] md:w-[558px] h-[140px] md:h-[279px] opacity-85 mx-auto md:mx-[100px] mt-[100px]  rounded-[8px] shadow-md '>
                <div className='pt-7 mx-2 md:mx-6'>
                    <h2 className='font-bold text-2xl md:text-[42px] md:leading-[37px] text-[#26395C] '>Our top pick for the week!</h2>
                    <h4 className='text-lg md:text-[32px] font-bold md:leading-[38px] text-[#26395C] md:pt-6'>Nok by Alara</h4>
                    <p className='hidden md:block text-[#26395C] max-w-[350px] mt-1'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor .</p>
                    <div className='flex justify-end items-center md:mt-8'>
                        <Button className='bg-[#0E8BFF] py-1.5 md:py-3 px-4 md:px-7 opacity-95 text-[15px] text-white font-bold rounded md:rounded-[6px]'>
                        Reserve Now
                        </Button>
                    </div>
                </div>
           </div>
    </section>
  )
}

export default DrinkHero