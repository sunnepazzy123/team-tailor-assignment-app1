const express = require("express")
const router = express.Router()

const {getUsers, getUserId, createUser, updateUser, deleteUser} = require("../controller/userController.js")


// @desc Fetch all users
// @route GET /api/users
// @access Public
router.get("/", getUsers )

// @desc Fetch Single users
// @route GET /api/users/:id
// @access Public
router.get("/:id", getUserId)

// @desc Create users
// @route GET /api/users
// @access Public
router.post("/", createUser)

// @desc Update users
// @route GET /api/users/:id
// @access Public
router.put("/:id", updateUser)

// @desc Delete users
// @route GET /api/users/:id
// @access Public
router.delete("/:id", deleteUser)




module.exports = router;
