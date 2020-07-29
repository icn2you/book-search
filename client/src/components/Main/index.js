import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'

const Main = ({ children }) => {
  return (
    <main>
      <CssBaseline />
      <Container maxWidth="md">
        {children}
      </Container>
    </main>
  )
}

export default Main
