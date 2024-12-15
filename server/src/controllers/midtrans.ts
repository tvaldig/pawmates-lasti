import { Request, Response } from "express";
const midtransClient = require("midtrans-client");
require('dotenv').config();
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
});

let parameter = {
    transaction_details: {
        order_id: "YOUR-ORDERID-12356",
        gross_amount: 100000,
    },
};

export const createTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const transaction = await snap.createTransaction(parameter);
        const transactionToken = transaction.token;
        console.log("transactionToken:", transactionToken);

        // Respond with the transaction token
        res.status(200).json({ transactionToken });
    } catch (error) {
        console.error("Error creating transaction:", error);
        res.status(500).json({ error: "Failed to create transaction" });
    }
};
