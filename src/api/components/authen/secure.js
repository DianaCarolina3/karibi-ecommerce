const AUTH = require('../../../auth')

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    switch (action) {
      case 'list':
        AUTH.check.Token(req)
        next()
        break

      case 'get':
        AUTH.check.Token(req)
        next()
        break

      default:
        next()
    }
  }
  return middleware
}
