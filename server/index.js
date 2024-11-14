const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./src/config/connection");
const AuthenitactionRouter = require("./src/routes/register.route");
const cors = require("cors");

app.use(cors());
app.use(express.json());
Connection();
app.use(AuthenitactionRouter);

app.listen(3000, () => {
  try {
    console.log("Server Connected");
  } catch (error) {
    console.log("Connection Failed");
  }
});
