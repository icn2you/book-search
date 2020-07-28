const router = require('express').Router()
const bookRoutes = require('./booksAPI')

module.exports = (() => {
  // book routes
  router.use('/books', bookRoutes)

  return router
})()
