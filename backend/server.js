import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//get all cs members
const csMembers = [
  {
    id: nanoid(),
    firstName: "Corty",
    lastName: "Dixson",
    dateOfBirth: "9/28/2021",
    gender: "Male",
    fathersName: "Corty Dixson",
    mothersName: "Corty Dixson",
    residence: "Room 1887",
    contact: "602-623-5247",
    image: "http://dummyimage.com/186x100.png/ff4444/ffffff",
    age: 10,
  },
  {
    id: nanoid(),
    firstName: "Valencia",
    lastName: "Ride",
    dateOfBirth: "12/23/2019",
    gender: "Female",
    fathersName: "Valencia Ride",
    mothersName: "Valencia Ride",
    residence: "Apt 234",
    contact: "529-649-3079",
    image: "http://dummyimage.com/240x100.png/ff4444/ffffff",
    age: 4,
  },
];

app.get("/api/v1/cs-members", (req, res) => {
  res.status(200).json({
    status: "success",
    results: csMembers.length,
    data: {
      csMembers,
    },
  });
});
//create a new cs member
app.post("/api/v1/cs-member", (req, res) => {
  const { firstName, lastName, dateOfBirth } = req.body;
  if (!firstName || !lastName || !dateOfBirth) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide firstName, lastName and dateOfBirth",
    });
  }
  const newMember = { id: nanoid(), ...req.body };
  csMembers.push(newMember);
  res.status(201).json({
    status: "success",
    data: {
      csMember: newMember,
    },
  });
});
//get a single cs member
app.get("/api/v1/cs-member/:id", (req, res) => {
  const { id } = req.params;
  const csMember = csMembers.find((member) => member.id === id);
  if (!csMember) {
    res.status(404).json({
      status: "fail",
      message: "No cs member found with that ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      csMember,
    },
  });
});
//update a cs member
app.patch("/api/v1/cs-member/:id", (req, res) => {
  if (!req.body) {
    res.status(400).json({
      status: "fail",
      message: "Please provide data to update",
    });
  }
  const { id } = req.params;
  const csMember = csMembers.find((member) => member.id === id);
  if (!csMember) {
    res.status(404).json({
      status: "fail",
      message: `No cs member found with ID ${id}`,
    });
  }
  const updatedMember = { ...csMember, ...req.body };
  res.status(200).json({
    status: "success",
    data: {
      csMember: updatedMember,
    },
  });
});
//delete a cs member
app.delete("/api/v1/cs-member/:id", (req, res) => {
  const { id } = req.params;
  const csMemberIndex = csMembers.findIndex((member) => member.id === id);
  if (csMemberIndex === -1) {
    res.status(404).json({
      status: "fail",
      message: `No cs member found with ID ${id}`,
    });
  }
  csMembers.splice(csMemberIndex, 1);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data received", data: req.body });
});
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
});
const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
