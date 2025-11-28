// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import User from "./model/user.js";

// dotenv.config();

// const app = express();
// app.use(express.json());

// connectDB();

// app.post('/users',async(req,res) => {
//     try{
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     }catch(error){
//         res.status(500).json({
//             error:err.message,
//         });
//     }
// });

// const PORT = process.env.PORT || 5002;
// app.listen(PORT,() => {
//     console.log(`Server is running ${PORT}`);
    
// })   

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

// server
app.get("/", (req, res) => {
  res.send("Server is working  ...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 