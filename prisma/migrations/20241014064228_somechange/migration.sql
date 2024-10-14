-- DropIndex
DROP INDEX "Blog_userId_key";

-- AlterTable
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_pkey" PRIMARY KEY ("userId");
