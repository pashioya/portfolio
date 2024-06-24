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
              <div className="items-center justify-center flex flex-col">
                <FaReact size={50} />
                <p>React</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <TbBrandTypescript size={50} />
                <p>TypeScript</p>
              </div>

              <div className="items-center justify-center flex flex-col">
                <SiSolid size={50} />
                <p>Solid</p>
              </div>

              <div className="items-center justify-center flex flex-col">
                <ImHtmlFive2 size={50} />
                <p>Html</p>
              </div>

              <div className="items-center justify-center flex flex-col">
                <RiTailwindCssLine size={50} />
                <p>Tailwind</p>
              </div>

              <div className="items-center justify-center flex flex-col">
                <SiShadcnui size={50} />
                <p>Shadcn/ui</p>
              </div>

              <div className="items-center justify-center flex flex-col">
                <FaAngular size={50} />
                <p>Angular</p>
              </div>
            </ParallaxText>
            <div />
            <Code color="primary" className="text-2xl -rotate-12 mt-4 mb-2 self-start">
              Backend
            </Code>
            <ParallaxText baseVelocity={2}>
              <div className="items-center justify-center flex flex-col">
                <FaJava size={50} />
                <p>Java</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <FaNodeJs size={50} />
                <p>NodeJS</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <FaRust size={50} />
                <p>Rust</p>
              </div>

              <div className="items-center justify-center flex flex-col">
                <SiSpring size={50} />
                <p>Spring</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <AiOutlineDotNet size={50} />
                <p>DotNet</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <SiExpress size={50} />
                <p>ExpressJS</p>
              </div>
            </ParallaxText>
            <div />

            <Code color="primary" className="text-2xl rotate-12 mt-4 mb-2 self-end">
              Devops
            </Code>

            <ParallaxText baseVelocity={-2}>
              <div className="items-center justify-center flex flex-col">
                <TbBrandPython size={50} />
                <p>Python</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <VscAzure size={50} />
                <p>Azure</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <SiGooglecloud size={50} />
                <p>GCloud</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <LiaDocker size={50} />
                <p>Docker</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <DiPostgresql size={50} />
                <p>Postgresql</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <DiMsqlServer size={50} />
                <p>MsSql</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <SiNeo4J size={50} />
                <p>Neo4J</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <TbBrandMongodb size={50} />
                <p>MongoDB</p>
              </div>
            </ParallaxText>
          </div>
        </div>
      </div>
    </div>
  );
}
