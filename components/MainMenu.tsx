'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { NavigationMenuComponent } from './NavigationMenuComponent';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Circle, Menu, Moon, Sun } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Separator } from '@radix-ui/react-dropdown-menu';

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? (
    <div className="flex flex-row ">
      <NavigationMenuComponent />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Moon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem className="items-center justify-center">
              <Moon />
            </DropdownMenuItem>
            <DropdownMenuItem className="items-center justify-center">
              <Sun />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-sm text-muted text-center">Accent</DropdownMenuLabel>
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
