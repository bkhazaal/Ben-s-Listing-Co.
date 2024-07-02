import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function SignIn() {
  const session = await getServerAuthSession();
  if (session?.user) return null;
  return (
    <main>
      <Link
        href="/api/auth/signin"
        className="mr-5 rounded-lg bg-black p-2.5 text-sm text-white hover:bg-black"
      >
        Sign In
      </Link>
    </main>
  );
}
