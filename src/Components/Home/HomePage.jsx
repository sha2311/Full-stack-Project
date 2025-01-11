import React from "react";
import Hero from "./Hero";
import MoodImg from "./MoodImg";
import Chillsbay from "./Chillsbay";
import ToDoCatalog from "./ToDoCatalog";
import Gallary from "./Gallary";
import Carusol from "../Common/Carusol";

const Homepage = () => {
  return (
    <>
      <Hero />
      <MoodImg />
      <ToDoCatalog />
      <Chillsbay />
      <Carusol/>
      <Gallary />
    </>
  );
};

export default Homepage;
