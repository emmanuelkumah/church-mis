import mongoose from "mongoose";

const CSSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      max: 14,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    fathersName: {
      type: String,
      required: true,
    },
    mothersName: {
      type: String,
      required: true,
    },
    contact: String,
    residence: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CSMember", CSSchema);
