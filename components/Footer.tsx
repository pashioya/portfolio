import { Code } from '@nextui-org/code';
import { PopOverComponent } from './PopOverComponent';
import { Button } from '@nextui-org/button';
import { TbBrandNextjs } from 'react-icons/tb';
import Link from 'next/link';
import { SiNextui, SiShadcnui } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center align-middle items-center p-5 bg-radial-gradient bg-auto leading-4 bg-radial-gradient bg-transparent">
      <p>
        Built with
        <PopOverComponent
          trigger={<Code color="primary">NextJS</Code>}
          content={
            <div className="p-1 items-center flex flex-col gap-4">
              <TbBrandNextjs size={40} className="text-primary" />
              <div className="flex justify-center gap-2">
                <Button variant="bordered" color="primary" as={Link} href="https://nextjs.org/">
                  NextJS
                </Button>
              </div>
            </div>
          }
        />
        , {` `}
        <PopOverComponent
          trigger={<Code color="primary">NextUI</Code>}
          content={
            <div className="p-1 items-center flex flex-col gap-4">
              <SiNextui size={40} className="text-primary" />
              <div className="flex justify-center gap-2">
                <Button variant="bordered" color="primary" as={Link} href="https://nextui.org/">
                  NextUI
                </Button>
              </div>
            </div>
          }
        />
        , {` `}
        <PopOverComponent
          trigger={<Code color="primary">Shadcn/ui</Code>}
          content={
            <div className="p-1 items-center flex flex-col gap-4">
              <SiShadcnui className="text-primary" size={40} />
              <div className="flex justify-center gap-2">
                <Button variant="bordered" color="primary" as={Link} href="https://ui.shadcn.com">
                  Shadcn/ui
                </Button>
              </div>
            </div>
          }
        />
      </p>
    </footer>
  );
}
