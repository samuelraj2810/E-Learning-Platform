const userDetails = require("../models/UserDetails..model")
const instDetails = require("../models/instructorDetails.model")
const bcrypt = require("bcrypt")

const insgetData = async(req,res) =>{
    try{
        const userId = req.userId
        console.log(userId);
        
        const data = await instDetails.findOne({userId})
        const datas = [data]
        if(!data ){
            return res.status(404).json({message:"data not found"})
        }
        console.log(datas)
        res.json(datas)
    }
    catch(error){
        res.json(error.message)
    }
}
const inseditData = async(req,res) =>{
    try{
        const userId = req.userId
        const{age} = req.body
        age==null||undefined? null : parseInt(age)
        const data = await userDetails.findOneAndUpdate({userId},{...req.body,age},{new:true})
        const datas = [data]
        res.json(datas)
        // console.log(data);
        
    }
    catch(error){
        res.json(error.message)
    }
}

module.exports = {
    insgetData,inseditData
}