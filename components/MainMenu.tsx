'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { NavigationMenuComponent } from './NavigationMenuComponent';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Moon, Sun } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? (
    <div className="flex flex-row">
      <NavigationMenuComponent />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Moon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Sun />
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>some drawer content</DrawerContent>
    </Drawer>
  );
}
