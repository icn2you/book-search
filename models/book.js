const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = (() => {
  const BookSchema = new Schema({
    title: { type: String, required: true },
    isbns: [{ type: { type: String }, identifier: { type: String } }],
    authors: [{ type: String, required: true }],
    description: String,
    image: String,
    link: String,
    saved: { type: Boolean, required: true, default: false }
  }, { timestamps: true })

  return mongoose.model('Book', BookSchema)
})()
