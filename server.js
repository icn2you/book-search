// Node dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const logger = require('morgan')

// HTTP port
const PORT = process.env.PORT || 3001

// Create Express app and march on!
const app = express()

// Log server activity.
app.use(logger('dev'));

// Serve static assets on production server.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Send every request to React app.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Launch server and listen for requests.
app.listen(PORT, () => {
  console.log(`🌎 ==> API server running on port ${PORT} ...`)
})
