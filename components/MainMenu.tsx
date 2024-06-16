'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { NavigationMenuComponent } from './NavigationMenuComponent';

import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? (
    <div className="flex flex-row ">
      <NavigationMenuComponent />
    </div>
  ) : (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-center w-full">Style</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
