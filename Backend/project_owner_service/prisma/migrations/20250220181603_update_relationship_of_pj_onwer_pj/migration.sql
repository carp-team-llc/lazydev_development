/*
  Warnings:

  - You are about to drop the column `projectOwnerId` on the `GithubInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `GithubInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `GithubInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectOwnerId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GithubInfo" DROP CONSTRAINT "GithubInfo_projectOwnerId_fkey";

-- AlterTable
ALTER TABLE "GithubInfo" DROP COLUMN "projectOwnerId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectOwnerId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GithubInfo_projectId_key" ON "GithubInfo"("projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_projectOwnerId_fkey" FOREIGN KEY ("projectOwnerId") REFERENCES "ProjectOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GithubInfo" ADD CONSTRAINT "GithubInfo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
