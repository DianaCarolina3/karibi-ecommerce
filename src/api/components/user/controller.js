const error = require('../../../utils/error')
const bcrypt = require('bcrypt')
const store = require('../../../database/mongo/user')
const storeAuth = require('../../../database/mongo/authen')

const list = async () => {
  return await store.list()
}

const get = async (id) => {
  if (!id) {
    throw error('Id invalid or no id', 400)
  }

  return await store.get(id)
}

const insert = async (body) => {
  const pass = body.password
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const passwordHash = bcrypt.hashSync(pass, salt)

  let admin

  const user = {
    username: body.username,
    name: body.name,
    email: body.email,
    password: passwordHash,
    admin: admin,
    dateCreation: new Date(),
  }

  if (!body.admin) {
    let admin = false
    user.admin = admin
  } else {
    let admin = true
    user.admin = admin
  }

  await storeAuth.upsert(user)
  return await store.insert(user)
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
  insert,
  remove,
}
