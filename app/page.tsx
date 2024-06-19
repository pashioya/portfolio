'use client';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { useEffect, useState } from 'react';
import useInView from '@/hooks/useInView';

import { Footer } from '@/components/Footer';
import Education from '@/components/Education';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [homeRef, homeRefisInView] = useInView<HTMLDivElement>({ threshold: 0.6 });
  const [aboutMeRef, aboutMeRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [experienceRef, experienceRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [educationRef, educationRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    if (homeRefisInView) {
      setActiveNav('home');
    }
  }, [homeRefisInView]);

  useEffect(() => {
    if (aboutMeRefisInView) {
      setActiveNav('about-me');
    }
  }, [aboutMeRefisInView]);

  useEffect(() => {
    if (experienceRefisInView) {
      setActiveNav('about-me');
    }
  }, [experienceRefisInView]);

  useEffect(() => {
    if (educationRefisInView) {
      setActiveNav('about-me');
    }
  }, [educationRefisInView]);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className=" flex justify-center flex-col items-center overflow-x-hidden">
          <ScrollShadow hideScrollBar className="w-[90%] ">
            <div ref={homeRef} id="home-separator" />
            <BackToTop />
            <Header activeNav={activeNav} />
            <HeroSection />
            <div ref={aboutMeRef} id="about-me-separator" className="my-96" />
            <AboutMe />
            <div ref={experienceRef} id="experience-separator" className="my-96" />
            <Experience />
            <div ref={educationRef} id="education-separator" className="my-96" />
            <Education />
          </ScrollShadow>
        </main>
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
