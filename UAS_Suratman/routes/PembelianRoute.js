import express from "express";
import {
    getPembelian,
    getPembelianById,
    createPembelian,
    updatePembelian,
    deletePembelian
} from "../controllers/SaleController.js";

const router = express.Router();

router.get('/Pembelian', getPembelian);
router.get('/Pembelian/:id', getPembelianById);
router.post('/Pembelian', createPembelian);
router.patch('/Pembelian/:id', updatePembelian);
router.delete('/Pembelian/:id', deletePembelian);

export default router;