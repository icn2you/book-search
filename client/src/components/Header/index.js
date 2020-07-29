import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { NavBar } from '../../components'

const Header = () => {
  return (
    <header>
      <Box alignItems="center">
        <NavBar />
        <Grid>
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography variant='h2'
                align="center"
                gutterBottom>
                Google Books Search
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </header>
  )
}

export default Header
