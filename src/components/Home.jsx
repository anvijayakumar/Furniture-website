import React from "react";
import bag from "../assets/Bag.png";
import search from "../assets/icons-search.png";
import grid1 from "../assets/img-grid1.png";
import grid2 from "../assets/img-grid2.png";
import grid3 from "../assets/img-grid3.svg";
import vector from "../assets/Vector.png";
import Dot from "../assets/Dot.png";
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import chair4 from "../assets/chair4.png";
import pencil from "../assets/pencil.png";
import dimond from "../assets/dimond.png";
import parquet from "../assets/parquet.png";
import hand1 from "../assets/hand1.png";
import tick from "../assets/tick.png";
import tick1 from "../assets/tick1.png";
import truck from "../assets/truck.png";
import clock from "../assets/clock.png";
import c1 from "../assets/product-1.png";
import c2 from "../assets/product-2.png";
import c3 from "../assets/product-3.png";
import c4 from "../assets/schair.png";
import group1 from "../assets/Group1.png";
import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";
import review from "../assets/reviewimg.png";
import mail from "../assets/gmail.png";
import send from "../assets/paper-plane.png";

const Home = () => {
  return (
    <section>
      <div className="bg-hero h-screen w-full bg-cover bg-center font-copperplate text-white">
        <div>
          <h1 className="text-5xl pt-8 pl-8 font-Caveat">Furnicom</h1>
          <ul className="flex gap-16 font-lexend justify-center relative bottom-8">
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
            <img src={bag} alt="icon" className="relative left-96" />
          </ul>
        </div>
        <div className="font-normal text-center pt-14 font-Caveat">
          <h3 className="text-5xl">
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

      <div className="grid grid-cols-4 bg-amber-50">
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

      <div className="bg-amber-50 p-32 flex">
        <div className="w-3/1 flex">
          <div>
            <img src={Dot} alt="img" className="w-40 h-40 relative -left-10" />
            <img
              src={grid1}
              alt="#"
              className="relative -top-28 left-0 right-24"
            />
          </div>
          <div>
            <img
              src={grid2}
              alt="#"
              className=" rounded-lg w-48 h-44 ml-7 my-4 relative top-10"
            />
            <img
              src={grid3}
              alt="#"
              className=" rounded-lg w-100% h-100% relative -left-16 top-14"
            />
          </div>
        </div>
        <div className="m-10 w-1/3">
          <h3 className="pt-24 pl-0 text-4xl font-bold text-customGreen font-Caveat">
            WHO WE ARE
          </h3>
          <h5 className="pt-10 pl-0 font-lexend text-2xl">
            We provide you the <br />
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

      <div className="bg-colorbg">
        <div className="p-20">
          <h2 className="text-4xl font-Caveat font-normal tracking-wider text-amber-50">
            <strong>F</strong>EATURED <strong>P</strong>RODUCT'S
          </h2>
          <p className="py-6 font-lexend text-3xl text-amber-50">
            The best ever products from <br />
            our craftsman
          </p>
          <button className="border-solid border-2 border-gray-300 text-lg bg-white rounded-3xl w-32">
            Explore
          </button>
        </div>
        <div className="grid grid-cols-4 m-10 gap-1">
          <div className="bg-white rounded-2xl mx-8 w-60 h-[350px] relative">
            <img src={chair1} alt="image" className="absolute left-6 -top-40" />
            <div className="mt-52">
              <div className="pl-5">
              <p>Chair</p>
              <h3 className="font-lexend">Sakarias Armchair</h3>
              <p className="text-amber-300">★★★★</p></div>
              <div className="pt-5 flex justify-between items-center px-5">
                <div>₹4999</div>
                <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">+</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl mx-8 w-60 h-[350px] relative">
            <img src={chair2} alt="image" className="absolute left-6 bottom-24" />
            <div className="mt-52">
              <div className="pl-5">
              <p>Chair</p>
              <h3 className="font-lexend">Baltsar Chair</h3>
              <p className="text-amber-300">★★★</p></div>
              <div className="pt-5 flex justify-between items-center px-5">
                <div>₹5999</div>
                <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">+</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl mx-8 w-60 h-[350px] relative">
            <img src={chair3} alt="image" className="absolute left-6 -top-5" />
            <div className="mt-52">
              <div className="pl-5">
              <p>Chair</p>
              <h3 className="font-lexend">Anjay Chair</h3>
              <p className="text-amber-300">★★★★★</p></div>
              <div className="pt-5 flex justify-between items-center px-5">
                <div>₹3999</div>
                <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">+</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl mx-8 w-60 h-[350px] relative">
            <img src={chair4} alt="image" className="absolute left-6 -top-12" />
            <div className="mt-52">
              <div className="pl-5">
              <p>Chair</p>
              <h3 className="font-lexend">Nyantuy Chair</h3>
              <p className="text-amber-300">★★★★</p></div>
              <div className="pt-5 flex justify-between items-center px-5">
                <div>₹4799</div>
                <div className="w-10 h-10 bg-black rounded-full text-white text-2xl flex justify-center items-center">+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red text-white text-center font-semibold p-10">
          <a href="#">View All --→</a>
        </div>
      </div>

      <div className="bg-amber-50 h-[750px]">
        <h1 className="px-24 pt-20 text-3xl font-bold text-customGreen font-Caveat">
          OUR PROCESS
        </h1>
        <p className="px-24 pb-14 pt-3 text-2xl font-lexend">
          Make your home with our
          <br /> wood furniture
        </p>
        <div className="grid grid-cols-3">
          <div className="flex text-4xl my-28 ml-32 row-start-1 row-end-3 font-bold">
            <p className="bg-clip-border p-6 bg-framecolor w-20 h-20"></p>
            <p className="gap-0 relative top-1 right-10">
              200+
              <br />
              <span className="text-2xl relative -top-2">Project’s</span>
            </p>
          </div>
          <div>
            <div className="flex relative right-24">
              <img
                src={dimond}
                alt="image"
                className="relative left-8 top-5 h-20 w-24"
              />
              <p className="bg-clip-border bg-framecolor w-32 h-20"></p>
              <div className="font-lexend pl-8">
                <p className="text-3xl ">
                  High <br />
                  Quality
                </p>
                <p>
                  Teakwood is one of the hardest and most durable of all natural
                  woods.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex relative right-28 pb-28 pl-22">
              <img
                src={hand1}
                alt="image"
                className="relative left-16 top-3 h-24 w-28"
              />
              <p className="bg-clip-border bg-framecolor w-36 h-20"></p>
              <div className="font-lexend pl-10">
                <p className="text-3xl ">Professional Technique</p>
                <p>
                  Follow safety procedures and use appropriate saws for
                  different types of cuts.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex relative right-24">
              <img
                src={parquet}
                alt="image"
                className="relative left-10 top-5 h-20 w-20"
              />
              <p className="bg-clip-border bg-framecolor w-40 h-20"></p>
              <div className="font-lexend ml-8 px-4">
                <p className="text-3xl ">
                  Variety of
                  <br /> Wood
                </p>
                <p>
                  Some common types of softwood trees include fir, redwood,
                  pine, cedar and spruce.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex relative right-24">
              <img
                src={pencil}
                alt="image"
                className="relative left-14 top-6 h-20 w-20"
              />
              <p className="bg-clip-border bg-framecolor w-48 h-20"></p>
              <div className="font-lexend pl-8 ">
                <p className="text-3xl pr-20">Custom Production</p>
                <p>
                  using wood fibres (mostly from Radiata Pine), Urea
                  Formaldehyde (UF) resin and a minute amount of paraffin wax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-colorbg text-white font-lexend flex h-60 w-100% p-6 px-16">
        <img
          src={clock}
          alt="Dispatch"
          className="w-10 h-10 relative left-20 top-16"
        />
        <div className="p-16 text-sm pl-20 mx-5">
          <p>
            <span className="text-2xl">DISPATCH</span>
            <br /> We will dispatch your product within 2-3 weeks
          </p>
        </div>
        <img
          src={truck}
          alt="Delivery"
          className="w-16 h-16 relative top-12 left-12"
        />
        <div className="p-16 text-sm">
          <p>
            <span className="text-2xl">DELIVERY</span>
            <br />
            We will deliver your products and take care of the installation
          </p>
        </div>
        <div className="check w-10 h-10 font-white"></div>
        <img
          src={tick1}
          alt=""
          className="relative w-5 h-4 left-[73px] top-20"
        />
        <img
          src={tick}
          alt="Guarantee"
          className="w-12 h-12 relative left-10 top-16"
        />
        <div className="p-16 text-sm">
          <p>
            <span className="text-2xl">GUARANTEE</span>
            <br />
            We offer a guarantee on all our products
          </p>
        </div>
      </div>

      <div className="bg-amber-50 w-100% h-[500px]">
        <h1 className="px-24 pt-20 text-3xl font-bold text-customGreen text-center tracking-wide font-Caveat">
          PRODUCT CATEGORIES
        </h1>
        <div className="flex p-10 m-10">
          <p className="bg-custombg m-2 h-[120px] w-60 rounded-xl">
            <img
              src={c1}
              alt="product-1"
              className="h-40 w-24 relative left-2 bottom-4"
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
          <p className="bg-custombg m-2 h-[120px] w-64 rounded-xl">
            <img
              src={c2}
              alt="product-2"
              className="h-40 w-52 relative left-1 bottom-9"
            />
          </p>
          <div className="font-lexend px-5">
            <p className="text-xl font-bold pb-3">Kruzi Aero</p>
            <p>
              Kruzi Aero Classic Crystal Ghost Chair Wooden Legs Chair wood with
              a minimalist.
            </p>
            <p className="font-bold text-sm py-1">Read more</p>
          </div>
          <p className="bg-custombg m-2 h-[120px] w-60 rounded-xl">
            <img
              src={c3}
              alt="product-3"
              className="h-36 w-20 relative left-3 bottom-3"
            />
          </p>
          <div className="font-lexend px-5">
            <p className="text-xl font-bold pb-3">Ergonomic Chair</p>
            <p>
              An ergonomic chair is one that is built to support the human body
              functional design.
            </p>
            <p className="font-bold text-sm py-1">Read more</p>
          </div>
        </div>
        <div className="bg-red text-black text-center font-semibold ">
          <a href="#">View All --→</a>
        </div>
      </div>

      <div className="bg-colorbg w-100% h-[720px] font-lexend text-center text-white p-4">
        <p className="text-3xl tracking-wider pt-10 font-Caveat">
          TESTIMONIALS
        </p>
        <p className="py-5">Our Client Reviews</p>
        <div className="flex justify-center m-5 h-[450px]">
          <img
            src={review}
            alt=""
            className="w-12 h-12 relative left-[200px] top-[215px]"
          />
          <img src={group1} alt="" />
          <img
            src={review}
            alt=""
            className="w-12 h-12 relative left-[199px] top-[215px]"
          />
          <img src={group2} alt="" />
          <img
            src={review}
            alt=""
            className="w-12 h-12 relative left-52 top-[215px]"
          />
          <img src={group3} alt="" />
        </div>
      </div>

      <div className="flex bg-amber-50 w-100% h-[600px]">
        <div className="w-1/3">
          <img src={c4} alt="" className="w-[400px] h-[500px] pt-16" />
        </div>
        <div className="w-2/3 pl-20 pt-52">
          <div className="flex">
            <img src={mail} alt="gmail logo" className="h-10 mr-3" />
            <p className="text-lg font-semibold pt-1">
              Subscribe to Newsletter
            </p>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-56 h-10 border-gray-850 border-2 border-solid rounded-lg pl-3 mr-5"
            />
            <input
              type="email"
              placeholder="Enter your e-mail"
              className=" w-52 h-10 border-gray-850 border-2  rounded-lg pl-3"
            />
            <button
              type="submit"
              className="ml-5 p-1 w-11 bg-framecolor text-white rounded-md relative top-2"
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
