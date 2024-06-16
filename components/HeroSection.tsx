'use client';
import ContactMe from './ContactMe';
import { Button } from '@nextui-org/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect } from 'react';
import useInView from '@/hooks/useInView';

export default function HeroSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      console.log('Element is in view');
    } else {
      console.log('Element is out of view');
    }
  }, [isInView]);

  return (
    <div className="pt-28 w-full" id="home">
      <div className="container flex flex-row justify-center gap-10  py-10 lg:py-16">
        <Avatar className="w-60 h-64">
          <AvatarImage src="/images/other-dark-portrait.jpeg" alt="profile" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
        <div className=" text-center">
          <p ref={ref} className="text-2xl">
            Hey, I&apos;m
          </p>
          <div className="mt-2 max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Paul Ashioya
            </h1>
          </div>
          <div className="mt-5 max-w-3xl">
            <p className="text-xl text-muted-foreground">Full-Stack Developer </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <ContactMe />
            <Button size={'lg'} variant={'faded'}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
