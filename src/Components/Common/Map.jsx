import React from 'react'
import { asset } from '../../assets/asset'
import { cn } from '@nextui-org/theme'
const Map = ({isDark}) => {
  return (
    <section className={cn('w-full md:h-auto h-[255px] bg-[#F5FAFF]', isDark && "bg-black")}>
        <div className='max-w-[1240px] h-auto md:h-[430px] mx-auto lg:px-[100px] lg:pt-10'>
            { isDark ? <img src={asset.map2} alt="" /> : <img src={asset.map} alt="" /> }
        </div>
    </section>
  )
}

export default Map