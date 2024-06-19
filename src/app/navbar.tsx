import { BicepsFlexed, Slash } from "lucide-react";
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

export default async function NavBar() {
  return (
    <div className="flex h-[65px] w-full items-center justify-between gap-12 border-b-2">
      <Breadcrumb className="ml-5">
        <BreadcrumbList>
          <BicepsFlexed className="stroke-black" />
          <BreadcrumbItem className="gap-3">
            <BreadcrumbPage className="font-extrabold">Home</BreadcrumbPage>
          </BreadcrumbItem>
          <Slash className="scale-75 stroke-black" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Listings</BreadcrumbLink>
          </BreadcrumbItem>
          <Slash className="scale-75 stroke-black" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Settings</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-5 scale-125 focus:outline-none">
          <Avatar className=" bg-slate-100">
            <AvatarFallback className="font-semibold">BK</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
