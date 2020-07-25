import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'

const Main = ({children}) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {children}
      </Container>
    </>
  )
}

export default Main
