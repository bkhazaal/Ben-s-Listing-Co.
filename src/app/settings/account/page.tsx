import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Buying() {
  const session = await getServerAuthSession();
  const userdata = await api.user.users();

  if (session?.user)
    return (
      <div className="m-12 flex justify-center">
        <div className="text-m text-1xl w-1/2 rounded-lg border p-7 text-left leading-[35px]">
          <p>
            {session && (
              <span>
                <strong>Name:</strong> {userdata?.firstName}_
                {userdata?.lastName}
              </span>
            )}
          </p>
          <p>
            {session && (
              <span>
                <strong>Email:</strong> {userdata?.email}
              </span>
            )}
          </p>
          <p>
            {session && (
              <span>
                <strong>Title:</strong> {userdata?.title}
              </span>
            )}
          </p>
          <p>
            {session && (
              <span>
                <strong>Company:</strong> {userdata?.companyName}
              </span>
            )}
          </p>
          <p>
            {session && (
              <span>
                <strong>Office Phone: </strong>
                {userdata?.officePhone}
              </span>
            )}
          </p>
          <p>
            {session && (
              <span>
                <strong>Home Phone: </strong>
                {userdata?.homePhone}
              </span>
            )}
          </p>
          <p>
            {session && (
              <span>
                <strong>Mobile Phone: </strong>
                {userdata?.mobilePhone}
              </span>
            )}
          </p>
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
