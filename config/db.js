

const mongoose = require("mongoose");

module.exports = {

     connectDB: async()=>{
        try {
    
            const conn = await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
            console.log(`MongoDb conected: ${conn.connection.host}`.blue.inverse);
            
        } catch (error) {
            console.log(`Error: ${error.message}`.red.inverse);
            process.exit(1);
            
        }
    }

}









