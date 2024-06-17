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
import JobHistory from '@/components/JobHistory';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [homeRef, homeRefisInView] = useInView<HTMLDivElement>({ threshold: 0.6 });
  const [aboutMeRef, aboutMeRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [experienceRef, experienceRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [educationRef, educationRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [jobHistoryRef, jobHistoryRefisInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

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

  useEffect(() => {
    if (jobHistoryRefisInView) {
      setActiveNav('about-me');
    }
  }, [jobHistoryRefisInView]);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="relative flex min-h-screen justify-center flex-col items-center overflow-x-hidden">
          <ScrollShadow size={100} visibility="bottom" hideScrollBar className="w-screen h-screen">
            <Header activeNav={activeNav} />
            <div ref={homeRef} id="home-separator" className="my-96" />
            <HeroSection />
            <div ref={aboutMeRef} id="about-me-separator" className="my-96" />
            <AboutMe />

            <div ref={experienceRef} id="experience-separator" className="my-96" />
            <Experience />
            <div ref={educationRef} id="education-separator" className="my-96" />
            <Education />
            <div ref={jobHistoryRef} id="job-history-separator" className="my-96" />
            <JobHistory />
          </ScrollShadow>
        </main>
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
