const courseDetails = require("../models/course.model")
const instructorDetails = require("../models/instructorDetails.model")
const fs = require("fs")
const addCourse =async (req,res) => {
    
    try{
        const instructorId = req.userId
        const insdata = await instructorDetails.findOne({userId:instructorId})
        console.log(insdata);
        let file = req.file        
        const instructorName = insdata.name
        const data={
            ...req.body,
            instructorId,
            instructorName,
        }
        if(file){
            data.imagepath = `/static/${file.filename}`
            data.filename = file.filename
        }
        const data1 = await courseDetails.create(data)
        res.json({
            message:"New Course Added Successfully"
        })
        
    }catch(error){
        res.json(error.message)
    }
}
const editCourse =async(req,res) => {
    
    try{
        const {_id} = req.params;
        let file = req.file
        const find = await courseDetails.findById(_id)
        let imagepath
        let filename
        if(find){
            fs.unlinkSync(`src/public/courseimages/${find.filename}`)
            imagepath = `/static/${file.filename}`
            filename = file.filename
        }
        const data = await courseDetails.findOneAndUpdate({_id},{...req.body,imagepath,filename},{new:true})
        if(!data){
            return res.status(403).json({message:"no data found"})
        }
        res.json({
            data,
            message:"Course edited Successfully" 
        })
        
    }catch(error){
        res.json(error.message)
    }
}
const getCoursebyId =async (req,res) => {
    
    try{
        const instructorId = req.userId
        const data = await courseDetails.find({instructorId})
        console.log("hit");
        
        if(!data){
            return res.status(403).json({message:"no data found"})
        }
        res.json(data)
        
    }catch(error){
        res.json(error.message)
    }
}
const getAllCourse =async (req,res) => {
    
    try{
        const data = await courseDetails.find()
        if(!data){
            return res.status(403).json({message:"no data found"})
        }
        res.json(
            data
        )
        
    }catch(error){
        res.json(error.message)
    }
}
const getCourse =async (req,res) => {
    
    try{
        const {_id} = req.params;
        const data = await courseDetails.findOne({_id})
        console.log(data);
        
        if(!data){
            return res.status(403).json({message:"no data found"})
        }
        res.json(
            data
        )
        
    }catch(error){
        res.json(error.message)
    }
}

const deleteCourse =async (req,res) => {
    
    try{
        const {_id} = req.params;
        const data = await courseDetails.findById({_id})
        if(data){
            // fs.unlinkSync(`src/public/courseimages/${data.filename}`)
        }
        else{
            return res.status(403).json({message:"no data found"})}
    
        const data1 = await courseDetails.findByIdAndDelete(_id)
        res.json({
            message:"course deleted successfully"
    })
        
    }catch(error){
        res.json(error.message)
    }
}
module.exports = {
    addCourse,editCourse,getAllCourse,getCoursebyId,getCourse,deleteCourse
}