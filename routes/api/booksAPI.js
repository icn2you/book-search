const router = require('express').Router()
const booksController = require('../../controllers/booksController')

module.exports = (() => {
  // GET & POST operations for `/api/books` routes
  router.route('/')
    .post(booksController.create)

  // PUT operation for `/api/books/:id` route
  router.route('/:id')

  return router
})()
