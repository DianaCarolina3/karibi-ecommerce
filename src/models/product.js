const { Schema, model } = require('mongoose')

const product = new Schema({
  img: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  dateCreation: {
    type: Date,
    required: true,
  },
})

const Product = model('Product', product)

module.exports = Product
