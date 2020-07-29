const db = require('../models')

module.exports = {
  create: (req, res) => {
    db.Book
      .create(req.body)
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err.stack))
  },

  delete: (req, res) => {
    db.Book
      .findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { upsert: true, useFindAndModify: false })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err.stack))
  },

  findAll: (req, res) => {
    db.Book
      .find(req.query)
      .sort({ 'title': 1 })
      .then(docs => res.json(docs))
      .catch(err => res.status(422).json(err.stack))
  }
}
