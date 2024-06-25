import Link from "next/link";
import { Avatar, AvatarFallback } from "src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

export default function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-5 scale-125 focus:outline-none">
        <Avatar className=" bg-slate-100">
          <AvatarFallback className="font-semibold">BK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="font-semibold">
          <Link href="/settings">My Account</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
