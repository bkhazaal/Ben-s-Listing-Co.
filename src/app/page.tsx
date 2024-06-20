import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return <main></main>;
}

async function serverThing() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;
  return <></>;
}
