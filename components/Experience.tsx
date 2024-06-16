import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { CheckCircle2Icon, RibbonIcon, Users } from 'lucide-react';

export default function Experience() {
  return (
    <div className="pt-28 w-full" id="Experience">
      <div className="container flex flex-row justify-center gap-10  py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">Discover My</p>
          <div className="mt-1 max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Experience
            </h1>
          </div>
          <div className="mt-24 gap-3 flex justify-center">
            <Card className="col-span-12 sm:col-span-4 h-[300px] w-[50%] justify-around items-center align-middle">
              <CardHeader className="absolute z-10 top-1 flex-col !items-center">
                <h4 className="font-medium text-xl mb-1">Frontend Development</h4>
              </CardHeader>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
              </div>
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px] w-[50%] justify-around items-center align-middle">
              <CardHeader className="absolute z-10 top-1 flex-col !items-center">
                <h4 className=" font-medium textxl mb-1 ">Backend Development</h4>
              </CardHeader>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
                <div className="flex flex-row">
                  <CheckCircle2Icon /> <p>TypeScript</p>
                </div>
              </div>
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
