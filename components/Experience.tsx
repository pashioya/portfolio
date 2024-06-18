import ParallaxText from './ParallaxText';
import { FaReact, FaNodeJs, FaRust, FaAngular } from 'react-icons/fa';
import { SiSolid, SiShadcnui, SiSpring, SiExpress, SiGooglecloud, SiNeo4J } from 'react-icons/si';
import { TbBrandTypescript, TbBrandPython, TbBrandMongodb } from 'react-icons/tb';
import { ImHtmlFive2 } from 'react-icons/im';
import { RiTailwindCssLine } from 'react-icons/ri';
import { FaJava } from 'react-icons/fa6';
import { AiOutlineDotNet } from 'react-icons/ai';

import { VscAzure } from 'react-icons/vsc';

import { LiaDocker } from 'react-icons/lia';
import { DiPostgresql, DiMsqlServer } from 'react-icons/di';
import { Code } from '@nextui-org/code';

export default function Experience() {
  return (
    <div className="pt-28 w-full" id="Experience">
      <div className="container flex flex-row justify-center gap-10  py-10 lg:py-16">
        <div className="w-[90%] text-center items-center justify-center mx-auto">
          <p className="text-xl text-muted-foreground">Discover My</p>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            Experience
          </h1>

          <div className="mt-24 gap-3 flex justify-center flex-col items-center ">
            <Code color="primary" className="text-2xl rotate-12 mt-4 mb-2 self-end">
              Frontend
            </Code>
            <ParallaxText baseVelocity={-2}>
              <FaReact size={50} />
              <TbBrandTypescript size={50} />
              <SiSolid size={50} />
              <ImHtmlFive2 size={50} />
              <RiTailwindCssLine size={50} />
              <SiShadcnui size={50} />
              <FaAngular size={50} />
            </ParallaxText>
            <div />
            <Code color="primary" className="text-2xl -rotate-12 mt-4 mb-2 self-start">
              Backend
            </Code>
            <ParallaxText baseVelocity={2}>
              <FaJava size={50} />
              <FaNodeJs size={50} />
              <FaRust size={50} />
              <SiSpring size={50} />
              <AiOutlineDotNet size={50} />
              <SiExpress size={50} />
            </ParallaxText>
            <div />

            <Code color="primary" className="text-2xl rotate-12 mt-4 mb-2 self-end">
              Devops
            </Code>

            <ParallaxText baseVelocity={-2}>
              <TbBrandPython size={50} />
              <VscAzure size={50} />
              <SiGooglecloud size={50} />
              <LiaDocker size={50} />
              <DiPostgresql size={50} />
              <DiMsqlServer size={50} />
              <SiNeo4J size={50} />
              <TbBrandMongodb size={50} />
            </ParallaxText>
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
