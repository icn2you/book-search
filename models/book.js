const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = (() => {
  const BookSchema = new Schema({
    title: { type: String, required: true },
    isbns: [{ type: String }],
    authors: [{ type: String, required: true }],
    description: String,
    image: String,
    link: String
  }, { timestamps: true })

  return mongoose.model('Book', BookSchema)
})()
