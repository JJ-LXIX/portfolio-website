import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" h-[90vh] w-full flex flex-col justify-around items-center px-6 md:px-14 lg:px-20 "
      id="top__of__page"
    >
      {/* Hero Text */}
      <div className="flex flex-col justify-around items-baseline h-[45vh] pt-5  w-full">
        <div className="-space-y-1 md:space-y-0">
          <h2 className="text-twoColor font-bold text-3xl md:text-6xl">
            Hi there! I'm
          </h2>
          <h1 className="text-threeColor font-bold text-4xl md:text-7xl ">
            Jagrath Shetty
          </h1>
          <h2 className="text-twoColor font-bold text-3xl md:text-6xl">
            Frontend Developer
          </h2>
        </div>

        <h2 className="text-threeColor/90 text-lg font-semibold md:text-3xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea quod
          error sint suscipit similique dolorem iste unde cupiditate ut.
        </h2>

        {/* Github Button CTA */}
        <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 text-threeColor text-2xl font-semibold rounded active:scale-95 transition-all duration-150 md:py-5 md:px-14">
          View Github
        </button>
      </div>

      {/* Hero Image */}
      <div className=" h-[40vh] w-full  bg-twoColor flex justify-center items-center md:-mt-8">
        <Image src="/hero-image.svg" width="400" height="400" />
      </div>
    </div>
  );
};

export default HeroSection;
