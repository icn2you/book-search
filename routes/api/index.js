const router = require('express').Router()
const bookRoutes = require('./books')

module.exports = (() => {
  // book routes
  router.use('/books', bookRoutes)

  return router
})()
