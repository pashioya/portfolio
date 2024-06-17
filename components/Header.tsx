'use client';
import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Menu, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

type HeaderProps = {
  activeNav: string;
};

export default function Header({ activeNav }: HeaderProps) {
  const isDesktop = useMediaQuery('(min-width: 642px)');
  const { theme, setTheme } = useTheme();

  function scrollToHome() {
    const e = document.getElementById('home');
    e?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center',
    });
  }

  function scrollToAboutMe() {
    const e = document.getElementById('about-me');
    e?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center',
    });
  }

  return (
    <Navbar
      shouldHideOnScroll
      position="static"
      classNames={{
        item: [
          'flex',
          'relative',
          'z-[100]',
          'top-0',
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
        <NavbarItem isActive={activeNav === 'home'}>
          <Link color="foreground" href="#" onClick={() => scrollToHome()}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeNav === 'about-me'}>
          <Link href="#" aria-current="page" onClick={() => scrollToAboutMe()}>
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
                <DropdownMenuItem
                  onMouseUp={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="items-center justify-center"
                >
                  {theme === 'dark' ? <Sun /> : <Moon />}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent></SheetContent>
          </Sheet>
        )}
      </NavbarContent>
    </Navbar>
  );
}
