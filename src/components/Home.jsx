import React from "react";
import bag from "../assets/Bag.png";
import search from "../assets/icons-search.png";
import grid1 from "../assets/img-grid1.png";
import grid2 from "../assets/img-grid2.png";
import grid3 from "../assets/img-grid3.svg";
import vector from "../assets/Vector.png";
import Dot from "../assets/Dot.png";
import tick from "../assets/tick.png";
import tick1 from "../assets/tick1.png";
import truck from "../assets/truck.png";
import clock from "../assets/clock.png";
import c1 from "../assets/product-1.png";
import c2 from "../assets/product-2.png";
import c3 from "../assets/product-3.png";
import c4 from "../assets/schair.png";
import mail from "../assets/gmail.png";
import send from "../assets/paper-plane.png";

import LuxuryDesign from "./LuxuryDesign";
import Process from "./Process";
import Products from "./Products";

const Home = () => {
  return (
    <section>
      <div className="bg-hero h-screen w-full bg-cover bg-center font-copperplate text-white">
        <div>
          <h1 className="text-5xl pt-8 pl-8 font-Caveat relative top-6 md:top-0 lg:top-0">Furnicom</h1>
          <ul className="flex gap-3 md:gap-16 lg:gap-16 font-lexend justify-center relative md:-bottom-2 lg:bottom-8 bottom-16">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
            <img src={bag} alt="icon" className="relative left-5 lg:left-96 md:left-16" />
          </ul>
        </div>
        <div className="font-normal text-center pt-14 font-Caveat">
          <h3 className="text-3xl md:text-5xl lg:text-5xl">
            ELEVATE YOUR HOME, <br />
            ELEVATE YOUR LIFESTYLE
          </h3>
          <p className="text-sm p-5 tracking-wider">
            TURN YOUR ROOM WITH PANTO INTO A LOT MORE MINIMALIST AND MORDEN WITH
            EASY AND SPEED
          </p>
          <div className="justify-items-center">
            <input
              type="text"
              placeholder="Search Furniture"
              className="rounded-full m-10 px-5 h-10 w-80 "
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 bg-amber-50">
        <div className="pt-24 pl-20 text-5xl font-bold text-customGreen font-Caveat">
          <p>
            Why <br />
            Choosing Us
          </p>
        </div>
        <div className="px-10">
          <p className="pt-10 font-lexend text-2xl text-customGreen font-extrabold">
            Luxury facilities
          </p>
          <img src={vector} alt="#" />
          <p className="py-2 color-black text-base font-normal text-justify">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <a href="#" className="text-customGreen font-semibold">
            More Info
            <span className="arrow">--→</span>
          </a>
        </div>
        <div className="px-10">
          <p className="pt-10 font-lexend text-2xl text-customGreen font-extrabold">
            Affordable Price
          </p>
          <img src={vector} alt="#" />
          <p className="py-2 color-black text-base font-normal text-justify">
            You can get a workspace of the highest quality at an affordable
            price and still enjoy the facilities that are oly here.
          </p>
          <a href="#" className="text-customGreen font-semibold">
            More Info
            <span className="arrow">--→</span>
          </a>
        </div>
        <div className="px-10">
          <p className="pt-10 font-lexend text-2xl text-customGreen font-extrabold">
            Many Choices
          </p>
          <img src={vector} alt="#" />
          <p className="py-2 color-black text-base font-normal text-justify">
            We provide many unique work space choices so that you canchoose the
            workspace to your liking.
          </p>
          <a href="#" className="text-customGreen font-semibold">
            More Info
            <span className="arrow">--→</span>
          </a>
        </div>
      </div>

      <LuxuryDesign/>

      <Products/>

       <Process/>

      <div className="bg-colorbg text-white font-lexend grid grid-cols-2 lg:grid-cols-3 h-80 md:h-80 lg:h-60 w-100% p-0 lg:p-6 md:px-0 lg:px-16 text-center md:text-left lg:text-left">
        <div className="flex-none md:flex lg:flex">
          <div>
          <img
          src={clock}
          alt="Dispatch"
          className="w-12 h-10 relative left-16 top-9 md:left-20 md:top-16 lg:left-20 lg:top-16"
        /></div>
        <div className="p-6 md:p-16 lg:p-16 text-sm pl-8 md:pl-20 pt-12 lg:pl-20 md:mx-5 lg:mx-5">
          <p>
            <span className="text-2xl">DISPATCH</span>
            <br /> We will dispatch your product within 2-3 weeks
          </p>
        </div>
        </div>
        <div className="flex-none md:flex lg:flex">
        <img
          src={truck}
          alt="Delivery"
          className="w-16 h-16 relative top-6 left-10 md:top-12 md:left-12 lg:top-12 lg:left-12"
        />
        <div className=" pl-2 p-5 md:p-16 lg:p-16 text-sm">
          <p>
            <span className="text-2xl">DELIVERY</span>
            <br />
            We will deliver your products and take care of the installation
          </p>
        </div>
        </div>
        <div className="flex">
        <img
          src={tick1}
          alt=""
          className="relative w-5 h-4 left-[73px] md:left-56 lg:left-[73px] top-9 md:top-4 lg:top-20"
        />
        <img
          src={tick}
          alt="Guarantee"
          className="w-12 h-12 relative left-10 md:left-48 lg:left-10 top-5 md:top-0 lg:top-16"
        />
        <div className="pl-20 md:pl-60 lg:pl-20 p-3 md:p-0 lg:p-16 text-sm">
          <p>
            <span className="text-2xl">GUARANTEE</span>
            <br />
            We offer a guarantee on all our products
          </p>
        </div>
        </div>
      </div>

      <div className="bg-amber-50 w-100% h-[650px] md:h-[500px] lg:h-[500px]">
        <h1 className="px-24 pt-20 text-3xl font-bold text-customGreen text-center tracking-wide font-Caveat">
          PRODUCT CATEGORIES
        </h1>
        <div className="flex p-10 m-10 overflow-x-scroll lg:overflow-clip md:overflow-x-scroll">
          <div className="md:flex">
            <p className="bg-custombg m-2 h-32 md:h-[120px] lg:h-[120px] w-60 rounded-xl">
              <img
                src={c1}
                alt="product-1"
                className="h-40 w-24 relative left-20 md:left-2 lg:left-2 bottom-4"
              />
            </p>
            <div className="font-lexend px-5">
              <p className="text-xl font-bold pb-3">Nordic Chair</p>
              <p>
                The Nordic chair combines the warmth of natural oak wood with a
                minimalist and functional design.
              </p>
              <p className="font-bold text-sm py-1">Read more</p>
            </div>
          </div>
          <div className="md:flex">
            <p className="bg-custombg m-2 h-32 md:h-[120px] lg:h-[120px] w-64 rounded-xl">
              <img
                src={c2}
                alt="product-2"
                className="h-40 w-52 relative left-10 md:left-1 lg:left-1 bottom-9"
              />
            </p>
            <div className="font-lexend px-5">
              <p className="text-xl font-bold pb-3">Kruzi Aero</p>
              <p>
                Kruzi Aero Classic Crystal Ghost Chair Wooden Legs Chair wood
                with a minimalist.
              </p>
              <p className="font-bold text-sm py-1">Read more</p>
            </div>
          </div>
          <div className="md:flex">
            <p className="bg-custombg m-2 h-32 md:h-[120px] lg:h-[120px] w-60 rounded-xl">
              <img
                src={c3}
                alt="product-3"
                className="h-36 w-20 relative left-20 md:left-3 lg:left-3 bottom-3"
              />
            </p>
            <div className="font-lexend px-5">
              <p className="text-xl font-bold pb-3">Ergonomic Chair</p>
              <p>
                An ergonomic chair is one that is built to support the human
                body functional design.
              </p>
              <p className="font-bold text-sm py-1">Read more</p>
            </div>
          </div>
        </div>
        <div className="bg-red text-black text-center font-semibold ">
          <a href="#">View All --→</a>
        </div>
      </div>

    

      <div className="md:flex flex-none lg:flex bg-amber-50 w-100% h-[500px] md:h-96 lg:w-100% lg:h-[600px]">
        <div className="lg:w-1/3">
          <img src={c4} alt="image" className="lg:w-[400px] lg:h-[500px] md:w-80 md:h-96 w-60 h-72 pt-16 pl-"/>
        </div>
        <div className="lg:w-2/3 md:pl-8 lg:pl-20 pl-20 pt-2 md:pt-36 lg:pt-52">
          <div className="flex">
            <img src={mail} alt="gmail logo" className="h-10 mr-3" />
            <p className="text-lg font-semibold pt-1">
              Subscribe to Newsletter
            </p>
          </div>
          <form action="" >
            <input
              type="text"
              placeholder="Enter your name"
              className="h-8 md:w-44 md:h-8 lg:w-64 lg:h-10 border-gray-850 border-2 border-solid rounded-lg pl-3 mr-5"
            />
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="h-8 md:w-44 md:h-8 lg:w-64 lg:h-10 border-gray-850 border-2  rounded-lg pl-3"
            />
            <button
              type="submit"
              className="ml-5 p-1 w-11 bg-framecolor text-white rounded-md relative lg:top-2 md:top-2 -top-3"
            >
              <img src={send} alt="" className="h-8 w-9" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
