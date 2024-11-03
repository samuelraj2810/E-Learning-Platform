const mongoose = require("mongoose")
const register = require("../models/Register.model")
const jwt = require("jsonwebtoken")
const verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;
        
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await register.findOne({userId:decoded.userId});
    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.isVerified = true;
        await user.save();

        res.json("Email verified successfully . Go to login page");
    } catch (error) {
        res.status(400).json({ error: "Invalid or expired token" });
    }
};

module.exports = verifyEmail