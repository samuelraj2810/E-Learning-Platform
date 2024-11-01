const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const register = require("../models/Register.model")
const {tokenGen} = require("../middleware/authToken")
const regPost = async(req,res) =>{
    try {
        console.log(req.body);
        
        const{email , password}=req.body
        const checkmail = await register.findOne({email})
        if(checkmail){
            return res.status(409).json({message:"email already exist"})
        }
        const encpass = await bcrypt.hash(password,10)
        let data = {
            ...req.body,
            password:encpass
        }
        const userdata = await register.create(data)
        res.json({
            userdata,
            message:"Sign up Successfull"
        })

        
    } catch (error) {
        res.json(error.message)
    }
}

const loginPost = async(req,res) => {
    try {
        const {email,password} = req.body

        const checkmail = await register.findOne({email})
        if(!checkmail){
            return res.status(404).json({message:"Invalid Email Id"})
        }

        const checkpass = await bcrypt.compare(password,checkmail.password)
        if(!checkpass){
            return res.status(404).json({message:"Invalid Password"})
        }
        const token =await tokenGen(checkmail.userId)
        console.log(token)

        res.json({
            message:"Success",
            token
        })

    } catch (error) {
        res.json(error.message)
        
    }
}

module.exports = {
    regPost,
    loginPost
}