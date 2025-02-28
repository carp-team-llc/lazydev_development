/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `ProjectOwner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `githubUseremail` to the `ProjectOwner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectOwner" ADD COLUMN     "githubUseremail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProjectOwner_userId_key" ON "ProjectOwner"("userId");
