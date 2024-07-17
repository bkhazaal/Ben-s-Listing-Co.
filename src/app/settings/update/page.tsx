import UpdateAccount from "~/components/update-account";
import { getServerAuthSession } from "~/server/auth";

export default async function CreateListingPage() {
  const session = await getServerAuthSession();
  if (session?.user)
    return (
      <main>
        <UpdateAccount id={user.id}></UpdateAccount>
      </main>
    );
  else
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Sign in to <br />
          Update Account
        </h1>
      </main>
    );
}
