const User = require('../../models/user')

const list = async () => {
  const data = await User.find().exec()

  return data
}

const get = async (id) => {
  const data = await User.where({ id: id }).findOne()

  return data
}

const insert = async (data) => {
  const user = new User({
    name: data.name,
    username: data.username,
    email: data.email,
    password: data.password,
    admin: data.admin,
    dateCreation: data.dateCreation,
  })

  const payload = await user.save()

  return payload
}

const remove = async (id) => {
  const data = await User.findByIdAndDelete(id)

  return data
}

module.exports = { insert, list, get, remove }
