const express = require('express')
const path = require('path')
const config = require('./config')
const router = require('./routes/router')
const handleConectionMongo = require('./database/connection')

const app = express()

const PORT = config.server.port

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Public files

app.use('/kari', express.static(path.join(__dirname, 'public')))

// Routes
router(app)

const server = app.listen(PORT, () => {
  handleConectionMongo()
  console.log(`Server lintening on the port ${server.address().port}`)
})
