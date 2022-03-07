const viewMain = require('../api/view/view-main')
const user = require('../api/components/user/network')
const authen = require('../api/components/authen/network')
const product = require('../api/components/product/network')

const HOME_PAGE = '/kari'

const routes = (app) => {
  app.use(HOME_PAGE, viewMain)
  app.use(`${HOME_PAGE}/user`, user)
  app.use(`${HOME_PAGE}/auth`, authen)
  app.use(`${HOME_PAGE}/product`, product)
}

module.exports = routes
