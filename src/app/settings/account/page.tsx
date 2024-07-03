import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Buying() {
  const session = await getServerAuthSession();
  const userdata = await api.user.users();

  if (session?.user)
    return (
      <div className="m-12">
        <div className="text-bold text-center text-3xl leading-[50px]">
          <h2>
            {session && (
              <span>
                Name: {userdata?.firstName}
                {userdata?.lastName}
              </span>
            )}
          </h2>
          <h2>{session && <span>Email: {session.user?.email}</span>}</h2>
          <h2>{session && <span>Title: {userdata?.title}</span>}</h2>
        </div>
      </div>
    );
  else
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Sign in to See <br />
          Account Info
        </h1>
      </main>
    );
}
