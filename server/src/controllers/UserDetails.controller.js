const userDetails = require("../models/UserDetails..model")
const bcrypt = require("bcrypt")

const getData = async(req,res) =>{
    try{
        const userId = req.userId
        console.log(userId);
        
        const data = await userDetails.findOne({userId})
        const datas = [data]
        if(!data ){
            return res.status(404).json({message:"data not found"})
        }
        console.log(datas)
        res.json(data)
    }
    catch(error){
        res.json(error.message)
    }
}
const editData = async(req,res) =>{
    try{
        const userId = req.userId
        const{agee} = req.body
        const age = parseInt(agee)
        const data = await userDetails.findOneAndUpdate({userId},{...req.body,age},{new:true})
        const datas = [data]
        res.json({datas,message:"Data updated successfully"})
        // console.log(data);
        
    }
    catch(error){
        res.json(error.message)
    }
}

module.exports = {
    getData,editData
}