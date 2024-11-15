const mongoose = require("mongoose")
const {v4} = require("uuid")

const courseSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },courseName: {
        type: String,
        required: true
    },courseHeaderDescription: {
        type: String,
        required: true
    },courseInstructor: {
        type: String,
        required: true
    },
    

},{timestamps:true})

const courseDetails = mongoose.model("courses",courseSchema)

module.exports = courseDetails