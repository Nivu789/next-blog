/*
  Warnings:

  - You are about to drop the column `topic` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `blogPosts` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_topic_fkey";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "topic";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "blogPosts" INTEGER NOT NULL;
