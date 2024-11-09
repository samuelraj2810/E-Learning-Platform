const express =require("express");
const router = express.Router()
const {verifyToken} = require("../middleware/authToken")
const instructor = require("../controllers/instructorDetails.controller")

router.get("/getdata",verifyToken,instructor.insgetData)
router.put("/editdata",verifyToken,instructor.inseditData)

module.exports = router