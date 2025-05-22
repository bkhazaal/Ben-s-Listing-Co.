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

## How to run on VS Code

1. Open your terminal and clone the repo.

---

2. Run cd bens-listing-co, then run "pnpm i" in the terminal.

---

3. Go to https://discord.com/developers/applications, create a new application, and paste the client id and generated secret into the env file.

4. Create a file named .env and add your DatabaseURL, discord client ID, nextauth secret (run "openssl rand -base64 32" in the terminal to generate this), nextauth URL, and finally your discord client secret.

---

5. Create a new application, paste the client id and generated secret into the env file.

---

6. Make a new connection in dbngin with port 5432, and then Press start.

---

7. Run pnpm db:generate in the terminal to start the database.

---

8. Run pnpm dev in the terminal to start the application.

---

9. Sign in with your Discord account.

---

10. Enjoy!
