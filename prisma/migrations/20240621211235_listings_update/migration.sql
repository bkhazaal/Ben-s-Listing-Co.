/*
  Warnings:

  - You are about to drop the column `name` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `adjCashflow` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `askingPrice` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grossRevenue` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "name",
ADD COLUMN     "adjCashflow" INTEGER NOT NULL,
ADD COLUMN     "askingPrice" INTEGER NOT NULL,
ADD COLUMN     "grossRevenue" INTEGER NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
