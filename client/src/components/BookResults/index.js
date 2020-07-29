import React, { useContext, useEffect, useState } from 'react'
import { Box, Paper } from '@material-ui/core'
import { DataContext, GoogleBooks, SavedBooks } from '..'
import API from '../../utils/API'

const BookResults = ({ type }) => {
  const { state } = useContext(DataContext)
  const [books, setBooks] = useState([])

  useEffect(() => {
    if (type === 'saved') {
      loadSavedBooks()
    }
  }, [type])

  const loadSavedBooks = () => {
    API.getBooks('saved=true')
      .then(res => setBooks(res))
      .catch(err => console.error(err.stack))
  }

  return (
    <Paper>
      <Box mt={3} px={2} py={2.5}>
        { (type === 'search')
          ? <GoogleBooks
            search={state.userMsg}
            books={state.bookData}
            msg={state.userMsg} />
          : <SavedBooks
            books={books}
            msg="You have not saved any books." />
        }
      </Box>
    </Paper>
  )
}

export default BookResults
