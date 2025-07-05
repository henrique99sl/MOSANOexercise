import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  country: String,
  birthday: String,
});

export default mongoose.model("User", UserSchema);
