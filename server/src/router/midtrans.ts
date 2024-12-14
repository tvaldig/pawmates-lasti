import express from "express";


import { createTransaction} from "../controllers/midtrans";

export default (router: express.Router) => {
    router.get('/transaction', createTransaction)
};