const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  statement: {
    type: String,
    required: true,
    unique: true,
  },
  deptId: {
    type: String,
    required: true,
    unique: false,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
