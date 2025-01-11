import React from 'react'
import { asset } from '../../assets/asset'
const Map = () => {
  return (
    <section className='w-full md:h-auto h-[255px] bg-[#F5FAFF]'>
        <div className='max-w-[1240px] h-auto md:h-[430px] mx-auto lg:px-[100px] lg:pt-10'>
            <img src={asset.map} alt="" />
        </div>
    </section>
  )
}

export default Map