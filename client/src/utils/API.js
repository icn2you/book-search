require('dotenv').config()

export default {
  // Google Books API search
  queryGoogleBooksAPI: (searchQuery) => fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
    .then((resp) => resp.json())
    .catch(err => console.error(err.stack)),

  getBooks: (filter) => fetch(`/api/books?${filter}`)
    .then(resp => resp.json())
    .catch(err => console.error(err.stack)),

  saveBook: (book) => fetch('/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  })
    .then(resp => resp.json())
    .catch(err => console.error(err.stack)),

  deleteBook: (id) => fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ saved: false })
  })
}
