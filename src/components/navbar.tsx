"use client";

import { BicepsFlexed, Slash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Account from "./account";

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
        <Link className="" href="/settings">
          Settings
        </Link>
      </div>
      <Account></Account>
    </div>
  );
}
