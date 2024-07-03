import CreateListing from "~/components/listing-form";
import { getServerAuthSession } from "~/server/auth";

export default async function CreateListingPage() {
  const session = await getServerAuthSession();
  if (session?.user)
    return (
      <main>
        <CreateListing></CreateListing>
      </main>
    );
  else
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Sign in to create <br /> a listing
        </h1>
      </main>
    );
}
