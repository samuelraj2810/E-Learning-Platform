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
router.use(verifyToken)
router.post("/addcourse",singleUpload,courseCtrl.addCourse);
router.put("/editcourse/:_id",singleUpload,courseCtrl.editCourse);
router.get("/getInstCourse",singleUpload,courseCtrl.getCoursebyId);
router.get("/getAllCourse",singleUpload,courseCtrl.getAllCourse);
router.get("/getCourse/:_id",singleUpload,courseCtrl.getCourse);


module.exports = router;
