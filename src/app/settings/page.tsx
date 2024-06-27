import "src/styles/globals.css";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Account() {
  return (
    <div className="flex">
      <div className="m-12 w-full rounded-lg border p-6 text-3xl font-bold">
        Account Settings
        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
          <div>
            <label className="text-sm font-normal">First Name</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Last Name</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Email</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Title</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Company Name</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Office Phone</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Home Phone</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
          <div>
            <label className="text-sm font-normal">Mobile Phone</label>
            <Input className="focus:outline-slate-300"></Input>
          </div>
        </div>
        <div className="mt-5">
          <Button className=" bg-black hover:bg-black">Save</Button>
        </div>
      </div>
    </div>
  );
}
