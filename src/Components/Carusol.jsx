import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TagData, asset } from "../assets/asset";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Carusol = () => {
  const CarouselData = [
    {
      id: 1,
      image: asset.slider1,
      heading: "Wizkid made in lagos tour",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      image: asset.slider1,
      heading: "Hablu Programmer Is The Best",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      image: asset.slider1,
      heading: "We Learning Full Stack Web Development",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const dotHandle = (index) => {
    setCurrentIndex(index);
  };

  const prevhandleClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
    );
  };

  const nextHanleClick = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === CarouselData.length - 1 ? 0 : nextIndex + 1
    );
  };

  const carosolSlider = CarouselData[currentIndex];
  return (
    <section className="w-full lg:w-full h-[995px] lg:h-[950px] mb-16 lg:mb-0 mx-auto">
      <h1 className="text-2xl mt-6 lg:mt-0 lg:text-[42px] font-bold text-center leading-[42px] text-[#26395C]">
        See How People are Chilling On Chillsbay
      </h1>
      <div className=" relative max-w-[1241px] h-[789px] mx-[40px] lg:mx-[100px] mt-10">
        <div className="flex justify-between items-center">
          <button
            onClick={prevhandleClick}
            className="absolute left-0 transform -translate-x-10 flex items-center justify-center  text-black rounded-full w-12 h-12"
          >
            <FaArrowLeft />
          </button>
          <div className="w-full lg:w-[1027px] lg:h-[700px] lg:pt-12  flex flex-col lg:flex-row">
            <div
              key={carosolSlider.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                className="w-[327px]  h-[350px] lg:w-[612px] lg:h-[653px] "
                src={carosolSlider.image}
                alt=""
              />
              <div className="lg:hidden flex justify-center  items-center gap-2">
                {CarouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => dotHandle(index)}
                    className={`w-3 h-3 bg-black rounded-full ${
                      index === currentIndex ? "bg-teal-500" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="lg:w-[385px] lg:h-[550px] text-center lg:text-start  mt-10 ">
              <h2 className="text-2xl lg:text-[42px]  lg:leading-[54px] text-[#26395C] font-bold">
                {" "}
                {carosolSlider.heading}{" "}
              </h2>
              <p className=" text-xl text-[#26395C] py-3 lg:py-5">
                {" "}
                {carosolSlider.des}{" "}
              </p>

              <div className="flex justify-center lg:justify-normal">
                <div className="grid grid-cols-2 gap-5 mt-3 lg:ms-0 ">
                  {TagData.map((value) => (
                    <div key={value.id} className="flex items-center gap-2">
                      <img src={value.img} alt="" />
                      <p> {value.title} </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-normal gap-7 mt-6">
                <Button
                  variant="bordered"
                  className="px-7 border-[#0E8BFF] text-[#0E8BFF] font-bold bg-transparent py-3 rounded-lg"
                >
                  Add To Cart
                </Button>
                <Button className="text-[15px] font-bold text-white px-7 bg-[#0E8BFF] py-3 rounded-lg">
                  Book Now
                </Button>
              </div>

              <div className="flex justify-center lg:justify-normal gap-3 mt-7">
                <p className="text-[#26395C] text-xl">Connect with us on:</p>
                <div className="flex items-center gap-3">
                  <img className=" size-[24px]" src={asset.twitter} alt="" />
                  <img className=" size-[24px]" src={asset.instragram} alt="" />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextHanleClick}
            className="absolute right-0 transform translate-x-10 flex items-center justify-center  text-black rounded-full w-12 h-12"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden lg:flex justify-center  items-center gap-2">
          {CarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => dotHandle(index)}
              className={`w-3 h-3 bg-black rounded-full ${
                index === currentIndex ? "bg-teal-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carusol;
