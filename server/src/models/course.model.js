const mongoose = require("mongoose")
const {v4} = require("uuid")


const courseSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    courseName:String,
    duration:String,
    rating:String,
    price:String,
    title:[
        String
    ],
    lectureDuration:[
        String
    ],
    description:[
        String
    ],
    requirements:[
        String
    ],
    learn:[
        String
    ],
    
    instructorName:String,
    instructorId:String,
    imagePath:String,
    imageName:String,
    videoPath:String,
    videoName:String,

},{timestamps:true})

const courseDetails = mongoose.model("courses",courseSchema)

module.exports = courseDetails