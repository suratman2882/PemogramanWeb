import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req, res) =>{
    try {
        const response = await prisma.product.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async (req, res) =>{
    try {
        const response = await prisma.product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createProduct = async (req, res) =>{
    const {name_Barang, price, Jumlah, Supplierid, Stock_Barang} = req.body;
    try {
        const product = await prisma.product.create({
            data:{
                name_Barang: name_Barang,
                price: price,
                Jumlah: Jumlah,
                Supplierid: Supplierid,
                Stock_Barang:Stock_Barang
            }
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateProduct = async (req, res) =>{
    const {name_Barang, Price, Jumlah, Supplierid, Stock_Barang} = req.body;
    try {
        const product = await prisma.product.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name_Barang: name_Barang,
                Price: Price,
                Jumlah: Jumlah,
                Supplierid: Supplierid,
                Stock_Barang:Stock_Barang
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteProduct = async (req, res) =>{
    try {
        const product = await prisma.product.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}