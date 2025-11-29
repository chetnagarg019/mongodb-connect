import mongoose from "mongoose";

const connectDB = async()=>{

    try{
        //connection styling from env file
        await mongoose.connect(process.env.MONGO_URL);
         

        console.log("MongoDB connect succesfully");
        
    }catch(err){
        console.error("MongoDB connection failed")
        console.error(err.message);
        process.exit(1); // force quit
    }
}; 

export default connectDB