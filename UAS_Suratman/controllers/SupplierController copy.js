import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getSupplier = async (req, res) =>{
    try {
        const response = await prisma.supplier.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getSupplierById = async (req, res) =>{
    try {
        const response = await prisma.supplier.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createSupplier = async (req, res) =>{
    const {name, price, Jumlah} = req.body;
    try {
        const product = await prisma.supplier.create({
            data:{
                name: name,
                price: price,
                Jumlah:Jumlah,
            }
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateSupplier = async (req, res) =>{
    const {name, price, Jumlah} = req.body;
    try {
        const supplier = await prisma.supplier.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name: name,
                price: price,
                Jumlah:Jumlah,
            }
        });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteSupplier = async (req, res) =>{
    try {
        const supplier = await prisma.supplier.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}