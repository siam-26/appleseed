import React from "react";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Latest from "./Latest";
import Offer from "./Offer";

const Homes = ({ expanded }) => {
  return (
    <div className="overflow-hidden rounded-3xl z-1 relative">
      <div className={`bg-white rounded-2xl pb-5 w-full   ${
        expanded? "lg:w-[931px] ml-auto" : "lg:w-full ml-auto"
      }`}>
        <Hero expanded={expanded} />
        <Portfolio expanded={expanded} />
        <About expanded={expanded} />
        <Latest expanded={expanded} />
        <Offer />
      </div>
    </div>
  );
};

export default Homes;
