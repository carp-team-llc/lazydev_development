-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificationCreatedAt" TIMESTAMP(3),
ADD COLUMN     "verificationExpires" TIMESTAMP(3);
