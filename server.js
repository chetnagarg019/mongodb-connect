import express from "express";
import dotenv from "dotenv"; //secret files 
import connectDB from "./config/db.js"; //db.js file ke ander ek function hai connect krne ka
import User from "./model/user.js"; // data kis form me aayega

dotenv.config(); //

const app = express(); 
app.use(express.json()); //json format ke andr 

connectDB(); //function call databse se connect krwayega

app.post('/users',async(req,res) => { 
    try{
        const user = await User.create(req.body);
        res.status(201).json({user,message:'sucess'});
    }catch(error){
        res.status(500).json({
            error:error.message,
        });
    }
});

app.delete('/users', async (req, res) => {
    try {
        const { email } = req.body;   // body se name nikala

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User deleted successfully',
            user
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


app.get('/',(req,res)=>{
    res.send('Server is working');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is running bro ${PORT}`);
    
})    
