import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getTransaksi = async (req, res) =>{
    try {
        const response = await prisma.transaksi.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTransaksiById = async (req, res) =>{
    try {
        const response = await prisma.transaksi.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createTransaksi = async (req, res) =>{
    const {name_Barang, Jumlah_Barang, Total_Harga, Pembelianid} = req.body;
    try {
        const product = await prisma.transaksi.create({
            data:{
                name_Barang:name_Barang,
                Jumlah_Barang:Jumlah_Barang,
                Total_Harga:Total_Harga,
                Pembelianid:Pembelianid,
            }
        });
        res.status(201).json(transaksi);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateTransaksi = async (req, res) =>{
    const {name_Barang, Jumlah_Barang, Total_Harga, Pembelianid} = req.body;
    try {
        const supplier = await prisma.transaksi.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name_Barang:name_Barang,
                Jumlah_Barang:Jumlah_Barang,
                Total_Harga:Total_Harga,
                Pembelianid:Pembelianid,
           }
        });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteTransaksi = async (req, res) =>{
    try {
        const supplier = await prisma.transaksi.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(transaksi);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}