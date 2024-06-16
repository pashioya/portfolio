import ContactMe from './ContactMe';
import { Button } from '@nextui-org/button';

export default function HeroSection() {
  return (
    <>
      <div className="container py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-2xl">Hey there,</p>
          <div className="mt-5 max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Im a Full-Stack Developer
            </h1>
          </div>
          <div className="mt-5 max-w-3xl">
            <p className="text-xl text-muted-foreground">
              Contact me if you have any project in mind or if you want to work together.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <ContactMe />
            <Button size={'lg'} variant={'faded'}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
