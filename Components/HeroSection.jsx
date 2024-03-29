import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { SpaceModel } from "./SpaceModel";

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.innerWidth < 1024 ? setIsSmallScreen(true) : setIsSmallScreen(false);
  });

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
          className="-space-y-1 md:space-y-0"
          variants={childrenSection}
        >
          <h2 className="text-twoColor font-bold text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl">
            Hi there! I'm
          </h2>
          <h1 className="text-threeColor font-bold text-4xl md:text-5xl  lg:text-6xl 3xl:text-7xl">
            Jagrath Shetty,
          </h1>
          <h2 className="text-twoColor font-bold text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl">
            Frontend Developer.
          </h2>
        </motion.div>

        <motion.h2
          className="text-threeColor/90 text-lg font-semibold md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl pr-1 2xl:max-w-[45rem]"
          variants={childrenSection}
        >
          I am enthusiastic about solving business problems through
          human-centered design.
        </motion.h2>

        {/* Github Button CTA */}
        <motion.a
          target="_blank"
          href="https://github.com/JJ-LXIX"
          variants={childrenSection}
          rel="noreferrer"
        >
          <button className="bg-transparent  border-2 border-threeColor py-2 px-4 mt-2 text-threeColor text-xl font-semibold rounded  transition-all duration-150 md:py-5 md:px-14 md:text-2xl hover:bg-twoColor/50 hover:scale-110 active:scale-90 hover:cursor-none">
            View Github
          </button>
        </motion.a>
      </motion.div>

      {/* Hero Image */}
      <div className=" h-[40vh] relative w-full lg:w-2/3 xl:w-full border-2 bg-purple-600 lg:bg-transparent border-threeColor flex justify-center items-center  lg:h-[60vh] ">
        {isSmallScreen ? (
          <Image
            src="/hero-image.svg"
            layout="fill"
            objectFit="contain"
            alt="image of a cartoon character saying hello"
            priority
          />
        ) : (
          <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <PresentationControls
              global
              config={{ mass: 3, tension: 500 }}
              snap={{ mass: 3, tension: 400 }}
              polar={[0, Math.PI / 3]}
              azimuth={[-Math.PI / 10, Math.PI / 2]}
            >
              <SpaceModel
                rotation={[Math.PI / 2, 0, 0]}
                position={[-0.2, 0.4, -3]}
              />
            </PresentationControls>
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
