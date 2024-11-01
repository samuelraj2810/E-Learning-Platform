const express =require("express");
const router = express.Router()
const registerCtrl = require("../controllers/register.controller")

router.post("/register",registerCtrl.regPost)
router.post("/login",registerCtrl.loginPost)

module.exports = router