import mongoose, { Schema } from "mongoose";


const postSchema = new Schema(
    {
        name: String,
        company: String,
        email : String,
        phone : Number,
        message : String
    },
    {
        timestamps: true
    })

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
