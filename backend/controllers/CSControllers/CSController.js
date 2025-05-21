import { nanoid } from "nanoid";
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

//get all cs members
export const getAllCSMembers = async (req, res) => {
  res.status(200).json({
    status: "success",
    results: csMembers.length,
    data: {
      csMembers,
    },
  });
};
//create a new cs member
export const createCSMember = async (req, res) => {
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
};
//get a single cs member
export const getCSMember = async (req, res) => {
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
};
//update a cs member
export const updateCSMember = async (req, res) => {
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
    return;
  }
  const updatedMember = { ...csMember, ...req.body };
  res.status(200).json({
    status: "success",
    data: {
      csMember: updatedMember,
    },
  });
};
//delete a cs member
export const deleteCSMember = async (req, res) => {
  const { id } = req.params;
  const csMemberIndex = csMembers.findIndex((member) => member.id === id);
  if (csMemberIndex === -1) {
    res.status(404).json({
      status: "fail",
      message: `No cs member found with ID ${id}`,
    });
  }
  csMembers.splice(csMemberIndex, 1);
  res.status(204).send();
};
