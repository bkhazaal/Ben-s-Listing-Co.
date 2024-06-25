import { Input } from "~/components/ui/input";

export default function Account() {
  return (
    <div className="flex">
      <div className="m-12 w-full rounded-lg border p-6 text-3xl font-bold">
        Account Settings
        <div className="mt-10 grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm">First Name</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Title</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Company Name</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Office Phone</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Home Phone</label>
            <Input></Input>
          </div>
          <div>
            <label className="text-sm">Mobile Phone</label>
            <Input></Input>
          </div>
        </div>
      </div>
    </div>
  );
}
