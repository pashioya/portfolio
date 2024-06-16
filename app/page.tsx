import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="relative flex min-h-screen flex-col items-center">
          {/* Gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex justify-center items-center z-[-1]"
          >
            <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
            <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
          </div>
          {/* End Gradient */}
          <Header />
          <HeroSection />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
