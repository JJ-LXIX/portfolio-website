import { ChatAlt2Icon, MailIcon } from "@heroicons/react/outline";
import React from "react";

const AboutMe = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center  bg-oneColor pt-5 md:pt-10 lg:pb-[7rem] lg:px-[25rem]"
      id="about__me"
    >
      <h2 className="font-bold text-4xl md:text-5xl text-threeColor  wavy__line">
        About Me
      </h2>

      {/* Card */}
      <div className="w-4/5 h-[25rem] border-2  border-threeColor bg-twoColor/60 mt-[2rem] rounded-2xl  shadow-[10px_10px_15px_-8px_rgba(245,235,255,0.5)] flex flex-col justify-evenly items-center p-3 md:h-[50rem] md:border-4 md:px-8 md:mt-[5rem]">
        <p className="text-threeColor font-semibold text-lg text-center rounded-lg  md:text-3xl">
          I dropped out of law school in my 4th year to pursue my interest in
          coding
        </p>
        <div className="w-full bg-threeColor/40 h-1"></div>
        <h2 className="text-threeColor  font-semibold text-lg text-center rounded-lg  md:text-3xl">
          Things I do for FUN :
          <p className="text-threeColor/80">
            Video Games, Youtube, Podcasts, Football, TV Shows, Movies and
            Music.
          </p>
        </h2>
        <div className="w-full bg-threeColor/40 h-1"></div>
        <h2 className="text-threeColor font-semibold text-lg text-center rounded-lg md:text-3xl">
          Things I want to LEARN :
          <p className="text-threeColor/80">
            Blockchain Development , 3d Art, Music Development, XR Development.
          </p>
        </h2>
      </div>

      {/* Socials */}
      <div className=" mt-6 flex  w-full items-center justify-around  md:mt-6 lg:mt-12">
        {/* Insta */}
        <div className="flex flex-col items-center  w-1/2">
          <ChatAlt2Icon className="text-threeColor h-4 md:h-6" />
          <h3 className="text-base font-semibold text-threeColor/90 underline md:text-3xl">
            Instagram
          </h3>
          <p className="text-sm text-threeColor/60 md:text-2xl">
            @jagrath_shetty_
          </p>
        </div>
        {/* Email */}
        <div className="flex flex-col items-center  w-1/2 -ml-10">
          <MailIcon className="text-threeColor h-4 md:h-6 " />
          <h3 className="text-base font-semibold text-threeColor/90 underline md:text-3xl">
            Email
          </h3>
          <p className="text-sm text-threeColor/60 md:text-2xl">
            jagrathshettylxix@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
