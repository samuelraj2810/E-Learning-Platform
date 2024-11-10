const mongoose = require("mongoose")
const {v4} = require("uuid")

const courseSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    courseName:String,
    duration:String,
    instructorName:String,
    instructorId:String,
    image:String,

},{timestamps:true})

const courseDetails = mongoose.model("courses",courseSchema)

module.exports = courseDetails