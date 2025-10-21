// NextAuth is imported from next-auth along with AuthOptions type
import NextAuth, { AuthOptions } from "next-auth";
// authOptions is imported from the server auth configuration
import { authOptions } from "~/server/auth";

// the handler is defined as NextAuth function call with authOptions
const handler = NextAuth(authOptions);
// the handler is exported for both GET and POST requests
export { handler as GET, handler as POST };
