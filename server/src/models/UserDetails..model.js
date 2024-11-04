const mongoose = require("mongoose");
const { v4 } = require("uuid");

const userSch = new mongoose.Schema(

{
    name:String,
    phonenumber: Number,
    age:Number,
    sex:String,
    email: String,
    designation: String,
    title:{
      type:Array,
      default:[name,phonenumber,age,sex,email,designation]
    },
    _id: {
      type: String,
      default: v4,
    },
    userId: {
      type: String
    }
  },
  { timestamps: true }
);

const userDetails = mongoose.model("UserDetails",userSch)

module.exports= userDetails