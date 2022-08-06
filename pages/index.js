import Head from "next/head";
import AboutMe from "../Components/AboutMe";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import ToolsSkills from "../Components/ToolsSkills";
import WorkSection from "../Components/WorkSection";

export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Jagrath Shetty</title>
        <meta
          name="description"
          content="Personal Portfolio - Jagrath Shetty"
        />
        <meta
          name="google-site-verification"
          content="SsTdWBSa7sjyZ8HHrkZ0Tv9_3iM-wK93naxe5_0HXow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
      <div className="bg-oneColor h-screen w-full">
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
