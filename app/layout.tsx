import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
