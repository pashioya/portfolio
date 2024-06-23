'use client';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

import { ScrollShadow } from '@nextui-org/scroll-shadow';

import Education from '@/components/Education';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <ScrollShadow hideScrollBar className="w-[90%] h-[100%] ">
      <div id="home-separator" />
      <BackToTop />
      <Header activeNav="home" />
      <HeroSection />
      <div id="about-me-separator" className="my-96" />
      <AboutMe />
      <div id="experience-separator" className="my-96" />
      <Experience />
      <div id="education-separator" className="my-96" />
      <Education />
      <div id="end-separator" className="my-96" />
    </ScrollShadow>
  );
}
