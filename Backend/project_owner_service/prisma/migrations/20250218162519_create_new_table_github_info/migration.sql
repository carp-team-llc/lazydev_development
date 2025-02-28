-- CreateTable
CREATE TABLE "GithubInfo" (
    "id" TEXT NOT NULL,
    "isInstallation" BOOLEAN NOT NULL DEFAULT false,
    "installationId" TEXT NOT NULL,
    "githubUserId" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "githubUserEmail" TEXT NOT NULL,
    "repoId" TEXT NOT NULL,
    "repoName" TEXT NOT NULL,
    "repoFullName" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL,
    "projectOwnerId" TEXT NOT NULL,

    CONSTRAINT "GithubInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GithubInfo" ADD CONSTRAINT "GithubInfo_projectOwnerId_fkey" FOREIGN KEY ("projectOwnerId") REFERENCES "ProjectOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;
