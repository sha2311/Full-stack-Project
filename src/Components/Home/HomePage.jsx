import React from "react";
import Hero from "./Hero";
import MoodImg from "./MoodImg";
import Chillsbay from "./Chillsbay";
import ToDoCatalog from "./ToDoCatalog";
import Gallary from "./Gallary";
import Carusol from "../Common/Carusol";
import { CarouselData, TagData } from "../../assets/asset";

const Homepage = () => {
  return (
    
    <>
      <Hero />
      <MoodImg />
      <ToDoCatalog />
      <Chillsbay />
      <Carusol head='See How People are Chilling On Chillsbay' data={CarouselData} tags={TagData} />
      <Gallary />
    </>
  );
};

export default Homepage;
