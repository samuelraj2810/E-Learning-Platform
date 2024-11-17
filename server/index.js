const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./src/config/connection");
const AuthenitactionRouter = require("./src/routes/register.route");
const cors = require("cors");
const paymentrouter = require("./src/routes/paymentRoute")
app.use(cors());
app.use(express.json());
Connection();
app.use(AuthenitactionRouter);

app.use(paymentrouter);

const port = 3000
app.get('/', (req,res)=> {
  res.send('Server is Running')
})
app.listen(port, ()=> console.log("Server is Running on:",port))

