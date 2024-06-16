import AboutMe from '@/components/AboutMe';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="relative flex min-h-screen flex-col items-center">
          <Header />
          <HeroSection />
          <AboutMe />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
