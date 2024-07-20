import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://waqas:waqas2021-ag-5936-skp@cluster0.xljv87w.mongodb.net/food-dev').then(()=>console.log("DB connected"));
}
