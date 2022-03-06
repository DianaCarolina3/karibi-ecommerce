const dotenv = require('dotenv')
dotenv.config()

const config = {
  server: {
    port: process.env.PORT_SERVER || 3000,
  },
  mongodb: {
    uri: process.env.URI,
  },
  jwt: {
    secret: process.env.SECRET,
  },
}

module.exports = config
