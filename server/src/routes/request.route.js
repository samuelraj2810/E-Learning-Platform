const express = require("express")
const Request = require("../models/Request.model") 
const router = express.Router()

router.post("/request",async(req,res)=>{
    try {
        const {courseid , coursename} = req.body
        const data = {
            courseid,
            coursename
        }
        await Request.create(data)
        res.json({
            message:"Request Submitted"
        })
    } catch (error) {
        res.json(error.message)   
    }
})

router.get("/getRequests",async(req,res)=>{
    try {
        const data = await Request.find()
        res.json(data)
    } catch (error) {
        res.json(error.message)
        
    }

})
module.exports = router