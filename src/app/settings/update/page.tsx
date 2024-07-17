import UpdateAccount from "~/components/update-account";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function CreateListingPage() {
  const session = await getServerAuthSession();

  if (session?.user) {
    // After making sure the user is signed in, grab the user fields and pass them to the UpdateAccount component
    // const defaultValues = api.user.findUnique({ where: { id: session.user.id } });
    const user = await api.user.self();

    return (
      <main>
        <UpdateAccount
          defaultValues={{
            firstName: user?.firstName ?? "",
            lastName: user?.lastName ?? "",
            email: user?.email ?? "",
            officePhone: user?.officePhone ?? "",
            mobilePhone: user?.mobilePhone ?? "",
            homePhone: user?.homePhone ?? "",
            companyName: user?.companyName ?? "",
            title: user?.title ?? "",
          }}
        />
      </main>
    );
  }

  return (
    <main>
      <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
        Sign in to <br />
        Update Account
      </h1>
    </main>
  );
}
