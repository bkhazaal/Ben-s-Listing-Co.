import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const listing1 = await prisma.listing.create({
    data: {
      location: "New Jersey",
      askingPrice: 3000000,
      grossRevenue: 10000000,
      adjCashflow: 2000000000,
    },
  });
  console.log(listing1);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
