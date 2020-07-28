import React, { useContext } from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { DataContext, BookCard } from '../'

const SearchResult = () => {
  const { state } = useContext(DataContext)

  return (
    <Paper>
      <Box mt={3} px={2} py={2.5}>
        <Typography variant='h4'
          gutterBottom>
          Book Results {
            state.queryStr ? `for “${state.queryStr}”` : ''
          }
        </Typography>
        { state.bookData.length
          ? state.bookData.map(book =>
              <BookCard 
                key={book.id}
                title={book.volumeInfo.title}
                isbns={book.volumeInfo.industryIdentifiers}
                authors={book.volumeInfo.authors}
                desc={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                image={book.volumeInfo.imageLinks.thumbnail}
              />
            )
          : <Typography variant="h6" color="secondary">
              {state.userMsg}
            </Typography>  
        }
      </Box>
    </Paper>
  )
}

export default SearchResult
