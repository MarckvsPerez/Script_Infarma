import express from "express";
import * as dotenv from 'dotenv'

import { flashTags,refreshTags } from "./scripts";

dotenv.config()

const app = express();
const port = 3000;
const STORE_ID = process.env.STORE_ID ?? ""
const REFRESH_INTERVAL_MINUTE = process.env.REFRESH_INTERVAL_MINUTE ?? ""
const FLASH_INTERVAL_MINUTE = process.env.FLASH_INTERVAL_MINUTE ?? ""

app.get("/", (_req, res) => {
    res.send("Servidor en ejecución");
});

function    FlashInterval() {
    flashTags(STORE_ID);
    const date = new Date().toLocaleString();
    console.log("Ejecutando Flash " + date);
}

function    RefreshInterval() {
    refreshTags(STORE_ID);
    const date = new Date().toLocaleString();
    console.log("Ejecutando Refresh " + date);
}

setInterval(RefreshInterval, Number(REFRESH_INTERVAL_MINUTE) * 60 * 1000);
setInterval(FlashInterval, Number(FLASH_INTERVAL_MINUTE) * 60 * 1000);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
