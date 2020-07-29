require('dotenv').config();

const GOOGLE_BOOKS_API_KEY =
  process.env.GOOGLE_BOOKS_API_KEY ||
  'AIzaSyB0A6aFFmA9_wzo-NbaCX-nlQn2ww2svYA'

export default {
  // Google Books API search
  queryGoogleBooksAPI: (searchQuery) => {
    const queryStr = 
      `${searchQuery}&key=${GOOGLE_BOOKS_API_KEY}`

    // DEBUG:
    /* console.log(
      `process.env.GOOGLE_BOOKS_API_KEY: 
      ${process.env.GOOGLE_BOOKS_API_KEY}`) */
    // console.log(`query string: ${queryStr}`)

    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${queryStr}`)
      .then((resp) => resp.json())
      .catch(err => console.error(err.stack))
  },

  getBooks: (filter) => fetch(`/api/books?${filter}`)
    .then((resp => resp.json()))
    .catch((err => console.error(err.stack))),

  saveBook: (book) => fetch('/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  })
    .then((resp => resp.json()))
    .catch(err => console.error(err.stack)),

  deleteBook: (id) => fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ saved: false })
  })
}
