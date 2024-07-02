import { BicepsFlexed, Slash } from "lucide-react";
import Link from "next/link";
import SignIn from "~/components/signin";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { getServerAuthSession } from "~/server/auth";

export default async function NavBar() {
  const session = await getServerAuthSession();
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
        <Link
          className=""
          href={session ? "/settings/account" : "/settings/signin"}
        >
          Settings
        </Link>
      </div>
      <SignIn />
      <UserAvatar></UserAvatar>
    </div>
  );
}

async function UserAvatar() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {" "}
        <Avatar className="mr-5 scale-110">
          <AvatarImage
            src={session.user?.image || "default-image-url.jpg"}
            alt={session.user?.name || "userpfp"}
          ></AvatarImage>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5">
        <DropdownMenuItem>
          <Link href="/settings/account">Account Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/api/auth/signout">Sign Out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
