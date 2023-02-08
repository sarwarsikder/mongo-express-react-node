import mongoose from "mongoose";
import {app} from './app';

const port:string|undefined = process.env.SERVEAR_PORT;

const startServer = async() => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URL!)
        console.log("Connected Db");
        app.listen(port, ()=> console.log("Server running on port: " + port));
    }catch(error){
        console.log("Faild to connect with DB")
        console.log(error)
    }
}

startServer();