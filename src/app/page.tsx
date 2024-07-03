import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session?.user)
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Welcome
          <br />
          {session.user?.name}
        </h1>
      </main>
    );
  else
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Welcome! <br />
          Sign in to Get <br />
          Started!
        </h1>
      </main>
    );
}
