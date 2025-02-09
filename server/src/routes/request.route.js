const express = require("express");
const Request = require("../models/Request.model");
const router = express.Router();
const { format } = require("date-fns");
router.post("/request", async (req, res) => {
  const now = new Date();
  const Date1 = format(now, "MMM dd yyyy");

  try {
    const { courseid, coursename } = req.body;
    const temp = await Request.findOne({ courseid });
    console.log(temp);

    if (temp && temp.status === "Pending") {
      return res.json({ message: "Course Request already exist" });
    }
    const data = {
      courseid,
      coursename,
      requestat: Date1,
    };
    await Request.create(data);
    res.json({
      message: "Request has been submitted",
    });
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/getRequests", async (req, res) => {
  try {
    const data = await Request.find();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = router;
