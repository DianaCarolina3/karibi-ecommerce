const viewMain = require('../api/view/view-main')
const user = require('../api/components/user/network')
const authen = require('../api/components/authen/network')
const product = require('../api/components/product/network')

const routes = (app) => {
  app.use('/kari', viewMain)
  app.use('/user', user)
  app.use('/auth', authen)
  app.use('/product', product)
}

module.exports = routes
