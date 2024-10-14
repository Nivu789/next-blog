/*
  Warnings:

  - A unique constraint covering the columns `[categoryName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "topic" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_topic_fkey" FOREIGN KEY ("topic") REFERENCES "Category"("categoryName") ON DELETE SET NULL ON UPDATE CASCADE;
