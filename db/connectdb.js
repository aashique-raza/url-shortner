import mongoose from "mongoose";

async function connection(uri){
    try {
       await mongoose.connect(uri, {
            
            
            dbName: process.env.DATABASE_NAME, // Specify the database name here
          });
        console.log('db connect')
        
    } catch (error) {
        console.log('db connect failed',error.message)
    }
    
}

export default connection