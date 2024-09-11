import React from "react";
import fc from "../assets/facebookicon.png";
import insta from "../assets/instagram.png";
import twet from "../assets/twitter.png";

const footer = () => {
  return (
    <footer>
      <div className="bg-colorbg h-[520px] md:h-[350px] lg:h-[350px] overflow-hidde">
        <div className="flex justify-between text-white font-lexend">
          <div className="w-40 lg:w-[300px] pl-8 md:pt-10 lg:pt-24">
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-Caveat tracking-wider">
              Furnicom
            </h1>
            <p className="text-xs pt-4">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className="bg-amber-50 w-px"></div>
          <div className="flex-none md:flex lg:flex">
            <div className="flex pl-4 md:pl-0 lg:pl-0 mt-2 md:mt-0 lg:mt-0">
              <div className="text-xl tracking-wide md:m-5 lg:mt-10 lg:mr-20">
                <h3>Furniture</h3>
                <div className="text-xs pt-5">
                  <p>Beds</p>
                  <p className="py-3">Chairs</p>
                  <p>All</p>
                </div>
              </div>
              <div className="text-xl tracking-wide md:mt-5 lg:m-10 pl-2 md:pl-0 lg:pl-0">
                <h3>Follow Us</h3>
                <div className="text-xs pt-5 flex h-14 p-3">
                  <img src={fc} alt="facebook icon" className="invert" />
                  <p className="py-[8px]">Facebook</p>
                </div>
                <div className="text-xs flex h-14 p-4">
                  <img src={twet} alt="twitter icon" className="invert p-0.5" />
                  <p className="py-[8px] pl-2">Twitter</p>
                </div>
                <div className="text-xs pt-3 flex h-14 p-4">
                  <img src={insta} alt="instagram icon" className="invert p-0.5" />
                  <p className="py-[8px] pl-2">Instagram</p>
                </div>
              </div>
            </div>
            <div className="flex relative right-28 md:right-0 lg:right-0 pt-2 md:pt-0 lg:pt-0">
              <div className="md:pt-4 text-xl tracking-wide md:m-2 lg:m-10">
                <h1>Sales@example.com</h1>
                <p className="text-xs pb-5">Mail us now</p>
                <h1>(234)567-890-11</h1>
                <p className="text-xs pb-5">WhatsApp or Call</p>
              </div>
              <div className="justify-right pl-2 md:pl-0 lg:pl-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.121176995208!2d76.95710774475114!3d11.017584126337601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1723717525338!5m2!1sen!2sin"
                  className="w-36 md:w-40 lg:w-80 h-48 md:h-[350px] lg:h-[350px] border-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-xs font-lexend relative right-20 md:right-28 lg:right-56 bottom-8">
          <p>copyright &copy; 2024, All rights reserved.</p>
        </div>
        <div className="text-center text-white relative lg:left-40 md:bottom-24 lg:bottom-20 p-3">
          <ul className="flex gap-5 justify-center">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Private Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
