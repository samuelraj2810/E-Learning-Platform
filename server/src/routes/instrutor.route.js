const express =require("express");
const router = express.Router()
const {verifyToken} = require("../middleware/authToken")
const instructor = require("../controllers/instructorDetails.controller")

router.get("/getInsData",verifyToken,instructor.insgetData)
router.put("/editInsData",verifyToken,instructor.inseditData)

module.exports = router