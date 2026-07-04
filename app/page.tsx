import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <LandingHero />
      <Hero />
      <Category />
      <About />
      <Featured />
      <Gallery />
      <Marquee />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}