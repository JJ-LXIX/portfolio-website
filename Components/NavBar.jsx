import React from "react";
import Link from "next/link";
import {
  ChevronDoubleUpIcon,
  BriefcaseIcon,
  TerminalIcon,
  UserIcon,
} from "@heroicons/react/outline";

const NavBar = () => {
  return (
    <div className="bg-twoColor h-14 w-full  border-t-2   border-threeColor fixed bottom-0 z-50 flex justify-around items-center py-7 md:py-10">
      {/* 1st */}
      <Link href="#top__of__page">
        <div className="flex flex-col items-center hover:cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200">
          <ChevronDoubleUpIcon className="text-threeColor h-5" />
          <p className="text-threeColor text-sm font-bold md:text-lg">
            Back to Top
          </p>
        </div>
      </Link>
      {/* 2nd */}
      <Link href="#portfolio__work">
        <div className="flex flex-col items-center hover:cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200">
          <BriefcaseIcon className="text-threeColor h-5" />
          <p className="text-threeColor text-sm font-bold md:text-lg">Work</p>
        </div>
      </Link>
      {/* 3rd */}
      <Link href="#tools__skills">
        <div className="flex flex-col items-center hover:cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200">
          <TerminalIcon className="text-threeColor h-5" />
          <p className="text-threeColor text-sm font-bold md:text-lg">
            Skills/Tools
          </p>
        </div>
      </Link>
      {/* 4th */}
      <Link href="#about__me">
        <div className="flex flex-col items-center hover:cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200">
          <UserIcon className="text-threeColor h-5" />
          <p className="text-threeColor text-sm font-bold md:text-lg">About</p>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
