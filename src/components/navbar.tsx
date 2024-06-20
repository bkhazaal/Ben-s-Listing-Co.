"use client";

import { BicepsFlexed, Slash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div
      className="flex h-[65px] w-full items-center justify-between gap-12 border-b-[1px]
    border-[#e0e0e0]"
    >
      {" "}
      <div className="ml-5 flex gap-3">
        <BicepsFlexed className="stroke-black" />
        <Link href="/" className="">
          Home
        </Link>
        <Slash className="scale-75 stroke-black" />
        <Link className="" href="/listings">
          Listings
        </Link>
        <Slash className="scale-75 stroke-black" />
        <Link className="" href="/">
          Settings
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-5 scale-125 focus:outline-none">
          <Avatar className=" bg-slate-100">
            <AvatarFallback className="font-semibold">BK</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="font-semibold">
            My Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
