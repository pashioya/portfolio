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
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  activeNav: string;
};

export default function Header({ activeNav }: HeaderProps) {
  const isDesktop = useMediaQuery('(min-width: 642px)');
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        item: [
          'flex',
          'relative',
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
        <NavbarItem isActive={activeNav === 'home'} as={Link} href={'/'}>
          Home
        </NavbarItem>
        <NavbarItem isActive={activeNav === 'projects'} as={Link} href={'/projects'}>
          Projects
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
              <Menu className="text-primary" />
            </SheetTrigger>
            <SheetContent draggable>
              <div className="h-[100%]">
                <nav className="menu h-[96%]">
                  <ul>
                    <Link href="/">
                      <li
                        className={`menu-item text-2xl transform origin-bottom font-bold p-5 cursor-pointer ${activeNav === 'home' ? 'text-primary' : ''}`}
                      >
                        <span color="foreground">Home</span>
                      </li>
                    </Link>
                    <Link href="/projects">
                      <li
                        className={`menu-item text-2xl transform origin-bottom font-bold p-5 cursor-pointer ${activeNav === 'projects' ? 'text-primary' : ''}`}
                      >
                        <span color="foreground">Projects</span>
                      </li>
                    </Link>
                  </ul>
                </nav>
                <div>
                  <ul>
                    <li className="menu-item w-[100%] text-2xl transform  cursor-pointer">
                      <ThemeToggle />
                    </li>
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </NavbarContent>
    </Navbar>
  );
}
