import Image from "next/image";
import { NavigationMenuComponent } from "./NavigationMenuComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full">
      <nav className="flex flex-row justify-between w-full px-20 py-8">
        <h1 className="text-lg font-bold ml-2">Paul Ashioya</h1>
        <div className="flex items-center">
          <Image src="/images/profile.png" alt="logo" width={40} height={40} />
        </div>
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
      </nav>
    </header>
  );
}
