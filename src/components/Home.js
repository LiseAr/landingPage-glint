import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, IconButton, Typography } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    fontFamily: 'Nunito',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomePart: {
    padding: '10%',
  },
  welcome: {
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  welcomeDescription: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 60,
    fontWeight: 600,
    width: '60vw',
    lineHeight: '5rem',
  },
  buttonGroup: {
    marginTop: 100,
  },
  button: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.2rem',
    borderColor: 'white',
    borderRadius: 0,
    borderWidth: 2,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginRight: 20,
    transitionDuration: 1000,
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  socialMedia: {
    width: 'fit-content',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
    marginRight: 10,
  },
  mediaIconWrapper: {

  },
  mediaIcon: {
    color: '#fff',
    fontSize: '1.2rem',
  }
}));

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Box
        className={classes.content}
      >
        <Box
          className={classes.welcomePart}
        >
          <h3 className={classes.welcome}>
            Welcome To Glint
          </h3>
          <Typography
            className={classes.welcomeDescription}
          >
            We are a creative group
            of people who design
            influential brands and
            digital experiences.
          </Typography>
          <Box className={classes.buttonGroup}>
            <Button
              className={classes.button}
              variant="outlined"
            >
              Start a Project
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
            >
              More Aboute Us
            </Button>
          </Box>
        </Box>

        <Box className={classes.socialMedia}>
          <IconButton className={classes.mediaIconWrapper}>
            <FacebookIcon className={classes.mediaIcon} />
          </IconButton>
          <IconButton className={classes.mediaIconWrapper}>
            <TwitterIcon className={classes.mediaIcon} />
          </IconButton>
          <IconButton className={classes.mediaIconWrapper}>
            <InstagramIcon className={classes.mediaIcon} />
          </IconButton>
        </Box>
      </Box>
    </div >
  )
}
