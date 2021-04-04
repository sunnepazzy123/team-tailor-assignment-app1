const express = require("express")
const router = express.Router()
const User = require("../Models/Users.js")
const mockUser = require("../userMock.js")



// @desc Home Route
// @route GET /
// @access Public
router.get("/", async(req, res)=>{

    const users = await User.find()
    // console.log(users)
    if(users){

       res.render("home/index", {title: "TeamTailor Assigment App", users})
    }
})


// @desc About Route
// @route GET /
// @access Public
router.get("/about", async(req, res)=>{
    res.render("home/about")
})



// @desc Docs Route
// @route GET /
// @access Public
router.get("/docs", async(req, res)=>{
    res.render("home/docs")
})








module.exports = router;