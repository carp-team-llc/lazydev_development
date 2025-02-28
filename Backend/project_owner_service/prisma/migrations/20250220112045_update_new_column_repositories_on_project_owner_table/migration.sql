/*
  Warnings:

  - Added the required column `repositories` to the `ProjectOwner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectOwner" ADD COLUMN     "repositories" INTEGER NOT NULL;
