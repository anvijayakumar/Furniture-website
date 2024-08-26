import React from "react";
import { Carousel } from "@material-tailwind/react";

import c1 from "../assets/product-1.png";
import c2 from "../assets/product-2.png";
import c3 from "../assets/product-3.png";
import c4 from "../assets/schair.png";

const sample = () => {
  return (
    <Carousel className="rounded-xl">
      <img src={c1} alt="" className="h-full w-full object-cover"/>
      <img src={c2} alt="" className="h-full w-full object-cover"/>
      <img src={c3} alt="" className="h-full w-full object-cover"/>
      <img src={c4} alt="" className="h-full w-full object-cover"/>
    </Carousel>
  );
};

export default sample;
