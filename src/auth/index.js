const jwt = require('jsonwebtoken')
const config = require('../config')
const error = require('../utils/error')

const SECRET = config.jwt.secret

// Token of log In
const logIn = (pass) => {
  const dataPass = JSON.parse(JSON.stringify(pass))

  const logToken = jwt.sign(dataPass, SECRET)
  return logToken
}

function verify(token) {
  return jwt.verify(token, SECRET, { expiresIn: '2h' })
}

function getToken(autorization) {
  if (!autorization) {
    throw error('No token, try now', 401)
  }

  if (autorization.indexOf('Bearer ') === -1) {
    throw error('Invalid format', 401)
  }

  let token = autorization.replace('Bearer ', '')
  return token
}

const check = {
  TokenId: function (req, id) {
    const decoded = decoderHeaderAuth(req)

    if (decoded.id !== id) {
      throw error('Invalid token or id', 401)
    }

    return decoded
  },
  Token: function (req) {
    const decoded = decoderHeaderAuth(req)
    return decoded
  },
}

const decoderHeaderAuth = (req) => {
  const autorization = req.headers.authorization || ''
  const token = getToken(autorization)
  const decoded = verify(token)

  req.user = decoded

  return decoded
}

module.exports = {
  logIn,
  check,
}
