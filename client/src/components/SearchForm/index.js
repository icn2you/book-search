import React from 'react'
import { 
  Box, Button, FormControl, FormHelperText, Paper, TextField, Typography 
} from '@material-ui/core'

const SearchForm = () => {
  return (
    <Paper>
      <Box px={2} py={2.5}>
        <Typography variant='h3'
          gutterBottom>
          Book Search
        </Typography>
        <form noValidate>
          <FormControl fullWidth>
            <TextField variant="outlined"
              id="search-query"
              label="Search Term(s)" />
            <FormHelperText id="search-query-helper-text">
              Enter the name of a book or author you wish to search for.
            </FormHelperText>
          </FormControl>
          <Box my={1} textAlign="right">
            <Button>Search</Button>
          </Box>
        </form>
      </Box>
    </Paper>
  )
}

export default SearchForm
