const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')

module.exports = (() => {
  router.use('/api', apiRoutes)

  // Send every request to React app.
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  return router
})()
