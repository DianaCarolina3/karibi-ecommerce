const mongoose = require('mongoose')
const config = require('../../config')

const URI = config.mongodb.uri

async function handleConectionMongo() {
  await mongoose
    .connect(URI)
    .then(() => {
      console.log('Succesful connection mongoDB')
    })
    .catch((err) => {
      console.error('Error in connection with mongo', err)
    })
}

module.exports = handleConectionMongo
