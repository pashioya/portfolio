import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { RibbonIcon, Users } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="pt-28 w-full" id="about-me">
      <div className="container flex flex-row justify-center gap-10  py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">Learn More</p>
          <div className="mt-1 max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              About Me
            </h1>
          </div>
          <div className="mt-24 gap-3 flex justify-center">
            <Card isPressable className="col-span-12 w-[50%] sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <h4 className="text-white font-medium text-2xl mb-1">Experience</h4>
                <p className="text-tiny text-muted-foreground uppercase">
                  2+ Year Software Development
                </p>
                <Users size={24} color="white" />
              </CardHeader>
              <Image
                removeWrapper
                isBlurred
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Card>
            <Card isPressable className="col-span-12 w-[50%] sm:col-span-4 h-[300px]">
              <CardHeader className="absolute  z-10 top-1 flex-col  !items-start">
                <h4 className="text-white font-medium text-2xl mb-1">Education</h4>
                <p className="text-tiny text-muted-foreground uppercase">IB Graduate</p>
                <p className="text-tiny text-muted-foreground uppercase">Computer Science Degree</p>
                <RibbonIcon size={24} color="white" />
              </CardHeader>
              <Image
                removeWrapper
                isBlurred
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1590176028506-b8324faaa8bf?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Card>
          </div>
          <p className="pt-12 text-muted-foreground text-xl">
            Eiusmod sunt fugiat veniam officia sint labore et ullamco laboris cillum. Dolor velit
            dolor consectetur reprehenderit id ut esse aute dolor nisi excepteur enim elit
            adipisicing. Consequat occaecat amet do cillum nulla. Nostrud consequat dolor velit
            reprehenderit esse do laboris enim. Mollit amet sunt cillum nulla elit.
          </p>
        </div>
      </div>
    </div>
  );
}
