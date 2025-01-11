import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Resturent = ({title}) => {
   const [openData, setOpenData] =useState([])

   useEffect(()=>{
        fetch("./data.json")
        .then((res)=>{
            return res.json()
        })
        .then((jsonData)=>{
            setOpenData(jsonData)
        })
   }, [])
  return (
    <section className='bg-[#F5FAFF]'>
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
                    <div key={item.id}>
                        <img src={item.img} alt="" />
                        <h3 className='text-2xl font-bold text-[#26395C] font-Plus-jakarta'> {item.title} </h3>
                        <p className='text-[15px] text-[#26395C] leading-[15px] py-2'> {item.des} </p>
                        <p className='text-[15px] text-[#26395C] leading-[15px] '> {item.tag} </p>
                        <Button className='bg-[#0E8BFF] py-3 px-7 rounded-md text-white font-bold mt-4'>
                        Reserve Now
                        </Button>
                    </div>
                  
                )) }
            </div>
        </div>
    </section>
  )
}

export default Resturent