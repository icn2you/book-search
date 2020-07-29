import React from 'react'
import { Typography } from '@material-ui/core'
import { BookCard } from '../'

const GoogleBooks = ({ search, books, msg }) => {
  return (
    <>
      <Typography variant='h4'
        gutterBottom>
        Book Results {
          search ? `for “${search}”` : ''
        }
      </Typography>
      { books.length
        ? books.map(book =>
          <BookCard
            key={`${book.id}${book.etag}`}
            title={book.volumeInfo.title}
            isbns={book.volumeInfo.industryIdentifiers || []}
            authors={book.volumeInfo.authors || []}
            desc={book.volumeInfo.description || ''}
            link={book.volumeInfo.infoLink || ''}
            image={book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : '../assets/img/open-book.jpg'}
            type="search"
          />
        )
        : <Typography variant="h6" color="secondary">
          {msg}
        </Typography>
      }
    </>
  )
}

export default GoogleBooks
