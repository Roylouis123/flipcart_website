import mongoose  from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

console.log(process.env.DB_PASSWORD,"=============")

 const Connection = async () => {

  const url =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@flipcart.rhfdfke.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url,{useUnifiedTopology:true, usenewUrlParser:true});
        console.log("Connected to database");
    } catch (error) {
       console.log("Error while connecting to database",error); 
    }
}

export default Connection;