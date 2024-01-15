import express from "express";
import {
    getSupplier,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get('/supplier', getSupplier);
router.get('/supplier/:id', getSupplierById);
router.post('/supplier', createSupplier);
router.patch('/supplier/:id', updateSupplier);
router.delete('/Supplier/:id', deleteSupplier);

export default router;