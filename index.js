import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import PembelianRoute from "./routes/PembelianRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import TransaksiRoute from "./routes/TransaksiRoute.js";
import transaksi_BarangRoute from "./routes/Transaksi_BarangRoute.js";
import SupplierRoute from "./routes/SupplierRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(PembelianRoute);
app.use(ProductRoute);
app.use(TransaksiRoute);
app.use(SupplierRoute);
app.use(transaksi_BarangRoute);

app.listen(process.env.APP_PORT = 5000, ()=>{
    console.log('Server Sudah Running...');
});