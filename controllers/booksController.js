const db = require('../models')

module.exports = {
  create: (req, res) => {
    db.Book
      .create(req.body)
      .then(docs => res.json(docs))
      .catch(err => res.status(422).json(err.stack))
  }
}
