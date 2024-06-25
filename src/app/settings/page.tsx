import Link from "next/link";

export default function Page() {
  return (
    <div className="flex">
      <div className="m-5 leading-10">
        <h1 className="mb-5 text-3xl font-bold">Settings</h1>
        <div className="grid text-[15px] text-slate-400">
          <Link href="settings">Account</Link>
          <Link href="settings">Buying</Link>
          <Link href="settings">Selling</Link>
          <Link href="settings">Messages</Link>
          <Link href="settings">Notifications</Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
