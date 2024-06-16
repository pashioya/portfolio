'use client';
import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Circle, Menu, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

export default function Header() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarBrand className="gap-2">
        <Image src="/images/profile.png" alt="logo" width={40} height={40} />
        <p className="font-bold text-inherit">Paul Ashioya</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isDesktop ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="p-1">
              {theme === 'dark' ? <Moon /> : <Sun />}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem className="items-center justify-center">
                  <Moon onMouseUp={() => setTheme('dark')} />
                </DropdownMenuItem>
                <DropdownMenuItem className="items-center justify-center">
                  <Sun onMouseUp={() => setTheme('light')} />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-sm text-muted text-center">
                Accent
              </DropdownMenuLabel>
              <DropdownMenuItem className="items-center justify-center">
                <Circle color="slate" fill="slate" />
              </DropdownMenuItem>
              <DropdownMenuItem className="items-center justify-center">
                <Circle color="red" fill="red" />
              </DropdownMenuItem>
              <DropdownMenuItem className="items-center justify-center">
                <Circle color="blue" fill="blue" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-center w-full">Style</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetContent>
          </Sheet>
        )}
      </NavbarContent>
    </Navbar>
  );
}
