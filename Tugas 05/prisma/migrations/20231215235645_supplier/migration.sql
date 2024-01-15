-- CreateTable
CREATE TABLE `Supplier` (
    `id_Supplier` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Supplier` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `Jumlah` INTEGER NOT NULL,
    `Id_Product` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_Supplier`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
