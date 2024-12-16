import { Request, Response } from "express";
import { generateOrderId } from "../helpers";
const midtransClient = require("midtrans-client");
require('dotenv').config();
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
});

export const createTransaction = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract gross_amount from the request body
    const { gross_amount} = req.body;

    if (!gross_amount) {
      res.status(400).json({ error: "gross_amount are required" });
      return;
    }
    const order_id = generateOrderId(); 
    let parameter = {
      transaction_details: {
        order_id,
        gross_amount,
      },
    };

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
