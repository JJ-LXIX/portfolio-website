import React from "react";
import Image from "next/image";

const WorkSection = () => {
  return (
    <div className="bg-oneColor w-full h-fit">
      <h2 className="text-center font-bold text-4xl text-threeColor">
        My Work
      </h2>
      {/* 1st Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl">
          01. Movie & TV Show App{" "}
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg text-center mt-8">
            An app to check out the Best and Trending Movies and TV shows{" "}
          </h3>

          {/* Website Image */}

          <div className="border-2 border-blue-600 h-48 w-72 my-6 relative ">
            <Image
              src="/portfolio-work/JMovies.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className=" border-2 border-blue-600 h-48 w-72 my-6 relative ">
            <Image
              src="/portfolio-work/JMovies2.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold">
            Tech Stack :
          </h3>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>

      {/* 2nd Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl">02. Wordle Clone</h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8 ">
            A simple word game{" "}
          </h3>
          <h4 className="text-threeColor/30 font-semibold -mt-2">
            *currently only works on desktop*
          </h4>

          {/* Website Image */}

          <div className="border-2 border-green-600 h-64 w-64 my-6 relative ">
            <Image
              src="/portfolio-work/wordleClone.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className=" border-2 border-green-600 h-64 w-64 my-6 relative ">
            <Image
              src="/portfolio-work/wordleClone2.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold">
            Tech Stack :
          </h3>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>

      {/* 3nd Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl ">
          03. Crypto Tracker
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-l-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8">
            A Crypto Tracking Website{" "}
          </h3>

          {/* Website Image */}
          <div className="border-2 border-fourColor h-32 w-64 my-6 relative">
            <Image
              src="/portfolio-work/cryptoTracker.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="scale-down"
            />
          </div>

          <div className="border-2 border-fourColor h-32 w-64 my-6 relative">
            <Image
              src="/portfolio-work/cryptoTracker2.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold">
            Tech Stack :
          </h3>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>

      {/* 4th Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl">
          04. NFT Project (NOTMYART)
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8">
            An NFT project called NOTMYART{" "}
          </h3>

          {/* Website Image */}

          <div className="border-2 border-green-600 h-48 w-[19rem] my-6 relative ">
            <Image
              src="/portfolio-work/nftProject.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className=" border-2 border-green-600 h-36 w-[19rem] my-6 relative ">
            <Image
              src="/portfolio-work/nftProject2.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold">
            Tech Stack :
          </h3>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>

      {/* 5th Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl">
          05. NFT Collection
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8">
            An NFT Collection Website{" "}
          </h3>

          {/* Website Image */}

          <div className="border-2 border-white h-48 w-[19rem] my-6 relative ">
            <Image
              src="/portfolio-work/NFTCollection.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold">
            Tech Stack :
          </h3>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>

      {/* 6th Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl">
          06. Twitter Clone
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-lg mt-8">
            A single Page Twitter Clone{" "}
          </h3>

          {/* Website Image */}

          <div className="border-2 border-blue-600 h-60 w-[19rem] my-6 relative ">
            <Image
              src="/portfolio-work/twitterClone.png"
              width="256"
              height="256"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h3 className="text-md text-threeColor font-semibold">
            Tech Stack :
          </h3>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
