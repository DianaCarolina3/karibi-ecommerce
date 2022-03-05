const viewMain = require('../api/view/view-main')

const routes = (app) => {
  app.use('/kari', viewMain)
}

module.exports = routes
