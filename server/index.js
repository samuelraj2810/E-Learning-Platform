const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./src/config/connection");
const router = require("./src/routes/register.route");
const insRouter = require("./src/routes/instrutor.route");
const fileRouter = require("./src/middleware/file.route");
const cors = require("cors");
const authenticationRouter = require("./src/routes/register.route");
const paymentRouter = require("./src/routes/paymentRoute");

// Middleware setup
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file hosting
app.use("/upload", express.static("src/public/coursefiles/"));

// Database connection
Connection();

// Route mounting
app.use("/auth", authenticationRouter); // Authentication-related routes
app.use("/instructor", insRouter); // Instructor-related routes
app.use("/file", fileRouter); // File upload-related routes
app.use("/payment", paymentRouter); // Payment-related routes
app.use("/", router); // Default or general-purpose routes

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server is Running");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is Running on:", port));
