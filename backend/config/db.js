import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://dheerajatmakuri:CREEDgym1$@cluster0.yeaeftu.mongodb.net/food').then(()=>console.log(
        "DB connected"
    ));
}