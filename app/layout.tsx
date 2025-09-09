import type { Metadata } from 'next';
import './globals.css';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Footer } from '@/components/Footer';
import RenovationNotice from '@/components/RenovationNotice';

export const metadata: Metadata = {
  title: 'Paul Ashioya',
  description: 'Portfolio of Paul Ashioya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <main className=" flex w-screen h-[100%] justify-center flex-col items-center overflow-visible">
              {children}
            </main>
            <RenovationNotice />
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
