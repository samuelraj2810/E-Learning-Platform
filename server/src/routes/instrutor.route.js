const express =require("express");
const router = express.Router()
const {verifyToken} = require("../middleware/authToken")
const instructor = require("../controllers/instructorDetails.controller")

router.get("/getinsdata",verifyToken,instructor.insgetData)
router.put("/editinsdata",verifyToken,instructor.inseditData)

module.exports = router