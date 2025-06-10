import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
//exclude password from the response
UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};
export default mongoose.model("User", UserSchema);
