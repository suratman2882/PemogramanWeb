import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getPembelian = async (req, res) =>{
    try {
        const response = await prisma.pembelian.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPembelianById = async (req, res) =>{
    try {
        const response = await prisma.pembelian.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createPembelian = async (req, res) =>{
    const {name_Pembeli, Jumlah_Barang, Total_Harga, Productid} = req.body;
    try {
        const product = await prisma.sales.create({
            data:{
                name_Pembeli:name_Pembeli,
                Jumlah_Barang:Jumlah_Barang,
                Total_Harga:Total_Harga,
                Productid:Productid
            }
        });
        res.status(201).json(pembelian);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updatePembelian = async (req, res) =>{
    const {name, price} = req.body;
    try {
        const sales = await prisma.pembelian.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name: name,
                price: price
            }
        });
        res.status(200).json(pembelian);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deletesales = async (req, res) =>{
    try {
        const sales = await prisma.pembelian.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(pembelian);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}