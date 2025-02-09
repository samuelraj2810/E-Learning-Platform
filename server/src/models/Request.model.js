const mongoose = require("mongoose");
const { v4 } = require("uuid");
const ReqSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  courseid: String,
  coursename: String,
  status: {
    type: String,
    default: "Pending",
  },
  description: { type: String, default: "Request To Delete This Course" },
});

const Request = mongoose.model("Requests", ReqSchema);

module.exports = Request;
