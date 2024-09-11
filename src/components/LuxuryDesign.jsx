import React from "react";
import Dot from "../assets/Dot.png";
import grid1 from "../assets/img-grid1.png";
import grid2 from "../assets/img-grid2.png";
import grid3 from "../assets/img-grid3.svg";

const LuxuryDesign = () => {
  return (
    <div className="bg-amber-50 p-10 md:p-20 lg:p-20 flex flex-col md:flex-row">
      <div className="w-full md:w-3/5 flex p-5 md:p-0 lg:p-0">
        <div>
          <img src={Dot} alt="img" className="w-40 h-40 relative -left-10" />
          <img
            src={grid1}
            alt="#"
            className="relative left-0 -top-32 right-0 md:-top-28 md:right-20 lg:-top-28 lg:right-24"
          />
        </div>
        <div>
          <img
            src={grid2}
            alt="#"
            className="rounded-lg lg:w-48 lg:h-44 ml-7 my-4 relative top-0 md:top-10 lg:top-9"
          />
          <img
            src={grid3}
            alt="#"
            className="rounded-lg w-100% h-100% relative right-10 top-0 md:right-16 md:top-14 lg:right-20 lg:top-14"
          />
        </div>
      </div>
      <div className="-mt-14 md:-mt-10 lg:-mt-0 ml-0 md:ml-12 lg:m-2 w-full md:w-1/3">
        <h3 className="pt-0 md:pt-20 lg:pt-24 pl-0 text-4xl font-bold text-customGreen font-Caveat">
          WHO WE ARE
        </h3>
        <h5 className="pt-2 md:pt-3 lg:pt-5 font-lexend text-2xl">
          We provide you the{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          best experience
        </h5>
        <p className="pt-6 pb-2.5 pl-0 font-lexend text-justify">
          Because we was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <a href="#" className="text-customGreen font-semibold">
          More Info
          <span className="arrow">--→</span>
        </a>
      </div>
    </div>
  );
};

export default LuxuryDesign;
