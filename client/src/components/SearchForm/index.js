import React, { useContext, useState } from 'react'
import { 
  Box, Button, FormControl, FormHelperText, Paper, TextField, Typography 
} from '@material-ui/core'
import { DataContext } from '../'
import API from '../../utils/API'

const initFormData = Object.freeze({
  query: ''
})

const SearchForm = () => {
  const [formData, setFormData] = useState(initFormData)
  const { dispatch } = useContext(DataContext)

  const handleFormInputChg = ev => {
    const { name, value } = ev.target
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = ev => {
    ev.preventDefault()

    const queryStr = 
      formData.query.trim().toLowerCase().replace(/\s+/g, '+')

    // Clear form input.
    setFormData(initFormData)

    API.queryGoogleBooksAPI(queryStr)
      .then(data => {
        // DEBUG:
        // console.log(data.items)

        const msg = (formData.query ? '' : 'No books found.')
        
        dispatch({ 
          type: 'update',
          query: formData.query,
          data: data.items,
          message: msg
        })
      })
      .catch(err => console.error(err.stack))
  }

  return (
    <Paper>
      <Box px={2} py={2.5}>
        <Typography variant='h4'
          gutterBottom>
          Book Search
        </Typography>
        <form noValidate onSubmit={handleFormSubmit}>
          <FormControl fullWidth>
            <TextField variant="outlined"
              id="search-query"
              name="query"
              label="Search Term(s)"
              value={formData.query}
              onChange={handleFormInputChg} />
            <FormHelperText id="search-query-helper-text">
              Enter the name of a book or author you wish to search for.
            </FormHelperText>
          </FormControl>
          <Box my={1} textAlign="right">
            <Button onClick={handleFormSubmit}>Search</Button>
          </Box>
        </form>
      </Box>
    </Paper>
  )
}

export default SearchForm
