import { todoData } from "../../assets/asset";
const ToDoCatalog = () => {
  return (
    <section className="w-full h-full lg:h-[852px] bg-[#F5FAFF] shadow-todo ">
       <h1 className="text-2xl lg:text-[32px] ms-[100px] font-bold text-[#26395C] leading-[54px] pt-12 ">Top things to do in Lagos</h1>
        <div className=" sm:ps-[50px] md:px-[100px] pt-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-auto gap-3">
            {todoData.map((item, i)=>(
                  <div key={i} className="flex flex-col items-center overflow-hidden">
                    
                       <img className="w-[295px] rounded-2xl h-[270px] object-cover" src={item.img} alt={item.title} />
                       <h2 className="text-center mt-0.5 lg:mt-3 lg:mb-8 text-lg lg:text-[22px] font-bold leading-[27px] text-[#26395C]">{item.title } </h2>
                             
                  </div>
            ))}
        
        </div>
    </section>
  )
}

export default ToDoCatalog