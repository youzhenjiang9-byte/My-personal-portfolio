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

      {/* 首页 */}
      <section id="home">
        <LandingHero />
      </section>

      {/* 品牌标语 */}
      <section id="hero">
        <Hero />
      </section>

      {/* 分类 */}
      <section id="category">
        <Category />
      </section>

      {/* 关于我 */}
      <section id="about">
        <About />
      </section>

      {/* 精选项目 */}
      <section id="featured">
        <Featured />
      </section>

      {/* 图片展示 */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* 滚动文字 */}
      <section id="marquee">
        <Marquee />
      </section>

      {/* 项目 */}
      <section id="works">
        <Works />
      </section>

      {/* 联系 */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}