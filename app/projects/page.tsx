'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import { Footer } from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <ScrollShadow hideScrollBar className="w-[90%]">
        <BackToTop />
        <Header activeNav="projects" />
        <HeroSection />
      </ScrollShadow>
      <Footer />
    </>
  );
}
