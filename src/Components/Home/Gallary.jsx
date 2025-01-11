import { GallaryImg } from "../../assets/asset"

const Gallary = () => {
  return (
    <section className='h-[500px] lg:h-[368px] px-[50px] lg:px-[100px]'>
      <h1 className='text-[24px] leading-[32px] font-bold pb-5 pt-7 lg:pt-0'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h1>
      <div className='max-w-[1240px] h-[268px]  mx-auto grid grid-cols-3 lg:grid-cols-6 '>
      { GallaryImg.map((item,i)=>(
          <div key={i}>
                <img className=" w-full  h-[200px] object-cover" src={item.img} alt="" />
          </div>
      )) }

      </div>
    </section>
  )
}

export default Gallary
