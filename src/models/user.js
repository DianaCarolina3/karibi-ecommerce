const { Schema, model } = require('mongoose')

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
  },
  dateCreation: {
    type: Date,
    required: true,
  },
})

const User = model('User', user)

module.exports = User
