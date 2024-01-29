import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "ImigrationProject",
      });
      console.log("MongoDB Connected");
    } catch (error) {
      console.error("MongoDB Connection Failed:", error.message);
      process.exit(1);
    }
  };
  
  connectDB();