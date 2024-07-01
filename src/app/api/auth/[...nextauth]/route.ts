import NextAuth, { AuthOptions } from "next-auth";

import { authOptions } from "~/server/auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

export const options: AuthOptions = {
  providers: [],
  pages: {
    signIn: "",
    signOut: "",
    newUser: "",
  },
};
