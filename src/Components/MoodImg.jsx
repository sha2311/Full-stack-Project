import { moodData } from "../assets/asset";
const MoodImg = () => {
  return (
    <section className="w-full h-[550px] md:h-[767px]">
        <h1 className="text-2xl lg:text-[42px] font-bold text-center text-[#26395C] leading-[54px] mt-12">What are you in the mood for?</h1>
        <div className="max-w-[327px] sm:max-w-[1240px] h-[458px] sm:h-[583px] sm:ps-[50px] md:px-[100px] pt-8 grid grid-cols-2 sm:grid-cols-4  mx-auto">
            {moodData.map((item, i)=>(
                  <div key={i} className="flex flex-col items-center overflow-hidden">
                    
                       <img className=" w-[164px] sm:w-[310px] h-[168px] sm:h-[300px] lg:h-[533px]" src={item.img} alt={item.title} />
                       <h2 className="text-center mt-0.5 lg:mt-3 lg:mb-8 text-lg lg:text-3xl font-bold leading-[38px] text-[#26395C]">{item.title } </h2>
                             
                  </div>
            ))}
        
        </div>
    </section>
  )
}

export default MoodImg