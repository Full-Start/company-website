import mongoose, { Schema } from "mongoose";

const newSchema = new Schema(
  {
    title: String,
    img: String,
    desc: String,
    date: String,
  },
  {
    timestamps: true
  }
);

const New = mongoose.models.New || mongoose.model("New", newSchema);
export default New;
