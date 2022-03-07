const AUTH = require('../../../auth')

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    switch (action) {
      case 'delete':
        AUTH.check.Token(req)
        next()
        break

      default:
        next()
    }
  }

  return middleware
}
