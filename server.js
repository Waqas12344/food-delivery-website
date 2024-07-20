import express from "express";
import cors  from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
 //app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

// db connnection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter)




app.get("/",(req,res)=>{
res.send("Api working")
})

app.listen(port,()=>{
    console.log(`server started on port : ${port}`)
})

// mongodb+srv://waqas:waqas2021-ag-5936-skp@cluster0.xljv87w.mongodb.net/?

// mongodb+srv://waqas:waqas2021-ag-5936-skp@cluster0.xljv87w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0