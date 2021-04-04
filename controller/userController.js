
// import users from "../Users.js"
// import { v4 as uuidv4 } from 'uuid';
const asyncHandler = require('express-async-handler')
const User = require("../Models/Users.js")




// @desc    Get users
// @route   GET /api/users/:id
// @access  Public
const getUsers = asyncHandler(async(req, res)=>{
        const users = await User.find({})
        if(users){
             res.json(users)
        }else{           
            res.status(400)
            throw new Error("Error in query connection")
            
        }
})


// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Public
const getUserId = asyncHandler(async(req, res)=>{

    const user = await User.findById(req.params.id)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404)
        throw new Error('User not found')
    }


})


// @desc    Create user
// @route   POST /api/users/:id
// @access  Public
const createUser = asyncHandler(async(req, res)=>{

    const newMember = {
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }
    //Validate User information
    if(!newMember.name || !newMember.email ){
        res.status(400)
        throw new Error("Please enter name and email")
    }
    //Check if user exist
   const userExists =  await User.findOne({email: newMember.email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }

      //Create a new user instance
     const createdUser = await User.create(newMember)
      //Check user if created
        if(createUser){
            res.status(201).json(createdUser)
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }

})


// @desc    Update user
// @route   PUT /api/users/:id
// @access  Public
const updateUser = asyncHandler(async(req, res)=>{

    const user = await User.findById(req.params.id)

    if(user){

        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            status: updatedUser.status
          })


    }else{
        res.json({msg: "User not found"})
    }

    


})


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async(req, res)=>{

    //Find user
    const user = await User.findById(req.params.id)
    //Check if user exit
    if (user) {
      await user.remove() //delete user
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }

})




module.exports = {
    getUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser,
}


