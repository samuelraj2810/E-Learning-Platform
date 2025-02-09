const express = require("express");
const Request = require("../models/Request.model");
const router = express.Router();
const { format } = require("date-fns");
router.post("/request", async (req, res) => {
  const now = new Date();
  const Date = format(now, "MMM dd yyyy hh:mm a");
  console.log(formattedDateTime);

  try {
    const { courseid, coursename } = req.body;
    const data = {
      courseid,
      coursename,
      createdAt:Date
    };
    await Request.create(data);
    res.json({
      message: "Request Submitted",
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
