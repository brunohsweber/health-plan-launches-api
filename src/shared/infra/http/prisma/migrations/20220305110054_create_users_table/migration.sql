/*
  Warnings:

  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(60)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(30) NOT NULL,
    MODIFY `password` CHAR(60) NOT NULL;
