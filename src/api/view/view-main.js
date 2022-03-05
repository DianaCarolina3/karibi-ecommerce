const router = require('express').Router()
const path = require('path')

router.get('/', viewMain)

function viewMain(req, res) {
  try {
    res.sendFile(path.join(__dirname), '/public/index.html')
  } catch (error) {
    console.log(error)
  }
}

module.exports = router
