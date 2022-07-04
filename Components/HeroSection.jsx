import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const animationContainer1 = {
    show: {
      scale: [1, 1.1, 0.9, 1],
      x: [0, 60, -40, 0],
      y: [0, -100, 40, 0],
      transition: { repeat: Infinity, duration: 10, ease: "easeInOut" },
    },
  };
  const animationContainer2 = {
    show: {
      scale: [1, 1.1, 0.9, 1],
      x: [0, -60, 40, 0],
      y: [0, 100, -100, 0],
      transition: { repeat: Infinity, duration: 10, ease: "easeInOut" },
    },
  };

  return (
    <div
      className=" h-[90vh] w-full flex flex-col justify-around items-center px-6 md:px-14 lg:px-20 lg:flex-row relative"
      id="top__of__page"
    >
      {/* Background Animation */}

      <motion.div
        variants={animationContainer1}
        animate="show"
        className="absolute bg-purple-600 lg:w-[25rem] lg:h-[25rem] left-[10rem]  rounded-full mix-blend-screen filter blur-3xl  opacity-40"
      ></motion.div>
      <motion.div
        variants={animationContainer2}
        animate="show"
        className="animation-delay-2000 absolute bg-pink-300 lg:w-[25rem] lg:h-[25rem] left-[20rem]   rounded-full mix-blend-screen filter blur-3xl  opacity-40"
      ></motion.div>
      <motion.div
        variants={animationContainer1}
        animate="show"
        transition={{ delay: 2 }}
        className="animation-delay-4000 absolute bg-yellow-600 lg:w-[25rem] lg:h-[25rem] left-[30rem]  rounded-full mix-blend-screen filter blur-3xl  opacity-40"
      ></motion.div>

      {/* Hero Text */}
      <div className="flex flex-col justify-around items-baseline h-[45vh] pt-5 w-full lg:h-[60vh]">
        <div className="-space-y-1 md:space-y-0 lg:-space-y-1">
          <h2 className="text-twoColor font-bold text-3xl md:text-6xl">
            Hi there! I'm
          </h2>
          <h1 className="text-threeColor font-bold text-4xl md:text-7xl ">
            Jagrath Shetty,
          </h1>
          <h2 className="text-twoColor font-bold text-3xl md:text-6xl">
            Frontend Developer.
          </h2>
        </div>

        <h2 className="text-threeColor/90 text-lg font-semibold md:text-3xl ">
          I am enthusiastic about solving business problems through
          human-centered design. Curious by nature and business-minded.
        </h2>

        {/* Github Button CTA */}
        <a target="_blank" href="https://github.com/JJ-LXIX">
          <button className="bg-transparent  border-2 border-threeColor py-2 px-4 mt-2 text-threeColor text-xl font-semibold rounded  transition-all duration-150 md:py-5 md:px-14 md:text-2xl hover:bg-twoColor/50 hover:scale-110 active:scale-90 ">
            View Github
          </button>
        </a>
      </div>

      {/* Hero Image */}
      <div className=" h-[40vh] w-full  bg-twoColor flex justify-center items-center md:-mt-8 lg:h-[60vh] lg:mt-0">
        <Image src="/hero-image.svg" width="400" height="400" />
      </div>
    </div>
  );
};

export default HeroSection;
