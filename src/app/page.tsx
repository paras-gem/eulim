import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import University from "@/components/sections/University";
import Leaders from "@/components/sections/Leaders";
import Categories from "@/components/sections/Categories";
import Journey from "@/components/sections/Journey";
import Participate from "@/components/sections/Participate";
import Gallery from "@/components/sections/Gallery";
import StellarCta from "@/components/sections/StellarCta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <University />
      <Leaders />
      <Categories />
      <Journey />
      <Participate />
      <Gallery />
      <StellarCta />
      <Contact />
    </>
  );
}
