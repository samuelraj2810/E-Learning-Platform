const courseDetails = require("../models/course.model");
const instructorDetails = require("../models/instructorDetails.model");
const fs = require("fs");
const addCourse = async (req, res) => {
  try {
    const instructorId = req.userId;
    const insdata = await instructorDetails.findOne({ userId: instructorId });
    console.log(insdata);
    const instructorName = insdata.name;
    const imagefile = req.files["image"] ? req.files["image"][0] : null;
    const videofile = req.files["video"] ? req.files["video"][0] : null;
    const data = {
      ...req.body,
      instructorId,
      instructorName,
      imagePath: `/upload/${imagefile.filename}`,
      imageName: imagefile.filename,
      videoPath: `/upload/${videofile.filename}`,
      videoName: videofile.filename,
    };

    const data1 = await courseDetails.create(data);
    res.json({
      data,
      message: "New Course Added Successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const editCourse = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(_id);

    const imagefile = req.files["image"] ? req.files["image"][0] : null;
    const videofile = req.files["video"] ? req.files["video"][0] : null;
    const oldData = await courseDetails.findById(_id);
    if (!oldData) {
      return res.status(404).json({ messge: "data not found" });
    }
    const newdata = {
      ...req.body
    };

    if (imagefile && oldData.filename) {
      fs.unlinkSync(`src/public/coursefiles/${oldData.imageName}`),
        (newdata.imagePath = `/upload/${imagefile.filename}`),
        (newdata.imageName = imagefile.filename);
    }

    if (videofile && oldData.filename) {
      fs.unlinkSync(`src/public/coursefiles/${oldData.videoName}`),
        (newdata.videoPath = `/upload/${videofile.filename}`),
        (newdata.videoName = videofile.filename);
    }

    console.log("success");

    const updatedData = await courseDetails.findOneAndUpdate({ _id }, newdata, {
      new: true,
    });
    if (!updatedData) {
      return res.status(403).json({ message: "no data found" });
    }
    res.json({
      updatedData,
      message: "Course edited Successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const getCoursebyId = async (req, res) => {
  try {
    const instructorId = req.userId;
    const data = await courseDetails.find({ instructorId });
    console.log("hit");

    if (!data) {
      return res.status(403).json({ message: "no data found" });
    }
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};
const getAllCourse = async (req, res) => {
  try {
    const data = await courseDetails.find();
    if (!data) {
      return res.status(403).json({ message: "no data found" });
    }
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};
const getCourse = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await courseDetails.findOne({ _id });
    console.log(data);

    if (!data) {
      return res.status(403).json({ message: "no data found" });
    }
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await courseDetails.findById({ _id });
    if (data) {
      fs.unlinkSync(`src/public/coursefiles/${data.imageName}`);
      fs.unlinkSync(`src/public/coursefiles/${data.videoName}`);
    } else {
      return res.status(403).json({ message: "no data found" });
    }

    const data1 = await courseDetails.findByIdAndDelete(_id);
    res.json({
      message: "course deleted successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  addCourse,
  editCourse,
  getAllCourse,
  getCoursebyId,
  getCourse,
  deleteCourse,
};
