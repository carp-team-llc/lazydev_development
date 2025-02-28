/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `contributors` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "contributors" ADD COLUMN     "isLinked" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "contributors_userId_key" ON "contributors"("userId");
