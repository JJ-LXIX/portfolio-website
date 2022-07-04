import Image from "next/image";
import React from "react";

const ToolsSkills = () => {
  return (
    <div
      className="bg-oneColor pt-5 pb-10  md:pb-14 lg:px-[27.5rem]  lg:pb-0"
      id="tools__skills"
    >
      <h2 className="font-bold text-4xl text-threeColor text-center wavy__line md:text-5xl">
        Skills and Tools
      </h2>

      <div className="grid grid-cols-2 grid-row-3 mt-8 mx-5 border-2 border-threeColor md:mt-14 md:mx-8">
        <div className="col-span-1 row-span-1 w-full h-48  flex flex-col justify-around items-center md:h-60 lg:h-44">
          <Image
            src="/skills_tools/html.png"
            width="100"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl">
            HTML
          </h3>
        </div>
        <div className="col-span-1 row-span-1 border-l-2 border-threeColor bg-twoColor/60 w-full h-48 flex flex-col justify-around items-center md:h-60 lg:h-44">
          <Image
            src="/skills_tools/css.png"
            width="80"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl">CSS</h3>
        </div>
        <div className="col-span-1 row-span-1 border-t-2 border-threeColor bg-twoColor/60 w-full h-48 flex flex-col justify-around items-center md:h-60 lg:h-44">
          <Image
            src="/skills_tools/reactjs.png"
            width="125"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl ">
            ReactJS
          </h3>
        </div>
        <div className="col-span-1 row-span-1 border-t-2 border-l-2 border-threeColor w-full h-48 flex flex-col justify-around items-center md:h-60 lg:h-44">
          <Image
            src="/skills_tools/nextjs.png"
            width="100"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl">
            NextJS
          </h3>
        </div>
        <div className="col-span-1 row-span-1 border-t-2 border-threeColor w-full h-48 flex flex-col justify-around items-center md:h-60 lg:h-44">
          <Image
            src="/skills_tools/tailwind.png"
            width="100"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl">
            Tailwind CSS
          </h3>
        </div>
        <div className="col-span-1 row-span-1 border-t-2 border-l-2 border-threeColor bg-twoColor/60 w-full h-48 flex flex-col justify-around items-center md:h-60 lg:h-44">
          <Image
            src="/skills_tools/figma.png"
            width="80"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl">
            Figma
          </h3>
        </div>
        <div className=" bg-twoColor/60 border-t-2 border-threeColor col-span-2 h-44 flex flex-col justify-around items-center md:h-48">
          <Image
            src="/skills_tools/photoshop.png"
            width="170"
            height="100"
            layout="intrinsic"
          />
          <h3 className="font-bold text-xl text-threeColor md:text-3xl">
            Photoshop
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ToolsSkills;
