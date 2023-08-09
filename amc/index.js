const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Department = require("./models/department");
const Problem = require("./models/problem");
require("dotenv").config({
  path: __dirname + "/.env"
});


const app = express();

app.use(bodyParser.json());

app.listen(9000, () => {
  console.log("Server started on port 9000");
});

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.use(express.json());

app.delete("/api/department/delete/:id", (req, res) => {
  const departmentId = req.params.id;

  try {
    Department.deleteOne({
      _id: departmentId
    }).then((data) => {
      console.log(data);
    });
  } catch (error) {
    res.json(error);
  }
});

app.post("/api/department/create", async (req, res) => {
  try {
    const {
      name
    } = req.body;
    const department = new Department({
      name,
    });
    department.save().then((data, err) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  } catch (error) {
    res.json(error);
  }
});

app.get("/api/department", async (req, res) => {
  Department.find().then((data, err) => {
    res.json(data);
  });
});

app.post("/api/problem/create", async (req, res) => {
  try {
    const {
      statement,
      deptId
    } = req.body;
    const dept = await Department.findById(deptId);
    if (!dept) {
      return res.status(400).send("Invalid Department");
    } else {
      const problem = new Problem({
        statement,
        deptId,
      });
      problem.save().then((data, err) => {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
      });
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

app.get("/api/problem", async (req, res) => {
  Problem.find().then((data, err) => {
    res.json(data);
  });
});