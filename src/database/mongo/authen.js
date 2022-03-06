const Authen = require('../../models/authen')

const list = async () => {
  const data = await Authen.find()
  return data
}

const get = async (id) => {
  const data = await Authen.where({ _id: id }).findOne()
  return data
}

const query = async (data) => {
  const user = data.username
  const email = data.email

  const items = await list()

  const payload = items.map((item) => {
    if (item.username === user && item.email === email) {
      return item.password
    }
  })

  const result = payload.filter((itemsArray) => {
    return itemsArray != undefined
  })

  return result[0]
}

const insert = async (data) => {
  const auth = new Authen({
    username: data.username,
    email: data.email,
    password: data.password,
    dateCreation: data.dateCreation,
  })

  const items = await auth.save()
  return items
}

const update = async (id, data) => {
  const auth = new Authen.findByIdAndUpdate(
    { _id: id },
    {
      username: data.username,
      password: data.password,
      dateCreation: data.dateCreation,
    }
  )

  const items = await auth.save()
  return items
}

const upsert = async (data) => {
  console.log(await get(data.id))
  const ID = await get(data.id)
  if (ID) {
    return update(data)
  } else {
    return insert(data)
  }
}

module.exports = { list, get, query, upsert }
