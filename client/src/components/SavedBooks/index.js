import React from 'react'
import { Typography } from '@material-ui/core'
import { BookCard } from '../'

const SavedBooks = ({ books, msg }) => {
  return (
    <>
      <Typography variant='h4'
        gutterBottom>
        Your Saved Books
      </Typography>
      { books.length
        ? books.map(book =>
          <BookCard
            key={book._id}
            id={book._id}
            title={book.title}
            isbns={book.isbns}
            authors={book.authors}
            desc={book.description}
            link={book.link}
            image={book.image}
            type="saved"
          />
        )
        : <Typography variant="h6" color="secondary">
          {msg}
        </Typography>
      }
    </>
  )
}

export default SavedBooks
