import React from 'react'
import {
  AppBar, Button, ButtonGroup, Toolbar, Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: 'black'
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  },
  hoverColor: {
    '&:hover': {
      color: '#11cb5f'
    }
  }
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <LocalLibraryIcon />
          <Typography variant="h6" className={classes.title}>
            Google Books Search
          </Typography>
          <ButtonGroup variant="text"
            color="default"
            aria-label="app navigation button group">
            <Button color="inherit"
              href="/"
              startIcon={<SearchIcon />}
              className={classes.hoverColor}>
              Search
            </Button>
            <Button color="inherit"
              href="/saved"
              startIcon={<BookmarkIcon />}
              className={classes.hoverColor}>
              Saved
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
