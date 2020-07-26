import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { 
  Header, Main, Footer, SearchForm, SearchResult 
} from '../components'
// import { API } from '../utils'

const useStyles = makeStyles(theme => ({
  // CSS styles
}))

const Search = (props) => {
  // state variables
  const classes = useStyles()

  useEffect(() => {

  }, [])

  return (
    <>
      <Header />
      <Main>
        <Grid alignItems="center">
          <Grid item xs={12}>
            <SearchForm />
          </Grid>
          <Grid item xs={12}>
            <SearchResult />          
          </Grid>
        </Grid>
      </Main>
      {/* <Footer /> */}
    </>
  )
}

export default Search
