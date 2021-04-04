const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      default: "users",
    },
   
  },
  {
    timestamps: true,
  }
)



// const User = mongoose.model('User', userSchema)

module.exports = mongoose.model('User', userSchema);

