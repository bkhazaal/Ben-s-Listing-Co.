import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Buying() {
  const session = await getServerAuthSession();
  const userdata = await api.user.users();

  if (session)
    return (
      <div className="m-12 flex justify-center">
        <div className="text-m text-1xl w-2/3 rounded-lg border p-7 text-left leading-[35px]">
          <p>
            <strong>Name:</strong> {userdata?.firstName}_{userdata?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {userdata?.email}
          </p>
          <p>
            <strong>Title:</strong> {userdata?.title}
          </p>
          <p>
            <strong>Company:</strong> {userdata?.companyName}
          </p>
          <p>
            <strong>Office Phone: </strong>
            {userdata?.officePhone}
          </p>
          <p>
            <strong>Home Phone: </strong>
            {userdata?.homePhone}
          </p>
          <p>
            <strong>Mobile Phone: </strong>
            {userdata?.mobilePhone}
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
