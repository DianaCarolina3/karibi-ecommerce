const express = require('express')
const path = require('path')
const config = require('./config')
const router = require('./routes/router')

const app = express()

const PORT = config.server.port

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Public files

app.use('/kari', express.static(path.join(__dirname, '/public')))

// Routes
router(app)

// Redirect
app.use('/', (req, res) => {
  res.redirect('/kari')
})

const server = app.listen(PORT, () => {
  console.log(`Server lintening on the port ${server.address().port}`)
})
