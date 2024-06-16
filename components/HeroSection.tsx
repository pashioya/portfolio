import ContactMe from './ContactMe';
import { Button } from '@nextui-org/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HeroSection() {
  return (
    <div className="flex flex-row items-center pt-28">
      <Avatar className="w-56 h-56">
        <AvatarImage src="/images/profile.png" alt="@shadcn" />
        <AvatarFallback>PA</AvatarFallback>
      </Avatar>
      <div className="container py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-2xl">Hey, I&apos;m</p>
          <div className="mt-5 max-w-2xl">
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
