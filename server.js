// Node dependencies
require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
// const path = require('path')

// HTTP port
const PORT = process.env.PORT || 3001
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooksdb'

// Create Express app and march on!
const app = express()

// Log server activity.
app.use(logger('dev'))

// Serve static assets on production server.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
} /* else {
  express.static(path.join(__dirname, '/public'));
} */

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection
  .on('error', console.error.bind(
    console, 'An error was encountered connecting to the database.'))
  .once('connected', () => {
    console.log('Successfully connected to the database.')
  })

// Launch server and listen for requests.
app.listen(PORT, () => {
  console.log(`🌎 ==> API server running on port ${PORT} ...`)
})
