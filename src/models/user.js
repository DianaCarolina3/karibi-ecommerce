const { Schema, model } = require('mongoose')

const user = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  admin: Boolean,
  dateCreation: Date,
})

const User = model('User', user)

module.exports = User
