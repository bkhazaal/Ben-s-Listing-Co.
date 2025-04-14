import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const userdata = await api.user.users();

  if (session)
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Welcome
          <br />
          {userdata?.firstName} {userdata?.lastName}
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
