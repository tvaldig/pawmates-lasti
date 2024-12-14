const compression = require('compression');
import mongoose from "mongoose";
import router from "./src/router";
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const midtransClient = require('midtrans-client');
require('dotenv').config();
const app = express();

app.use(cors(
    {credentials: true,
      origin: '*',
    }
));

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('PAWMATES BACKEND');
  });

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);

server.listen(8080, ()=> {
  console.log("server running on http://localhost:8080")
})

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', (error: Error)=> console.log(error));
console.log("MONGO_URL from environment:", MONGODB_URI);
app.use('/', router());

module.exports = app;