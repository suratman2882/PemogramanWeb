import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getSales = async (req, res) =>{
    try {
        const response = await prisma.sales.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getSalesById = async (req, res) =>{
    try {
        const response = await prisma.sales.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createSales = async (req, res) =>{
    const {name_Sales, Penjualan, ProductId} = req.body;
    try {
        const product = await prisma.sales.create({
            data:{
                name_Sales:name_Sales,
                Penjualan:Penjualan,
                ProductId:ProductId,
            }
        });
        res.status(201).json(sales);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateSales = async (req, res) =>{
    const {name, price} = req.body;
    try {
        const sales = await prisma.sales.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name: name,
                price: price
            }
        });
        res.status(200).json(sales);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deletesales = async (req, res) =>{
    try {
        const sales = await prisma.sales.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(sales);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}