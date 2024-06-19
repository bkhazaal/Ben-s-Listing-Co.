import { Slash } from "lucide-react";
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
  );
}
