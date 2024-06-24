/*
  Warnings:

  - You are about to drop the column `userId` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `name` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_userId_fkey";

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "userId",
ADD COLUMN     "name" TEXT NOT NULL;
