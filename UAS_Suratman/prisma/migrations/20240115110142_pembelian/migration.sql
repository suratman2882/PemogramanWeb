-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Barang` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `Jumlah` INTEGER NOT NULL,
    `Supplierid` INTEGER NOT NULL,
    `Stock_Barang` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pembelian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Pembeli` VARCHAR(191) NOT NULL,
    `Jumlah_Barang` INTEGER NOT NULL,
    `Total_Harga` INTEGER NOT NULL,
    `Productid` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Barang` VARCHAR(191) NOT NULL,
    `Jumlah_Barang` INTEGER NOT NULL,
    `Total_Harga` INTEGER NOT NULL,
    `Pembelianid` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi_Barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Barang` VARCHAR(191) NOT NULL,
    `Jumlah_Barang` INTEGER NOT NULL,
    `Barang_Keluar` INTEGER NOT NULL,
    `Transaksiid` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_Supplierid_fkey` FOREIGN KEY (`Supplierid`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pembelian` ADD CONSTRAINT `Pembelian_Productid_fkey` FOREIGN KEY (`Productid`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_Pembelianid_fkey` FOREIGN KEY (`Pembelianid`) REFERENCES `Pembelian`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaksi_Barang` ADD CONSTRAINT `Transaksi_Barang_Transaksiid_fkey` FOREIGN KEY (`Transaksiid`) REFERENCES `Transaksi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
