import { Avatar, AvatarFallback } from "src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { DialogTrigger } from "./ui/dialog";

export default function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-5 scale-125 focus:outline-none">
        <Avatar className=" bg-slate-100">
          <AvatarFallback className="font-semibold">BK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DialogTrigger>
          <DropdownMenuItem className="font-semibold">
            My Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
