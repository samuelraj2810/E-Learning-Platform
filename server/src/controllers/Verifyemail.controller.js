const mongoose = require("mongoose");
const register = require("../models/Register.model");
const jwt = require("jsonwebtoken");
const userDetails = require("../models/UserDetails..model");
const instDetails = require("../models/instructorDetails.model");
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await register.findOne({ userId: decoded.userId });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isVerified = true;
    await user.save();
    if(user.designation ==="Student"){
    const data = {
      name: user.username,
      email: user.email,
      phonenumber: user.number,
      designation: user.designation,
      userId:user.userId
    };
// to store the data from the register database to the user details " only if the email is verified "
    await userDetails.create(data)}
    else if(user.designation==="Instructor"){
      const data = {
        name: user.username,
        email: user.email,
        phonenumber: user.number,
        designation: user.designation,
        userId:user.userId
      };
      await instDetails.create(data)
    }
    else {
      const data = {
        name: user.username,
        email: user.email,
        phonenumber: user.number,
        designation: user.designation,
        userId:user.userId
      };
      await adminDetails.create(data)
      res.redirect("http://localhost:3001/instructordashboard")
    }
    res.redirect("http://localhost:3001/verify");
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

module.exports = verifyEmail;
