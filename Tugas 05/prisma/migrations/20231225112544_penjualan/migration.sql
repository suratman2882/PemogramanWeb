/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Product` on the `product` table. All the data in the column will be lost.
  - The primary key for the `sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id_Product` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `id_Sales` on the `sales` table. All the data in the column will be lost.
  - The primary key for the `supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id_Product` on the `supplier` table. All the data in the column will be lost.
  - You are about to drop the column `id_Supplier` on the `supplier` table. All the data in the column will be lost.
  - Added the required column `IdSupplier` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProductId` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP PRIMARY KEY,
    DROP COLUMN `id_Product`,
    ADD COLUMN `IdSupplier` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sales` DROP PRIMARY KEY,
    DROP COLUMN `Id_Product`,
    DROP COLUMN `id_Sales`,
    ADD COLUMN `ProductId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `supplier` DROP PRIMARY KEY,
    DROP COLUMN `Id_Product`,
    DROP COLUMN `id_Supplier`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_IdSupplier_fkey` FOREIGN KEY (`IdSupplier`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
