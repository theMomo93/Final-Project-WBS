import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({

  content: { type: String, required: true },
  questionId: { type:String},
  userId: { type: String, required: true },
  username: { type: String, required: false },

});

export default mongoose.model("Comment", commentSchema);