-- CreateTable
CREATE TABLE `Product` (
    `id_Product` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Product` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `Jumlah` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_Product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `Sales` (
    `id_Sales` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Sales` VARCHAR(191) NOT NULL,
    `Penjualan` INTEGER NOT NULL,
    `Id_Product` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_Sales`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
