import Head from "next/head";
import AboutMe from "../Components/AboutMe";
import CustomCursor from "../Components/CustomCursor";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import ToolsSkills from "../Components/ToolsSkills";
import WorkSection from "../Components/WorkSection";

export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Jagrath Shetty - Portfolio</title>
        <meta
          name="description"
          content="Jagrath Shetty - Frontend Web Developer"
        />
        <meta property="og:image" content="/hero-section.jpg" />
        <meta name="twitter:image" content="/hero-section.jpg" />
        <meta
          name="google-site-verification"
          content="SsTdWBSa7sjyZ8HHrkZ0Tv9_3iM-wK93naxe5_0HXow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
      <div className="bg-oneColor fixed h-screen w-full -z-10">
        <video
          src="/bg-1.mp4"
          autoPlay
          loop
          muted
          // add "hidden lg:block" back to classname to hide video on mobile
          className=" h-screen w-full fixed  object-cover opacity-25"
        />
      </div>

      <CustomCursor />

      <div>
        {/* navbar */}
        <NavBar />

        {/* Hero Section */}
        <HeroSection />

        {/* Work Section */}
        <WorkSection />

        {/* Tools and Skills Section */}
        <ToolsSkills />

        {/* About Me Section */}
        <AboutMe />
      </div>
    </div>
  );
}
