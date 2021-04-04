const express = require("express")
const path = require("path")
const app = express()
const exphbs = require('express-handlebars');
const Handlebars = require("handlebars");
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");


const colors = require("colors")
const morgan = require("morgan");
const dotenv = require("dotenv")
dotenv.config()

//Database connection
const {connectDB} = require("./config/db.js")
connectDB()


//set static folder
app.use(express.static(path.join(__dirname, "public/css")))


//Mock Data or Model
//const users = require("./Users.js")
const User = require("./Models/Users.js")




//Logger middlewares
// import logger from "./middlewares/logger.js"
// app.use(logger)
app.use(morgan("dev"))



//Handlebars Middlewares
app.engine('handlebars', exphbs({defaultLayout: "main", 
handlebars: allowInsecurePrototypeAccess(Handlebars),
}));
app.set('view engine', 'handlebars');




//Middleware
app.use(express.json()) //body parser
app.use(express.urlencoded({extended: false})) //form submission


//Load Route
const userRoute =  require("./route/userRoute.js")
const homeRoute = require("./route/homeRoute.js")
const { errorHandler, notFound } = require("./middlewares/errorMiddlewares.js");



//Use Route
app.use("/", homeRoute)
app.use("/api/users", userRoute)



//Fallback for 404 Error (Not Found)
app.use(notFound)

//Custom Error Handler
app.use(errorHandler)






//Port
const PORT = process.env.PORT || 777

//Listening 
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))