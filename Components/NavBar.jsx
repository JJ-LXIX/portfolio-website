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
    <div className="bg-twoColor h-14 w-full  border-2 border-fourColor fixed bottom-0 z-50 flex justify-around items-center py-6">
      {/* 1st */}
      <Link href="#top__of__page">
        <div className="flex flex-col items-center">
          <ChevronDoubleUpIcon className="text-oneColor/90 h-5" />
          <p className="text-oneColor/90 text-sm font-bold">Back to Top</p>
        </div>
      </Link>
      {/* 2nd */}
      <Link href="#portfolio__work">
        <div className="flex flex-col items-center">
          <BriefcaseIcon className="text-oneColor/90 h-5" />
          <p className="text-oneColor/90 text-sm font-bold">Work</p>
        </div>
      </Link>
      {/* 3rd */}
      <Link href="#tools__skills">
        <div className="flex flex-col items-center">
          <TerminalIcon className="text-oneColor/90 h-5" />
          <p className="text-oneColor/90 text-sm font-bold">Skills/Tools</p>
        </div>
      </Link>
      {/* 4th */}
      <Link href="#about__me">
        <div className="flex flex-col items-center">
          <UserIcon className="text-oneColor/90 h-5" />
          <p className="text-oneColor/90 text-sm font-bold">About</p>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
