import React from "react";
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import chair4 from "../assets/chair4.png";

const Products = () => {
  return (
    

<div className="bg-colorbg">
<div className="p-5 md:p-20 lg:p-20">
  <h2 className="text-2xl md:text-4xl lg:text-4xl font-Caveat font-normal tracking-wider text-amber-50">
    <strong>F</strong>EATURED <strong>P</strong>RODUCT'S
  </h2>
  <p className="py-2 md:py-6 lg:py-6 font-lexend text-sm md:text-lg lg:text-3xl text-amber-50">
    The best ever products from <br />
    our craftsman
  </p>
  <button className="border-solid border-2 border-gray-300 text-base md:text-lg lg:text-lg bg-white rounded-3xl w-20 md:w-32 lg:w-32 cursor-pointer">
    Explore
  </button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 md:space-y-4 lg:space-y-0 m-0 md:m-10 lg:m-10 mt-7 md:mt-0 lg:mt-0">
  <div className="bg-white rounded-2xl mx-4 md:mx-8 lg:mx-8 w-40 md:w-60 lg:w-60 h-72 md:h-[350px] lg:h-[350px] relative">
    <img src={chair1} alt="image" className="absolute left-2 md:left-6 lg:left-6 -top-28 md:-top-40 lg:-top-40 w-40 h-60 md:w-80 md:h-96 lg:w-80 lg:h-96"/>
    <div className="mt-32 md:mt-52 lg:mt-52">
      <div className="pl-5">
        <p>Chair</p>
        <h3 className="font-lexend">Sakarias Armchair</h3>
        <p className="text-amber-300">★★★★</p>
      </div>
      <div className="pt-2 md:pt-5 lg:pt-5 flex justify-between items-center px-5">
        <div>₹4999</div>
        <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">
          +
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-2xl mx-4 md:mx-8 lg:mx-8 w-40 md:w-60 lg:w-60 h-72 md:h-[350px] lg:h-[350px] relative">
    <img src={chair2} alt="image" className="absolute left-2 bottom-28 md:left-6 md:bottom-24 lg:left-6 lg:bottom-24 w-36 h-64 md:w-44 md:h-96 lg:w-44 lg:h-[350px]"/>
    <div className="mt-36 md:mt-52 lg:mt-52">
      <div className="pl-5">
        <p>Chair</p>
        <h3 className="font-lexend">Baltsar Chair</h3>
        <p className="text-amber-300">★★★</p>
      </div>
      <div className="pt-2 md:pt-5 lg:pt-5 flex justify-between items-center px-5">
        <div>₹5999</div>
        <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">
          +
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-2xl mt-5 md:mt-0 lg:mt-0 mx-4 md:mx-8 lg:mx-8 w-40 md:w-60 lg:w-60 h-72 md:h-[350px] lg:h-[350px] relative">
    <img src={chair3} alt="image" className="absolute left-2 -top-4 md:left-6 md:-top-5 lg:left-6 lg:-top-5 w-36 h-40 md:w-44 md:h-52 lg:w-48 lg:h-60"/>
    <div className="mt-40 md:mt-52 lg:mt-52">
      <div className="pl-5">
        <p>Chair</p>
        <h3 className="font-lexend">Anjay Chair</h3>
        <p className="text-amber-300">★★★★★</p>
      </div>
      <div className="pt-2 md:pt-5 lg:pt-5 flex justify-between items-center px-5">
        <div>₹3999</div>
        <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">
          +
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-2xl mt-5 md:mt-0 lg:mt-0 mx-4 md:mx-8 lg:mx-8 w-40 md:w-60 lg:w-60 h-72 md:h-[350px] lg:h-[350px] relative">
    <img src={chair4} alt="image" className="absolute left-2 -top-5 md:left-6 md:-top-12 lg:left-6 lg:-top-12 w-80 h-68 md:w-80 md:h-68 lg:w-80 lg:h-68"/>
    <div className="mt-40 md:mt-52 lg:mt-52">
      <div className="pl-5">
        <p>Chair</p>
        <h3 className="font-lexend">Nyantuy Chair</h3>
        <p className="text-amber-300">★★★★</p>
      </div>
      <div className="pt-2 md:pt-5 lg:pt-5 flex justify-between items-center px-5">
        <div>₹4799</div>
        <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">
          +
        </div>
      </div>
    </div>
  </div>
</div>
<div className="bg-red text-white text-center font-semibold p-10">
  <a href="#">View All --→</a>
</div>
</div>

  );
};

export default Products;
