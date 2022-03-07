const router = require('express').Router()

const controller = require('./controller')
const response = require('../../../utils/response')
const checkAuth = require('./secure')

// ROUTER
router.get('/', list)
router.get('/:id', get)
router.post('/signup', insert)
router.delete('/:id', checkAuth('delete'), remove)

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

async function insert(req, res, next) {
  try {
    const data = await controller.insert(req.body)

    if (data) {
      res.redirect('/kari/login.html')
    }

    return response.success(req, res, data, 201)
  } catch (error) {
    next(error)

    return response.error(req, res, error.message, 500, error.stack)
  }
}

async function remove(req, res, next) {
  try {
    await controller.remove(req.params.id)

    return response.success(req, res, `user ${req.params.id} removed`, 200)
  } catch (error) {
    next(error)

    return response.error(req, res, error.message, 500, error.stack)
  }
}

module.exports = router
