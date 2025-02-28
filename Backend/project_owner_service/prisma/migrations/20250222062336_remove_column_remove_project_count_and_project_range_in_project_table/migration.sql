/*
  Warnings:

  - You are about to drop the column `projectCount` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectRange` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "projectCount",
DROP COLUMN "projectRange";
