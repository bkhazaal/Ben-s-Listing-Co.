import { Slash } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "src/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "src/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col text-black">
      <div className="navbar-container flex h-[65px] w-full items-center justify-between gap-12">
        <Breadcrumb className="pl-2">
          <BreadcrumbList>
            <BreadcrumbItem className="gap-3">
              <BreadcrumbPage className="font-extrabold">Home</BreadcrumbPage>
            </BreadcrumbItem>
            <Slash className="scale-75 " />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Listings</BreadcrumbLink>
            </BreadcrumbItem>
            <Slash className="scale-75 " />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Settings</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DropdownMenu>
          <DropdownMenuTrigger className="pr-2 focus:outline-none">
            <Avatar className="scale-100 bg-slate-100">
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
    </div>
  );
}
