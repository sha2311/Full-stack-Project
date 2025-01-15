import { Button, cn } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Resturent = ({title, isDark, api}) => {
   const [openData, setOpenData] =useState([])

   useEffect(()=>{
        fetch(api)
        .then((res)=>{
            return res.json()
        })
        .then((jsonData)=>{
            setOpenData(jsonData)
            console.log(jsonData.img)
        })
   }, [api])
  return (
    <section className={cn('bg-[#F5FAFF]', isDark && "bg-black text-white")}>
        <div className='px-[100px] py-12'>
            <div className='flex justify-between items-center pb-5'>
                <h2 className='text-2xl font-bold'> {title} </h2>
                <Button
                 
                className='text-[#0E8BFF] text-xl bg-transparent'>
                    See More
                </Button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                { openData.map((item)=>(
                    <div key={item.id} className=' relative'>
                       {isDark && (
                         <Button className=' absolute top-2 lg:top-4 right-2 lg:right-4 bg-[#FBFCFF] rounded-[10px] text-[15px] font-bold text-[#26395C]'>
                         {item.date}
                     </Button>
                       )}
                        <img src={item.img} alt="" />
                       <div className={cn('text-[#26395C]', isDark && "text-white")}>
                       <h3 className='text-2xl font-bold font-Plus-jakarta'> {item.title} </h3>
                        <p className='text-[15px] leading-[15px] py-2'> {item.des} </p>
                        <p className='text-[15px] leading-[15px] '> {item.tag} </p>
                       </div>
                        <Button className='bg-[#0E8BFF] py-3 px-7 rounded-md text-white font-bold mt-4'>
                            { isDark ? "Book  Now" :"Reserve Now"}
                        </Button>
                    </div>
                  
                )) }
            </div>
        </div>
    </section>
  )
}

export default Resturent