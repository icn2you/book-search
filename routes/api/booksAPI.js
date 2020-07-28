const router = require('express').Router()

module.exports = (() => {
  // GET
  router.route('/api/books')

  // POST
  router.route('/api/books')

  // PUT
  router.route('/api/books/:id')

  return router
})()
