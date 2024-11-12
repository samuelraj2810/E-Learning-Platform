const express =require("express");
const AuthenitactionRouter = express.Router()
const registerCtrl = require("../controllers/register.controller")
const verifyEmail = require("../controllers/Verifyemail.controller")
const UserDetails = require("../controllers/UserDetails.controller")
const {forgotPassword,resetPassword} = require("../controllers/ForgotPassword.controller")
const {verifyToken} = require("../middleware/authToken")


AuthenitactionRouter.post("/register",registerCtrl.regPost)
AuthenitactionRouter.post("/login",registerCtrl.loginPost)
// router.post("/otplogin",registerCtrl.otpLogin)
AuthenitactionRouter.get("/verify-email/:token", verifyEmail);
AuthenitactionRouter.post("/forgotpassword", forgotPassword);
AuthenitactionRouter.post("/resetpass/:token", resetPassword);

AuthenitactionRouter.get("/getdata",verifyToken,UserDetails.getData)
AuthenitactionRouter.put("/editdata",verifyToken,UserDetails.editData)

module.exports = AuthenitactionRouter