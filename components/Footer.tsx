import { Code } from '@nextui-org/code';
import { PopOverComponent } from './PopOverComponent';
import { Button } from '@nextui-org/button';
import { Github, Rss } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center align-middle items-center p-5 bg-radial-gradient bg-auto leading-4 ">
      <p>
        Built with
        <PopOverComponent
          trigger={<Code color="primary">NextJS</Code>}
          content={
            <div className="p-1">
              <p>Are You Sure You Wanna Go? </p>
              <div className="flex justify-center gap-2">
                <Button color="primary">
                  <Github />
                </Button>
                <Button variant="bordered" color="primary">
                  <Rss />
                </Button>
              </div>
            </div>
          }
        />
        ,
        <PopOverComponent
          trigger={<Code color="primary">NextUI</Code>}
          content={
            <div className="p-1">
              <p>Are You Sure You Wanna Go? </p>
              <div className="flex justify-center gap-2">
                <Button color="primary">
                  <Github />
                </Button>
                <Button variant="bordered" color="primary">
                  <Rss />
                </Button>
              </div>
            </div>
          }
        />
        ,
        <PopOverComponent
          trigger={<Code color="primary">Shadcn/ui</Code>}
          content={
            <div className="p-1">
              <p>Are You Sure You Wanna Go? </p>
              <div className="flex justify-center gap-2">
                <Button color="primary">
                  <Github />
                </Button>
                <Button variant="bordered" color="primary">
                  <Rss />
                </Button>
              </div>
            </div>
          }
        />
      </p>
    </footer>
  );
}
