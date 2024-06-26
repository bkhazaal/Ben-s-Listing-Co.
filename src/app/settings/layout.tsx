"use client";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="m-5 leading-10">
        <h1 className="mb-5 text-3xl font-bold">Settings</h1>
        <div className="grid text-[15px]">
          <Link href="/settings">Account</Link>
          <Link href="/settings/buying">Buying</Link>
          <Link href="/settings/selling">Selling</Link>
          <Link href="/settings/messages">Messages</Link>
          <Link href="/settings/notifications">Notifications</Link>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
