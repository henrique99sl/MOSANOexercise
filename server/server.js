import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect("mongodb://127.0.0.1:27017/fdv", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error(err));

app.listen(4000, () => {
  console.log("🚀 Server listening on port 4000");
});
