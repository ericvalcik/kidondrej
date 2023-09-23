"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[35vh] gap-8">
      <div className="flex gap-8 items-center">
        <Avatar>
          <AvatarImage src="/logocircle.png" alt="@shadcn" />
          <AvatarFallback>KO</AvatarFallback>
        </Avatar>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          kidOndrej
        </h2>
      </div>
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
    </main>
  );
}
