import React from "react";
import Image from "next/image";
import JMovies1 from "../public/portfolio-work/JMovies.png";
import JMovies2 from "../public/portfolio-work/JMovies2.png";
import WorldClone from "../public/portfolio-work/wordleClone.png";
import WorldClone2 from "../public/portfolio-work/wordleClone2.png";
import CryptoTracker from "../public/portfolio-work/cryptoTracker.png";
import CryptoTracker2 from "../public/portfolio-work/cryptoTracker2.png";
import NFTProject from "../public/portfolio-work/nftProject.png";
import NFTProject2 from "../public/portfolio-work/nftProject2.png";
import NFTCollection from "../public/portfolio-work/NFTcollection.png";
import ShoeImage from "../public/portfolio-work/shoe.png";
import Jwitter from "../public/portfolio-work/jwitter.jpg";
import Jwitter2 from "../public/portfolio-work/jwitter2.jpg";
import DentalWebsite1 from "../public/portfolio-work/dental1.png";
import DentalWebsite2 from "../public/portfolio-work/dental2.png";

const WorkSection = () => {
  return (
    <div className=" w-full pb-2 pt-5 md:pt-10 z-50" id="portfolio__work">
      <h2 className="text-center font-bold text-4xl text-threeColor wavy__line md:text-5xl ">
        My Work
      </h2>
      {/* 1st Project */}
      <div className=" w-full mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10">
          <span className="text-5xl md:text-7xl font-light">01.</span> Movie &
          TV Show App{" "}
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
                src={JMovies1}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Movie app demo that I made"
              />
            </div>

            <div className=" border-2 border-twoColor h-48 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={JMovies2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Movie app demo that I made"
              />
            </div>
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center">
            Tech Stack : ReactJS, MovieDB API
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col  space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JJ-LXIX/react-movie-app"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a
              href="https://jmovies-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 2nd Project */}
      <div className=" w-full mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10">
          <span className="text-5xl md:text-7xl font-light">02.</span> Twitter
          Clone App
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg text-center mt-8 md:text-xl">
            A clone app of twitter{" "}
          </h3>

          {/* Website Image */}

          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full ">
            <div className="border-2 border-twoColor h-48 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={Jwitter}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Twitter Clone app demo that I made"
              />
            </div>

            <div className=" border-2 border-twoColor h-48 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={Jwitter2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Twitter Clone app demo that I made"
              />
            </div>
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center">
            Tech Stack : NextJS, Tailwind, Typescript, SWR, Zustand,
            React-Dropzone
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col  space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JJ-LXIX/jwitter"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a
              href="https://lxix-jwitter.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 3rd Project */}
      <div className="mx-2 mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10 ">
          <span className="text-5xl md:text-7xl font-light">03.</span> Dentist
          Website
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-l-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl text-center">
            A simple website for a Dentist{" "}
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            {/* Website Image */}
            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={DentalWebsite1}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of a Dental Website that I made"
              />
            </div>

            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={DentalWebsite2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of a Dental Website that I made"
              />
            </div>
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center ">
            Tech Stack : NextJS, Framer Motion, Tailwind, ShadcnUI
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JJ-LXIX/dental-client-site"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a
              href="https://dental-client-site.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 4th Project */}
      <div className="mx-2 mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10">
          <span className="text-5xl md:text-7xl font-light">04.</span> Wordle
          Clone
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl text-center">
            A simple word game{" "}
          </h3>
          <h4 className="text-threeColor/80 font-semibold -mt-2 md:text-xl">
            *currently only works on desktop*
          </h4>

          {/* Website Image */}
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            <div className="border-2 border-twoColor h-64 w-64 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={WorldClone}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Wordle app clone that I made"
              />
            </div>

            <div className=" border-2 border-twoColor h-64 w-64 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={WorldClone2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Wordle app clone that I made"
              />
            </div>
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center">
            Tech Stack : ReactJS
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JJ-LXIX/wordle-clone"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View On Github
              </button>
            </a>
            <a
              href="https://wordle-test-clone-site.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 5th Project */}
      <div className="mx-2 mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10 ">
          <span className="text-5xl md:text-7xl font-light">05.</span> Crypto
          Tracker
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-l-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl text-center">
            A Currency Tracking Website{" "}
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            {/* Website Image */}
            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={CryptoTracker}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Crypto Price Tracker that I made"
              />
            </div>

            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={CryptoTracker2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of Crypto Price Tracker that I made"
              />
            </div>
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center ">
            Tech Stack : ReactJS, MaterialUI, ChartJS, Firebase
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JJ-LXIX/Crypto_tracker"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a
              href="https://crypto-tracker-test-site.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 6th Project */}
      <div className="mx-2 mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10 ">
          <span className="text-5xl md:text-7xl font-light">06.</span> NFT
          Project (NOTMYART)
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl text-center">
            An NFT project called NOTMYART{" "}
          </h3>

          {/* Website Image */}
          <div className="flex flex-col lg:flex-row lg:justify-around lg:w-full">
            <div className="border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={NFTProject}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of NFT Minting Project that I made"
              />
            </div>

            <div className=" border-2 border-twoColor h-44 w-72 my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
              <Image
                src={NFTProject2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt="Screenshot of NFT Minting Project that I made"
              />
            </div>
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center">
            Tech Stack : NextJS, Typescript, Sanity CMS, Tailwind, Thirdweb
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JJ-LXIX/NFT_Project_Test"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a
              href="https://nft-project-test.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 6th Project */}
      {/* <div className="mx-2 mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10 ">
          <span className="text-5xl md:text-7xl font-light">06.</span> NFT
          Collection
        </h2> */}

      {/* inner text */}
      {/* <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl text-center">
            An NFT Collection Website (PC ONLY NOT ON MOBILE)
          </h3> */}

      {/* Website Image */}

      {/* <div className="border-2  border-twoColor h-44 w-[19.5rem] my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
            <Image
              src={NFTCollection}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              alt="Screenshot of NFT Collection website that I made"
            />
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center">
            Tech Stack : NextJS, Tailwind, Framer Motion
          </h3> */}

      {/* CTA Buttons*/}
      {/* <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              href="https://github.com/JJ-LXIX/front-end-practice-sites"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a
              href="https://nft-collection-test-site.vercel.app/"
              target="_blank"
            >
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div> */}

      {/* 7th Project */}
      <div className="mx-2 mt-10 flex flex-col items-center">
        <h2 className="text-threeColor font-bold text-3xl md:text-4xl self-start pl-10">
          <span className="text-5xl md:text-7xl font-light">07.</span>{" "}
          Interactive Shoe Color Selector
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 md:text-2xl text-center">
            An Interactive Shoe Card where the User can Change the Colors
          </h3>

          {/* Website Image */}

          <div className="border-2  border-twoColor h-44 w-[19.5rem] my-6 relative md:h-80 md:w-[35rem] lg:h-[30rem] lg:w-[50rem]">
            <Image
              src={ShoeImage}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              alt="Screenshot of a website of an interactive shoe"
            />
          </div>

          <h3 className="text-sm text-threeColor font-semibold md:text-2xl text-center">
            Tech Stack : NextJS, Tailwind, Typescript , React Three Fiber.
          </h3>

          {/* CTA Buttons*/}
          <div className="flex mt-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center lg:space-x-10">
            <a
              target="_blank"
              href="https://github.com/JJ-LXIX/react-three-fiber-shoe"
            >
              <button className="bg-transparent  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64  text-threeColor text-2xl font-semibold  hover:cursor-none lg:hover:scale-110 active:scale-95 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View on Github
              </button>
            </a>
            <a href="https://r3f-shoe-test.vercel.app/" target="_blank">
              <button className="bg-twoColor/50  border-2 border-threeColor  w-60  py-3 px-6 lg:py-4 lg:w-64 md:px-14 text-threeColor text-2xl font-semibold hover:cursor-none lg:hover:scale-110  active:scale-90 lg:active:scale-90 transition-all duration-100 lg:duration-200">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
