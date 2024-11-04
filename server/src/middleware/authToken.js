const jwt = require("jsonwebtoken")
const register = require("../models/Register.model")

const tokenGen = async(userId) => {

    return jwt.sign({id:userId},process.env.JWT_KEY,{expiresIn:"1h"})

}

const authtoken = async()=>{
    asda
}
module.exports = {
    tokenGen
}