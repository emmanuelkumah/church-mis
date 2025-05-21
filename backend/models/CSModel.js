import mongoose from "mongoose";

const CSSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    age: String,
    fatherName: String,
    motherName: String,
    contact: String,
    residence: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CSMember", CSSchema);
