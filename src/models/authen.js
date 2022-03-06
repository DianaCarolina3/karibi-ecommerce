const { Schema, model } = require('mongoose')

const authen = new Schema({
  username: String,
  email: String,
  password: String,
  dateCreation: Date,
})

const Authen = model('Authen', authen)

module.exports = Authen
