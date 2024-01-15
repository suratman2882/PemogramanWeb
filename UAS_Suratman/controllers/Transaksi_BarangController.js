import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getTransaksi_Barang = async (req, res) =>{
    try {
        const response = await prisma.transaksi_Barang.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTransaksi_BarangById = async (req, res) =>{
    try {
        const response = await prisma.transaksi_Barang.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createTransaksi_Barang = async (req, res) =>{
    const {name_Barang, Jumlah_Barang, Barang_Keluar, Transaksiid} = req.body;
    try {
        const product = await prisma.transaksi_Barang.create({
            data:{
                name_Barang:name_Barang,
                Jumlah_Barang:Jumlah_Barang,
                Barang_Keluar:Barang_Keluar,
                Transaksiid:Transaksiid,
            }
        });
        res.status(201).json(transaksi_Barang);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateTransaksi_Barang = async (req, res) =>{
    const {name_Barang, Jumlah_Barang, Barang_Keluar, Transaksiid} = req.body;
    try {
        const supplier = await prisma.supplier.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name_Barang:name_Barang,
                Jumlah_Barang:Jumlah_Barang,
                Barang_Keluar:Barang_Keluar,
                Transaksiid:Transaksiid,
            }
        });
        res.status(200).json(transaksi_Barang);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteTransaksi_Barang = async (req, res) =>{
    try {
        const supplier = await prisma.transaksi_Barang.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(transaksi_Barang);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}