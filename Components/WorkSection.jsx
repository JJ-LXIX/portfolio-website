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
        <h2 className="text-threeColor font-bold text-3xl">01. Wordle Clone</h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-xl mt-8">
            A simple word game{" "}
          </h3>
          <h4 className="text-threeColor/30 font-semibold -mt-2">
            *currently only works on desktop*
          </h4>

          {/* Website Image */}
          <div className="bg-orange-200 h-64 w-64 my-6">{/* <Image /> */}</div>

          {/* CTA Github Repo */}
          <button className="bg-threeColor/20  border-2 border-threeColor py-2 px-6 mt-2 mb-8 text-threeColor text-2xl font-semibold active:scale-95 transition-all duration-150">
            View on Github
          </button>
        </div>
      </div>

      {/* 2nd Project */}
      <div className="mx-2 mt-10">
        <h2 className="text-threeColor font-bold text-3xl ">
          02. Crypto Tracker
        </h2>

        {/* inner text */}
        <div className="w-[90%] border-l-2 border-r-2 border-l-threeColor flex flex-col items-center my-6 mb-10 mx-4 ">
          <h3 className="text-threeColor font-semibold text-xl mt-8">
            A Crypto Tracking Website{" "}
          </h3>

          {/* Website Image */}
          <div className="bg-orange-200 h-64 w-64 my-6">{/* <Image /> */}</div>

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
