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

const uploadFiles = upload.fields([{name:image},{name:video}])
router.use(verifyToken)
router.post("/addcourse",uploadFiles,courseCtrl.addCourse);
router.put("/editcourse/:_id",uploadFiles,courseCtrl.editCourse);
router.get("/getinstcourse",uploadFiles,courseCtrl.getCoursebyId);
router.get("/getallcourse",uploadFiles,courseCtrl.getAllCourse);
router.get("/getcourse/:_id",uploadFiles,courseCtrl.getCourse);
router.delete("/deletecourse/:_id",uploadFiles,courseCtrl.deleteCourse);


module.exports = router;
