import React from 'react'
import { 
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '25vh'
  },
  media: {
    flex: '1 0 auto',
    maxWidth: 360,
    width: '25%'
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
  }
})

const BookCard = ({ title, isbns, authors, desc, link, image }) => {
  const classes = useStyles()

  return (
    <Box my={3}>
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
              className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2">
              {
                isbns.map((isbn, i) => (
                  `${isbn.type.replace('_', '-')}: ${isbn.identifier}`
                  + ((isbns.length > 1 && i < isbns.length - 1)
                    ? ' / '
                    : '')
                ))
              }
            </Typography>
            <Typography variant="h6">
              by { 
                authors.map((author, i) => {
                  if (authors.length > 1 && i < authors.length - 1) {
                    if (i < authors.length - 2) {
                      return `${author}, `
                    } else {
                      return `${author} & `
                    }
                  } else {
                    return author
                  }
                })
              }
            </Typography>
            <Typography variant="body1" noWrap>{desc}</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Box width={1} textAlign="right">
              <Button href={link}>View</Button>
              <Button>Save</Button>
            </Box>  
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default BookCard
