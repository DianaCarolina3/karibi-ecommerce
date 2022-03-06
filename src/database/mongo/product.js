const Product = require('../../models/product')

const list = async () => {
  const data = await Product.find().exec()

  return data
}

const get = async (id) => {
  const data = await Product.where({ id: id }).findOne()

  return data
}

const insert = async (data) => {
  const product = new Product({
    img: data.img,
    title: data.title,
    price: data.price,
    description: data.description,
    dateCreation: data.dateCreation,
  })

  const payload = await product.save()

  return payload
}

const update = async (data, id) => {
  await Product.findByIdAndUpdate(
    { _id: id },
    {
      img: data.img,
      title: data.title,
      price: data.price,
      description: data.description,
      dateCreation: data.dateCreation,
    },
    { upsert: true }
  )
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.error(err)
    })
}

const upsert = (data, id) => {
  if (id) {
    return update(data, id)
  } else {
    return insert(data)
  }
}

const remove = async (id) => {
  const data = await Product.findByIdAndDelete(id)

  return data
}

module.exports = { upsert, list, get, remove }
