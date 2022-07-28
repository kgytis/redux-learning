import mongoose from "mongoose";
const { Schema } = mongoose;
const PostSchema = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
const PostMessage = mongoose.model("PostMessage", PostSchema);
export default PostMessage;
