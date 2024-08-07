import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://abhinav07:gloom123@cluster0.ljkckkz.mongodb.net/blog-app');
    console.log("DB Connected");
}