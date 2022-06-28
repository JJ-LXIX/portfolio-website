import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" h-[95vh] w-full flex flex-col justify-around items-center px-6  ">
      {/* Hero Text */}
      <div className="flex flex-col justify-around items-baseline h-[45vh] pt-5  w-full">
        <div className="-space-y-1">
          <h2 className="text-twoColor font-bold text-3xl">Hi there! I'm</h2>
          <h1 className="text-threeColor font-bold text-4xl ">
            Jagrath Shetty
          </h1>
          <h2 className="text-twoColor font-bold text-3xl">
            Frontend Developer
          </h2>
        </div>

        <h2 className="text-threeColor/90 text-lg font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea quod
          error sint suscipit similique dolorem iste unde cupiditate ut.
        </h2>

        {/* Github Button CTA */}
        <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
          View Github
        </button>
      </div>

      {/* Hero Image */}
      <div className=" h-[40vh] w-full  bg-twoColor flex justify-center items-center">
        <Image src="/hero-image.svg" width="400" height="400" />
      </div>
    </div>
  );
};

export default HeroSection;
