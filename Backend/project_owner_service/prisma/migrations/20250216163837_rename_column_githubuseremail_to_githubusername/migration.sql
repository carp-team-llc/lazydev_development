/*
  Warnings:

  - You are about to drop the column `githubUseremail` on the `ProjectOwner` table. All the data in the column will be lost.
  - Added the required column `githubEmail` to the `ProjectOwner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectOwner" DROP COLUMN "githubUseremail",
ADD COLUMN     "githubEmail" TEXT NOT NULL;
