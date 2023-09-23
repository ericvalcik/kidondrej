"use client";

import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const Navbar: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/tabs/about-me" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/tabs/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Popover>
            <PopoverTrigger>
              <NavigationMenuLink
                className={cn(
                  "text-gray-500 group-hover:text-gray-500 group-hover:bg-white",
                  navigationMenuTriggerStyle(),
                )}
              >
                Shop
              </NavigationMenuLink>
            </PopoverTrigger>
            <PopoverContent side="top">SOON</PopoverContent>
          </Popover>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
