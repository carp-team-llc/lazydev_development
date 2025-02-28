/*
  Warnings:

  - Added the required column `repoCount` to the `ProjectOwner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectOwner" ADD COLUMN     "repoCount" INTEGER NOT NULL;
