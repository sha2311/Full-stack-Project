import { div } from "framer-motion/client";
import { ChillsbayData } from "../assets/asset";

const Chillsbay = () => {
  return (
    <section className="h-auto lg:h-[653px] ">
      <h1 className="text-2xl  lg:text-[42px] font-bold text-center text-[#26395C] leading-[42px] mt-16">
        Why Use Chillsbay?
      </h1>

      <div className="w-full lg:max-w-[1240px] lg:h-[453px]   sm:px-[50px] lg:px-[100px] pt-10  ">
        <div className=" container bg-[#F5FAFF] grid grid-cols-1 lg:grid-cols-3 mx-auto pt-[62px] pb-[57px] rounded-2xl  shadow-chillbay ">
          {ChillsbayData.map((item, i) => (
            <div key={i} className="">
              <img
                className="w-[128px] h-[128px] mx-auto pb-4"
                src={item.logo}
              />
              <div className="w-full lg:w-[358px] h-[190px] px-10 text-center ">
                <h2 className="text-2xl lg:text-[32px]  font-bold leading-[38px] ">
                  {" "}
                  {item.title}{" "}
                </h2>
                <p className=" text-xl lg:text-[20px] pt-2 text-[#000000] ">
                  {" "}
                  {item.des}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chillsbay;
