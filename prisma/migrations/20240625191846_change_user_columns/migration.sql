/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "homePhone" TEXT,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "mobilePhone" TEXT,
ADD COLUMN     "officePhone" TEXT,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "email" SET NOT NULL;
