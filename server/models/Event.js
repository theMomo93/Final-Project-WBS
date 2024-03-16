import mongoose from "mongoose";


const { Schema } = mongoose;


const eventSchema = new Schema ({
    title:{type:String, required:true},
    time: {type:String, required:true},
    description:{type:String, required:true},
    street:{type:String, required:true},
    city:{type:String, required:true},
    username:{type:String, require:true}
    
})
export default mongoose.model("Event", eventSchema)