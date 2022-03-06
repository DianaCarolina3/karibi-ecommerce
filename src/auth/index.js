const jwt = require('jsonwebtoken')
const config = require('../config')
const error = require('../utils/error')

const SECRET = config.jwt.secret

// Token of log In
const logIn = (pass) => {
  const dataPass = JSON.parse(JSON.stringify(pass))

  return jwt.sign(dataPass, SECRET)
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
      throw error('Invalid token', 401)
    }

    console.log('decoded', decoded)
    return decoded
  },
  Token: function (req) {
    const decoded = decoderHeaderAuth(req)
    return decoded
  },
}

const decoderHeaderAuth = (req) => {
  const autorization = req.headers.autorization
  const token = getToken(autorization)
  const decoded = verify(token)

  console.log('autorization', autorization)
  console.log('req.user', req.user)
  req.user = decoded
  console.log('decoded verify', decoded)
  return decoded
}

module.exports = {
  logIn,
  check,
}
