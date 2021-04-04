const mongoose = require("mongoose")
const dotenv = require("dotenv")
const colors = require("colors")
//Model 
const User = require("./Models/Users.js")
const {mockUser} = require("./userMock.js")
//Database
const {connectDB} = require("./config/db.js")

//Load Env File
dotenv.config()

//Database Connection Exec
connectDB()

//Import Data
const importData = async ()=>{

    try {
        await User.deleteMany()

        await User.insertMany(mockUser)

        console.log("Data Imported".green.inverse)
        process.exit()
        
        
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit()
    }

}


//Destroy
const destroyData = async()=>{
    try {
        await User.deleteMany()
        console.log("Data Destroyed".red.inverse)
        process.exit()

        
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit()
    }
}


if(process.argv[2] === "-d"){
    destroyData()
}else{
    importData()
}


