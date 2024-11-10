const courseDetails = require("../models/course.model")
const instructorDetails = require("../models/instructorDetails.model")
const addCourse =async (req,res) => {
    
    try{
        const instructorId = req.userId
        const insdata = await instructorDetails.findOne({userId:instructorId})
        console.log(insdata);
        
        const instructorName = insdata.name
        const data={
            ...req.body,
            instructorId,
            instructorName,
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
        console.log(req.body);
        
        const data = await courseDetails.findOneAndUpdate({_id},{...req.body},{new:true})
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

module.exports = {
    addCourse,editCourse,getAllCourse,getCoursebyId,getCourse
}