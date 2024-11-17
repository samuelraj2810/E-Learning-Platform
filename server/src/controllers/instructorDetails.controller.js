const instructorDetails = require("../models/instructorDetails.model")

// Get Instructors Details
const insgetData = async (req, res) => {
    try {
        const userId = req.userId;
        console.log(userId)
        // Check if userId exists in the request
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const data = await instructorDetails.findOne({ userId });
        
        // Handle case where data is not found
        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }

        const datas = [data];
        console.log(datas);
        res.json(datas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Edit Instructors Details
const inseditData = async(req,res) =>{
    try{
        console.log(req.body,"hi")
        
        const userId = req.userId
        const{age} = req.body
        age==null||undefined? null : parseInt(age)
        const data = await instructorDetails.findOneAndUpdate({userId},{...req.body,age},{new:true})
        console.log(data);
        if(!data){
            res.json({message:"data not"})
        }
        // const datas = [data]
        res.json(data)
        
        
    }
    catch(error){
        res.json(error.message)
    }
}

module.exports = {
    insgetData,inseditData
}