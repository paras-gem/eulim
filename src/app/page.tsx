import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import University from "@/components/sections/University";
import Registration from "@/components/sections/Registration";
import Gallery from "@/components/sections/Gallery";
import Leaders from "@/components/sections/Leaders";
import Guidelines from "@/components/sections/Guidelines";
import StellarCta from "@/components/sections/StellarCta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <University />
      <Registration />
      <Gallery />
      <Leaders />
      <Guidelines />
      <StellarCta />
      <Contact />
    </>
  );
}
