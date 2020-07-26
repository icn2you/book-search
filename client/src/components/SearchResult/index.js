import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'

const SearchResult = ({ children }) => {
  return (
    <Paper>
      <Box mt={3} px={2} py={2.5}>
        <Typography variant='h4'
          gutterBottom>
          Book Results
        </Typography>
        {children}
      </Box>
    </Paper>
  )
}

export default SearchResult
