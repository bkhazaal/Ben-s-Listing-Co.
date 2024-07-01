import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInOut() {
  const session = await getServerAuthSession();
  return (
    <main>
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="mr-5 rounded-lg bg-black p-2.5 text-sm text-white hover:bg-black"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </main>
  );
}
