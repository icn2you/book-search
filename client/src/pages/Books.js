import React, { useReducer } from 'react'
import { Grid } from '@material-ui/core'
import { 
  BookResults, DataContext, Header, Main, Footer, SearchForm 
} from '../components'

const reducer = (state, action) => {
  if (action.type === 'update') {
      return { 
        queryStr: action.query,
        bookData: action.data, 
        userMsg: action.message
      }
  } else {
      return new Error(
        'Your reducer attempted to perform an undefined operation.')
  }
}

const Books = ({ type }) => {
  // state variables
  const [state, dispatch] = 
    useReducer(reducer, { queryStr: '', bookData: [], userMsg: '' })

  return <>
    <Header />
    <Main alignItems="center">
      <DataContext.Provider value={{ state, dispatch }}>
        <Grid>
          { (type === 'search')
            ? <Grid item xs={12}>
                <SearchForm />
              </Grid>
            : ``
          }
          <Grid item xs={12}>
            <BookResults type={type} />          
          </Grid>
        </Grid>
      </DataContext.Provider>
    </Main>
    <Footer />
  </>;
}

export default Books
