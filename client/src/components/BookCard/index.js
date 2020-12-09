import React, { useState } from 'react'
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import API from '../../utils/API'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  media: {
    maxWidth: 360,
    width: '30%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  title: {
    fontWeight: 'bold'
  },
  removed: {
    display: 'none'
  }
})

const BookCard = ({ id, title, isbns, authors, desc, image, link, type }) => {
  const [displayed, setDisplayed] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const classes = useStyles()

  const handleDeleteBook = () => {
    API.deleteBook(id)
      .then(({ ok }) => (ok ? setDisplayed(false) : null))
      .catch(err => console.error(err.stack))
  }

  const handleSaveBook = () => {
    API.saveBook({
      title: title,
      isbns: isbns,
      authors: authors,
      description: desc,
      image: image,
      link: link,
      saved: true
    })
      .then(() => setDisabled(true))
      .catch(err => console.error(err.stack))
  }

  return (
    <Box my={3} className={displayed ? null : classes.removed}>
      <Card className={classes.root}>
        <CardMedia
          image={image}
          title={title}
          className={classes.media} />
        <Box overflow="hidden"
          textOverflow="ellipsis"
          width={1}
          className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5"
              noWrap
              className={classes.title}>
              {title}
            </Typography>
            { isbns
              ? <Typography variant="body2">
                {
                  isbns.map((isbn, i) => (
                    `${isbn.type.replace('_', '-')}: ${isbn.identifier}` +
                    ((isbns.length > 1 && i < isbns.length - 1)
                      ? ' / '
                      : '')
                  ))
                }
              </Typography>
              : ''
            }
            { authors
              ? <Typography variant="h6" noWrap>
                {
                  authors.map((author, i) => {
                    const by = (i === 0) ? 'by ' : ''

                    if (authors.length > 1 && i < authors.length - 1) {
                      if (i < authors.length - 2) {
                        return `${by}${author}, `
                      } else {
                        return `${by}${author} & `
                      }
                    } else {
                      return `${by}${author}`
                    }
                  })
                }
              </Typography>
              : ''
            }
            <Typography variant="body1" noWrap>{desc}</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Box width={1} textAlign="right">
              <Button color="primary"
                href={link}
                target="_blank">
                View
              </Button>
              { (type === 'search')
                ? <Button color="primary"
                  disabled={disabled}
                  onClick={handleSaveBook}>
                  {disabled ? 'Saved' : 'Save'}
                </Button>
                : <Button color="secondary"
                  onClick={handleDeleteBook}>
                    Delete
                </Button>
              }
            </Box>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default BookCard
