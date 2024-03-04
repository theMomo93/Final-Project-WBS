import mongoose from "mongoose";

const { Schema } = mongoose;

const replySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Assuming you have a Comment model
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Reply", replySchema);