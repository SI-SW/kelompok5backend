/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `auth_user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `auth_user` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `auth_user_email_key` ON `auth_user`(`email`);
