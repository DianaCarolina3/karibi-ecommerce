const bcrypt = require('bcrypt')
const store = require('../../../database/mongo/authen')
const error = require('../../../utils/error')
const AUTH = require('../../../auth')

const list = async () => {
  return await store.list()
}

const get = async (id) => {
  if (!id) {
    throw error('Id invalid or no id', 400)
  }

  return await store.get(id)
}

const login = async (username, password, email) => {
  let userQuery = {
    username: username,
    email: email,
  }
  const dataPass = await store.query(userQuery)

  //verificar que contrasena sea igual a la que viene de los datos
  return bcrypt.compare(password, dataPass).then((isSame) => {
    if (isSame === true) {
      return AUTH.logIn(dataPass)
    } else {
      throw error('Invalid password, username or email', 401)
    }
  })
}

module.exports = {
  list,
  get,
  login,
}
