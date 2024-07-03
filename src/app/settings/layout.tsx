import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="m-5 leading-10">
        <h1 className="mb-5 text-3xl font-bold">Settings</h1>
        <div className="grid text-[15px]">
          <Link href="/settings/account">Account Info</Link>
          <Link href="/settings/update">Update Account</Link>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
