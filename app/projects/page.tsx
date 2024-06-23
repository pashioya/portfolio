import Header from '@/components/Header';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollShadow hideScrollBar className="w-[90%]">
        <Header activeNav="projects" />
      </ScrollShadow>
      <Footer />
    </>
  );
}
