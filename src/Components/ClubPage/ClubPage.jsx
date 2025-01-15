import React from "react";
import Resturent from "../Common/Resturent";
import Carusol from "../Common/Carusol";
import { ClubData, TagData } from "../../assets/asset";
import Map from "../Common/Map";
import PageHero from "./PageHero";

const ClubPage = () => {
  return (
    <main className="w-full mx-auto">
      <PageHero />
      <Resturent isDark api="/club-data.json" title="Popular Night Clubs" />
      <Carusol
        isDark
        newtitle="Tonight In Lagos"
        data={ClubData}
        tags={TagData}
      />
      <Resturent
        isDark
        api="/club-data.json"
        title="Bars and Night clubs near you"
      />
      <Map isDark />
    </main>
  );
};

export default ClubPage;
