const router = require('express').Router()

const controller = require('./controller')
const response = require('../../../utils/response')

// ROUTER
router.get('/list', list)
router.get('/list/:id', get)
router.post('/login', login)

function login(req, res, next) {
  controller
    .login(req.body.username, req.body.password, req.body.email)
    .then((data) => {
      return response.success(req, res, data, 200)
    })
    .catch(next)
}

async function list(req, res, next) {
  try {
    const data = await controller.list()

    return response.success(req, res, data, 200)
  } catch (error) {
    next(error)

    return response.error(req, res, error.message, 500, error.stack)
  }
}

async function get(req, res, next) {
  try {
    const data = await controller.get(req.params.id)

    return response.success(req, res, data, 200)
  } catch (error) {
    next(error)

    return response.error(req, res, error.message, 500, error.stack)
  }
}

module.exports = router
