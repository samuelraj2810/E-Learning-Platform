const express = require("express");
const router = express.Router()
const multer = require("multer");
const {verifyToken} = require("../middleware/authToken")
const courseCtrl = require("../controllers/courseManagement.controller")

const storage = multer.diskStorage({
  destination: "src/public/coursefiles/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage
});

const uploadFiles = upload.fields([{name:"image"},{name:"video"}])

router.use(verifyToken) // Middleware to verify token

router.post("/addcourse",uploadFiles,courseCtrl.addCourse);         // Adds Course
router.put("/editcourse/:_id",uploadFiles,courseCtrl.editCourse);   // Edit Course
router.get("/getinstcourse",courseCtrl.getCoursebyId);              // Gets Course created by Instructor
router.get("/getallcourse",courseCtrl.getAllCourse);                // Gets all Courses
router.get("/getcourse/:_id",courseCtrl.getCourse);                 // Gets Particular Course
router.delete("/deletecourse/:_id",courseCtrl.deleteCourse);        //Delete Course


module.exports = router;
