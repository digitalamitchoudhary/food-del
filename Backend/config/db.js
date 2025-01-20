import mongoose from "mongoose";

export  const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://rahul:20252025@cluster0.aqnj6.mongodb.net/food-del').then(()=>console.log("DB Connected"));
 }