import React from "react";
import pencil from "../assets/pencil.png";
import dimond from "../assets/dimond.png";
import parquet from "../assets/parquet.png";
import hand1 from "../assets/hand1.png";

const Process = () => {
  return (
    <div className="bg-amber-50 lg:h-[750px] md:h-[700px] h-[900px]">
      <h1 className="px-24 pt-5 md:pt-20 lg:pt-20 text-3xl font-bold text-customGreen font-Caveat">
        OUR PROCESS
      </h1>
      <p className="px-7 md:px-24 lg:px-24 md:pb-10 lg:pb-10 pt-3 lg:text-2xl font-lexend">
        Make your home with our
        <span className="hidden lg:inline">
          <br />
        </span>{" "}
        wood furniture
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-row">
        <div className="flex text-4xl my-10 lg:my-28 ml-32 row-start-1 row-end-3 font-bold">
          <p className="bg-clip-border p-6 bg-framecolor w-20 h-20 "></p>
          <p className="gap-0 relative top-1 right-10">
            200+
            <br />
            <span className="text-2xl relative -top-2">Project’s</span>
          </p>
        </div>
        <div>
          <div className="flex relative right-24 pl-16 md:pl-0 lg:pl-12">
            <img
              src={dimond}
              alt="image"
              className="relative left-10 top-4 md:left-10 md:top-5 lg:left-12 lg:top-5 h-16 w-16 md:h-16 md:w-24 lg:h-20"
            />
            <p className="bg-clip-border bg-framecolor w-32 h-14  md:w-36 md:h-16 lg:w-40 lg:h-20"></p>
            <div className="font-lexend pl-2 md:pl-6 lg:pl-6">
              <p className="text-2xl lg:text-3xl ">
                High{" "}
                <span className="hidden lg:inline">
                  <br />
                </span>
                Quality
              </p>
              <p className="pr-10 md:pr-0">
                Teakwood is one of the hardest and most durable of all natural
                woods.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative right-28 py-4 md:py-8 lg:py-0 lg:pb-28 pl-20 md:pl-0 lg:pl-5">
          <img
            src={hand1}
            alt="image"
            className="relative left-12 top-3 md:left-16 md:top-3 lg:left-16 lg:top-3 h-16 md:h-20 md:w-28"
          />
          <p className="bg-clip-border bg-framecolor w-36 h-14 md:w-44 md:h-16 lg:w-40 lg:h-20"></p>
          <div className="font-lexend pl-2 md:pl-6 lg:pl-6">
            <p className="text-2xl lg:text-3xl">Professional Technique</p>
            <p className="pr-10 md:pr-0">
              Follow safety procedures and use appropriate saws for different
              types of cuts.
            </p>
          </div>
        </div>
        <div className="flex relative right-24 md:ml-20 pl-20 md:pl-0 lg:pl-0 p-3 md:p-0">
          <img
            src={parquet}
            alt="image"
            className="relative left-10 top-5 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
          />
          <p className="bg-clip-border bg-framecolor w-36 h-14  md:w-48 md:h-16 lg:w-48 lg:h-20"></p>
          <div className="font-lexend ml-0 md:ml-0 md:px-1 pl-2 md:pl-6 lg:pl-6">
            <p className="text-2xl lg:text-3xl">
              Variety of
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              Wood
            </p>
            <p className="pr-3 md:pr-0">
              Some common types of softwood trees include fir, redwood, pine,
              cedar and spruce.
            </p>
          </div>
        </div>
        <div className="flex relative right-24 pl-16 md:pl-0 lg:pl-0">
          <img
            src={pencil}
            alt="image"
            className="relative left-10 top-4 md:left-10 md:top-6 lg:left-14 lg:top-6 w-20 h-16 md:w-16 md:h-16 lg:h-20 lg:w-20"
          />
          <p className="bg-clip-border bg-framecolor w-48 h-14 md:w-52 md:h-16 lg:w-48 lg:h-20"></p>
          <div className="font-lexend pl-2 md:pl-6 lg:pl-6">
            <p className="text-2xl lg:text-3xl">Custom Production</p>
            <p className="pr-20 lg:pr-0 md:pr-0">
              Using wood fibres (mostly from Radiata Pine), Urea Formaldehyde
              (UF) resin and a minute amount of paraffin wax.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
