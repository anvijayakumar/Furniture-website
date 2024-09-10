import React from "react";
import review from "../assets/reviewimg.png";
import union from "../assets/Union.png";
import bed1 from "../assets/bed1.png";
import bed2 from "../assets/bed2.png";
import bed3 from "../assets/bed3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // for tablet and medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-colorbg w-100% h-[700px] font-lexend text-center text-white">
      <p className="text-3xl tracking-wider pt-10 font-Caveat">TESTIMONIALS</p>
      <p className="py-5">Our Client Reviews</p>
      <div className="relative right-0 lg:right-0 lg:mx-36 my-10 px-14 lg:px-0">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="relative left-0 lg:left-5 rounded-xl">
              <img src={d.bed} alt="background image" className="w-[350px] h-[400px]" />
              <div className="absolute inset-3 top-32 left-5 lg:left-4">
                <img src={d.img} alt="union" className="w-80 lg:w-80 h-60 md:h-60 lg:h-60" />
                <div className="absolute -bottom-10 md:bottom-5 lg:bottom-0 -left-12 md:left-0 lg:left-0 w-80 p-20 md:p-10 lg:p-10 text-black">
                  <img
                    src={d.profile}
                    alt="profile"
                    className="relative left-[55px] md:left-[80px] lg:left-[93px] bottom-1 md:bottom-0 lg:bottom-5"
                  />
                  <div className="relative top-4">
                  <p className="text-2xl font-bold pb-2 md:pb-5 lg:pb-5">{d.name}</p>
                  <p className="text-xs">{d.text}</p>
                  <p className="text-amber-400">{d.star}</p>
                </div></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Santhosh",
    bed: bed1,
    img: union,
    text: "I have been their customer earlier (bought a sofa in 2009). That sofa is still good, but I really want to change it after so many years.",
    profile: review,
    star: "★★★★",
  },
  {
    name: "AncyJenisha",
    bed: bed2,
    img: union,
    text: "Sofa is created exactly what we want. I really appreciate the quality and design. Even the product delivered is exactly what was shown in the showroom.",
    profile: review,
    star: "★★★★",
  },
  {
    name: "Kishorekumar",
    bed: bed3,
    img: union,
    text: "Had a great experience with SPNS right from ordering till delivery. Prasad has really been very helpful right from assisting us in choosing.",
    profile: review,
    star: "★★★★",
  },
  {
    name: "Jenisha",
    bed: bed2,
    img: union,
    text: "Sofa is created exactly what we want. I really appreciate the quality and design. Even the product delivered is exactly what was shown in the showroom.",
    profile: review,
    star: "★★★★",
  },
  {
    name: "Ravi",
    bed: bed1,
    img: union,
    text: "I have been their customer earlier (bought a sofa in 2009). That sofa is still good, but I really want to change it after so many years.",
    profile: review,
    star: "★★★★",
  },
  {
    name: "Kishore",
    bed: bed3,
    img: union,
    text: "Had a great experience with SPNS right from ordering till delivery. Prasad has really been very helpful right from assisting us in choosing.",
    profile: review,
    star: "★★★★",
  },
];

export default Testimonials;
