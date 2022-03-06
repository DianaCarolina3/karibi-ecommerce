const { Schema, model } = require('mongoose')

const product = new Schema({
  img: String,
  title: String,
  price: String,
  description: String,
  dateCreation: Date,
})

const Product = model('Product', product)

module.exports = Product
