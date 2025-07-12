"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-5">
      <a href="/" className="text-xl font-bold">
        Icon
      </a>

      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-lg font-bold text-fuchsia-600 hover:text-black">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/projects" className="text-lg font-bold text-gray-700 hover:text-black">
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="text-lg font-bold text-gray-700 hover:text-black">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button
      asChild
      className="bg-black text-white hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
    >
      <a href="/contact" aria-label="Chat" className="flex items-center justify-center">
        <ChatBubbleOvalLeftEllipsisIcon style={{ width: 30, height: 30 }} />
      </a>
    </Button>

    </header>
  );
}
