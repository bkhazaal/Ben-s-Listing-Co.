# Ben's Listing Co.

Ben's Listing Co. is a simple and modern business listings application built with the T3 Stack (Next.js, TypeScript, Prisma ORM, Tailwind CSS, tRPC, and ShadCN UI). It allows users to create, search, and manage business listings through a clean and responsive interface.

## Features

- Create new business listings
- Search listings by name or keyword
- Update user profile information
- Delete business listings

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, ShadCN UI
- **Backend**: Prisma ORM, tRPC
- **Database**: PostgreSQL

## How to run

1. **Clone the repository:**
   ![git clone](/images/clone.png)
   Then, run cd bens-listing-co in the terminal

---

2. Run cd bens-listing-co in the terminal, then run "pnpm i" in the terminal:

   ![pnpmi](/images/pnpmi.png)

---

3. Create a file named .env and add what you see in the screenshot:

   ![env](/images/env.png) ![env2](/images/envfile.png)

---

4. Go the (https://discord.com/developers/applications)

   Create a new application, and paste the client id, and generated secret into the env file

   ***

5. run "openssl rand -base64 32" in the terminal to generate a next

   ![secret](/images/secret.png)

---

6. Make a new connection in dbngin with port 5432.

   ![dbngin](/images/dbngin.png)

   Press start

---

7. Run pnpm db:generate to start the database

   ![dbgenerate](/images/dbgenerate.png)

---

8. Run pnpm dev in the terminal to start the application

![pnpmdev](/images/pnpmdev.png)

9. Sign in with your discord account

![singin](/images/signin.png)

![discord](/images/discord.png)

10. Enjoy!
