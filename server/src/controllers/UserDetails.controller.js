const userDetails = require("../models/UserDetails..model")
const register = require("../models/Register.model")
const bcrypt = require("bcrypt")

const getData = async(req,res) =>{
    try{
        const userId = req.userId
        console.log(userId);
        
        const data = await register.findOne({userId})
        if(!data ){
            return res.status(404).json({message:"data not found"})
        }
        res.json(data)
    }
    catch(error){
        res.json(error.message)
    }
}
const editData = async(req,res) =>{
    try{
        const userId = req.userId
        const data = await register.updateOne({userId},req.body,{new:true})
        res.json(data)
    }
    catch(error){
        res.json(error.message)
    }
}

module.exports = {
    getData,editData
}