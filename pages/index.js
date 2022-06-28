import Head from "next/head";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import WorkSection from "../Components/WorkSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jagrath Shetty</title>
        <meta
          name="description"
          content="Personal Portfolio - Jagrath Shetty"
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
      </div>
    </div>
  );
}
