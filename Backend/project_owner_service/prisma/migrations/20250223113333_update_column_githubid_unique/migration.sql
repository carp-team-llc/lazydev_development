/*
  Warnings:

  - A unique constraint covering the columns `[githubId]` on the table `ProjectOwner` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProjectOwner_githubId_key" ON "ProjectOwner"("githubId");
