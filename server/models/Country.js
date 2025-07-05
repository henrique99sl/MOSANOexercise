import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: String,
  code: String,
});

export default mongoose.model("Country", CountrySchema);
