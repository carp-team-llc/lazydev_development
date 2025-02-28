/*
  Warnings:

  - Added the required column `level` to the `ProjectOwner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricing` to the `ProjectOwner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectOwner" ADD COLUMN     "isActivated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "level" TEXT NOT NULL,
ADD COLUMN     "pricing" TEXT NOT NULL;
