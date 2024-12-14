import { Request, Response } from "express";
const midtransClient = require("midtrans-client");

let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-LlPJdp8Nlwqpfww9gEKrH7rJ",
});

let parameter = {
    transaction_details: {
        order_id: "YOUR-ORDERID-123456",
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
