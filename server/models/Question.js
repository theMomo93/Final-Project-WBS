import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  username:{type:String, required:true },
  
});

export default mongoose.model("Question", questionSchema);