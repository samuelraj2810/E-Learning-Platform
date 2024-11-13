const mongoose = require("mongoose")
const {v4} = require("uuid")

const content = new mongoose.Schema({
    title:String,
    lectures:Number,
    duration:String
})

const courseSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    courseName:String,
    duration:String,
    rating:Number,
    courseContent:[content],
    description:String,
    instructorName:String,
    instructorId:String,
    imagePath:String,
    imageName:String,
    videoPath:String,
    videoName:String

},{timestamps:true})

const courseDetails = mongoose.model("courses",courseSchema)

module.exports = courseDetails