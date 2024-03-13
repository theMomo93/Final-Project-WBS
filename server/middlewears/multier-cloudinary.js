import cloudinary from "cloudinary";
import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import dotenv from "dotenv"
import User from "../models/User.js";

dotenv.config();

const cloudinaryV2 = cloudinary.v2;
cloudinaryV2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
const storage = new CloudinaryStorage({
    cloudinary: cloudinaryV2,
    params:{
        folder: "UserProfileImage",
        format: async (req, file) => {
            const extension = file.mimetype.includes("image") ? file.mimetype.slice(6) : ""
            return extension
        },
        public_id:(req, file)=> Date.now(),
    }
});
const upload = multer({ storage });


export default upload;