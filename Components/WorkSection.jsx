import React from "react";
import Image from "next/image";

const WorkSection = () => {
  return (
    <div className="bg-oneColor w-full pb-2 pt-5 md:pt-10" id="portfolio__work">
      <h2 className="text-center font-bold text-4xl text-threeColor wavy__line md:text-5xl ">
        My Work
      </h2>
      {/* 1st Project */}
      <div className="mx-2 mt-10 md:ml-14">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl">
          01. Movie & TV Show App{" "}
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg text-center mt-8 md:text-xl">
            An app to check out the Best and Trending Movies and TV shows{" "}
          </h3>

          {/* Website Image */}

          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full ">
            <div className="border-2 border-twoColor h-48 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/JMovies.png"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className=" border-2 border-twoColor h-48 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/JMovies2.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <h3 className="text-md text-threeColor font-semibold md:text-2xl">
            Tech Stack : ReactJS, MovieDB API
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center lg:space-x-10">
            <button className="bg-transparent  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View on Github
            </button>
            <button className="bg-twoColor/50  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View Site
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Project */}
      <div className="mx-2 mt-10 md:ml-14">
        <h2 className="text-threeColor font-bold text-3xl">02. Wordle Clone</h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl">
            A simple word game{" "}
          </h3>
          <h4 className="text-threeColor/30 font-semibold -mt-2 md:text-xl">
            *currently only works on desktop*
          </h4>

          {/* Website Image */}
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            <div className="border-2 border-twoColor h-64 w-64 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/wordleClone.png"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className=" border-2 border-twoColor h-64 w-64 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/wordleClone2.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <h3 className="text-md text-threeColor font-semibold md:text-2xl">
            Tech Stack : ReactJS
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center lg:space-x-10">
            <button className="bg-transparent  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View on Github
            </button>
            <button className="bg-twoColor/50  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View Site
            </button>
          </div>
        </div>
      </div>

      {/* 3nd Project */}
      <div className="mx-2 mt-10 md:ml-14">
        <h2 className="text-threeColor font-bold text-3xl ">
          03. Crypto Tracker
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-l-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl">
            A Currency Tracking Website{" "}
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            {/* Website Image */}
            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/cryptoTracker.png"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/cryptoTracker2.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <h3 className="text-md text-threeColor font-semibold md:text-2xl">
            Tech Stack : ReactJS, MaterialUI, ChartJS, Firebase
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center lg:space-x-10">
            <button className="bg-transparent  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View on Github
            </button>
            <button className="bg-twoColor/50  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View Site
            </button>
          </div>
        </div>
      </div>

      {/* 4th Project */}
      <div className="mx-2 mt-10 md:ml-14">
        <h2 className="text-threeColor font-bold text-3xl">
          04. NFT Project (NOTMYART)
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl">
            An NFT project called NOTMYART{" "}
          </h3>

          {/* Website Image */}
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/nftProject.png"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className=" border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src="/portfolio-work/nftProject2.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <h3 className="text-md text-threeColor font-semibold md:text-2xl">
            Tech Stack : NextJS, Typescript, Sanity CMS, Tailwind, Thirdweb
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center lg:space-x-10">
            <button className="bg-transparent  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View on Github
            </button>
            <button className="bg-twoColor/50  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View Site
            </button>
          </div>
        </div>
      </div>

      {/* 5th Project */}
      <div className="mx-2 mt-10 md:ml-14">
        <h2 className="text-threeColor font-bold text-3xl">
          05. NFT Collection
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl">
            An NFT Collection Website{" "}
          </h3>

          {/* Website Image */}

          <div className="border-2  border-twoColor h-44 w-[19.5rem] my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
            <Image
              src="/portfolio-work/NFTCollection.png"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold md:text-2xl">
            Tech Stack : NextJS, Tailwind, Framer Motion
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center lg:space-x-10">
            <button className="bg-transparent  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View on Github
            </button>
            <button className="bg-twoColor/50  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View Site
            </button>
          </div>
        </div>
      </div>

      {/* 6th Project */}
      <div className="mx-2 mt-10 md:ml-14">
        <h2 className="text-threeColor font-bold text-3xl">
          06. Twitter Clone
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl">
            A single Page Twitter Clone{" "}
          </h3>

          {/* Website Image */}

          <div className="border-2 border-twoColor h-60 w-[19rem] my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
            <Image
              src="/portfolio-work/twitterClone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold md:text-2xl">
            Tech Stack : NextJS, Sanity CMS, Typescript, Tailwind, NextAuth
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center lg:space-x-10">
            <button className="bg-transparent  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View on Github
            </button>
            <button className="bg-twoColor/50  border-2 border-threeColor py-2 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
              View Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
