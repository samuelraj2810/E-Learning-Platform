const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./src/config/connection");
const router = require("./src/routes/register.route")
const insrouter = require("./src/routes/instrutor.route")
const filerouter = require("./src/middleware/file.route")
const cors = require("cors")

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/upload",express.static("src/public/coursefiles/"))
Connection()
app.use(router)
app.use(insrouter)
app.use(filerouter)

app.listen(3000, () => {
    try {
        console.log("Server Connected");
        
    } catch (error) {
        console.log("Connection Failed");
    }
})