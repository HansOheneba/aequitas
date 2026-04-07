import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Program from "@/components/sections/Program";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import SuccessStory from "@/components/sections/SuccessStory";
import AlumniStories from "@/components/sections/AlumniStories";
import EventsPreview from "@/components/sections/EventsPreview";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Program /> */}
      <Impact />
      <AlumniStories />
      <EventsPreview />
      <Testimonials />
      <SuccessStory />
      <Partners />
      <Contact />
    </>
  );
}
