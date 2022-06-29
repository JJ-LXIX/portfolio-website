import Image from "next/image";
import React from "react";

const ToolsSkills = () => {
  return (
    <div className="bg-oneColor -mt-10 pt-14 pb-16" id="tools__skills">
      <h2 className="font-bold text-4xl text-threeColor text-center underline underline-offset-4 decoration-twoColor">
        My Skills and Tools
      </h2>

      <div className="grid grid-cols-2 grid-row-3 mt-8 mx-5 border-2 border-threeColor">
        <div className="col-span-1 row-span-1   w-full h-48 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/html.png"
            width="100"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor">HTML</h3>
        </div>
        <div className="col-span-1 row-span-1 border-l-2 border-threeColor bg-twoColor w-full h-48 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/css.png"
            width="80"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-oneColor">CSS</h3>
        </div>
        <div className="col-span-1 row-span-1 border-t-2 border-threeColor bg-twoColor w-full h-48 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/reactjs.png"
            width="125"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-oneColor ">ReactJS</h3>
        </div>
        <div className="col-span-1 row-span-1 border-t-2 border-l-2 border-threeColor w-full h-48 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/nextjs.png"
            width="100"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor">NextJS</h3>
        </div>
        <div className="col-span-1  row-span-1 border-t-2 border-threeColor w-full h-48 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/tailwind.png"
            width="100"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor">Tailwind CSS</h3>
        </div>
        <div className="col-span-1  row-span-1 border-t-2 border-l-2 border-threeColor bg-twoColor w-full h-48 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/figma.png"
            width="80"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-oneColor">Figma</h3>
        </div>
        <div className=" bg-twoColor border-t-2 border-threeColor col-span-2 h-44 flex flex-col justify-around items-center">
          <Image
            src="/skills_tools/photoshop.png"
            width="170"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-oneColor">Photoshop</h3>
        </div>
      </div>
    </div>
  );
};

export default ToolsSkills;
