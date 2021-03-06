import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const animationContainer1 = {
    show: {
      scale: [1, 1.1, 0.9, 1],
      x: [0, 60, -40, 0],
      y: [0, -100, 40, 0],
      transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
    },
  };
  const animationContainer2 = {
    show: {
      scale: [1, 1.1, 0.9, 1],
      x: [0, -60, 40, 0],
      y: [0, 100, -100, 0],
      transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
    },
  };

  const parentSection = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const childrenSection = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
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
        className="lg:absolute lg:bg-purple-600 lg:w-[25rem] lg:h-[25rem] lg:left-[10rem]  lg:rounded-full lg:mix-blend-screen lg:filter lg:blur-3xl  lg:opacity-40"
      ></motion.div>
      <motion.div
        variants={animationContainer2}
        animate="show"
        className="lg:absolute lg:bg-pink-300 lg:w-[25rem] lg:h-[25rem] lg:left-[20rem]   lg:rounded-full lg:mix-blend-screen lg:filter lg:blur-3xl  lg:opacity-40"
      ></motion.div>
      <motion.div
        variants={animationContainer1}
        animate="show"
        transition={{ delay: 2 }}
        className="lg:absolute lg:bg-yellow-600 lg:w-[25rem] lg:h-[25rem] lg:left-[30rem]  lg:rounded-full lg:mix-blend-screen lg:filter lg:blur-3xl  lg:opacity-40"
      ></motion.div>

      {/* Hero Text */}
      <motion.div
        className="flex flex-col justify-around items-baseline h-[45vh] pt-5 w-full lg:h-[60vh]"
        variants={parentSection}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="-space-y-1 md:space-y-0 lg:-space-y-1"
          variants={childrenSection}
        >
          <h2 className="text-twoColor font-bold text-3xl md:text-6xl">
            Hi there! I'm
          </h2>
          <h1 className="text-threeColor font-bold text-4xl md:text-7xl ">
            Jagrath Shetty,
          </h1>
          <h2 className="text-twoColor font-bold text-3xl md:text-6xl">
            Frontend Developer.
          </h2>
        </motion.div>

        <motion.h2
          className="text-threeColor/90 text-lg font-semibold md:text-3xl "
          variants={childrenSection}
        >
          I am enthusiastic about solving business problems through
          human-centered design. Curious by nature and business-minded.
        </motion.h2>

        {/* Github Button CTA */}
        <motion.a
          target="_blank"
          href="https://github.com/JJ-LXIX"
          variants={childrenSection}
        >
          <button className="bg-transparent  border-2 border-threeColor py-2 px-4 mt-2 text-threeColor text-xl font-semibold rounded  transition-all duration-150 md:py-5 md:px-14 md:text-2xl hover:bg-twoColor/50 hover:scale-110 active:scale-90 ">
            View Github
          </button>
        </motion.a>
      </motion.div>

      {/* Hero Image */}
      <div className=" h-[40vh] w-full  bg-twoColor flex justify-center items-center md:-mt-8 lg:h-[60vh] lg:mt-0">
        <Image src="/hero-image.svg" width="400" height="400" />
      </div>
    </div>
  );
};

export default HeroSection;
