const express = require("express");
const router = express.Router()
const multer = require("multer");
const {verifyToken} = require("../middleware/authToken")
const courseCtrl = require("../controllers/courseManagement.controller")

const Storage = multer.diskStorage({
  destination: "/public/images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  Storage
});

const singleUpload = upload.single("uploadfile")
router.post("/addcourse",verifyToken,courseCtrl.addCourse);
router.put("/editcourse",verifyToken,courseCtrl.editCourse);
router.get("/getInstCourse",verifyToken,courseCtrl.getCoursebyId);
router.get("/getAllCourse",verifyToken,courseCtrl.getAllCourse);


module.exports = router;
