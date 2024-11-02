const express =require("express");
const router = express.Router()
const registerCtrl = require("../controllers/register.controller")
const verifyEmail = require("../controllers/Verifyemail.controller")
const {forgotPassword,resetPassword} = require("../controllers/ForgotPassword.controller")

router.get("/getData",registerCtrl.getData)

router.post("/register",registerCtrl.regPost)
router.post("/login",registerCtrl.loginPost)
router.post("/otplogin",registerCtrl.otpLogin)
router.get("/verify-email/:token", verifyEmail);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpass/:token", resetPassword);

module.exports = router