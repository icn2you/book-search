import React from 'react'
import {
  AppBar, Button, ButtonGroup, Toolbar, Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  }
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Google Books
          </Typography>
          <ButtonGroup variant="text"
            color="primary"
            aria-label="app navigation button group">
            <Button color="inherit" href="/">Search</Button>
            <Button color="inherit" href="/saved">Saved</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
