import SplashScreen from "@/components/Landing/SplashScreen";
import Hero from "@/components/Landing/Hero";
import Statistics from "@/components/Landing/Statistics";
import Education from "@/components/Landing/Education";
import About from "@/components/Landing/About";
import Gallery from "@/components/Landing/Gallery";
import Footer from "@/components/Landing/Footer";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

    <SplashScreen />

    <Navbar />

    <Hero />

    <Statistics />

    <Education />

    <About />

    <Gallery />

    <Footer />

</main>
  );
}
