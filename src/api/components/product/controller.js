const error = require('../../../utils/error')
const store = require('../../../database/mongo/product')

const list = async () => {
  return await store.list()
}

const get = async (id) => {
  if (!id) {
    throw error('Id invalid or no id', 400)
  }

  return await store.get(id)
}

const upsert = async (body, id) => {
  const product = {
    img: body.img,
    title: body.title,
    price: '$ ' + body.price,
    description: body.description,
    dateCreation: new Date(),
  }

  return await store.upsert(product, id)
}

const remove = async (id) => {
  if (!id) {
    throw error('Id invalid or no id', 400)
  }
  return await store.remove(id)
}

module.exports = {
  list,
  get,
  upsert,
  remove,
}
