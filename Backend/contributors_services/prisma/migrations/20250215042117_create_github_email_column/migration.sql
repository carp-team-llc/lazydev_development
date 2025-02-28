/*
  Warnings:

  - Added the required column `githubEmail` to the `contributors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contributors" ADD COLUMN     "githubEmail" TEXT NOT NULL;
