const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./config/connection");
const router = require("./routes/register.route")
const insrouter = require("./routes/instrutor.route")
const cors = require("cors")

app.use(cors())
app.use(express.json())
Connection()
app.use(router)
app.use(insrouter)

app.listen(3000, () => {
    try {
        console.log("Server Connected");
        
    } catch (error) {
        console.log("Connection Failed");
    }
})