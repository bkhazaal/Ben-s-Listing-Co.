import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center max-[700px]:grid">
      <div className="m-5 leading-10 max-[700px]:text-center">
        <h1 className="mb-5 text-3xl font-bold max-[700px]:mb-3 max-[700px]:text-5xl">
          Settings
        </h1>
        <div className="grid text-[15px]">
          <Link href="/settings/account">Account Info</Link>
          <Link href="/settings/update">Update Account</Link>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
