const dotenv = require('dotenv')
dotenv.config()

const config = {
  server: {
    port: process.env.PORT_SERVER || 3000,
  },
}

module.exports = config
