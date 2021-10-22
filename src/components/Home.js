import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Collapse, Fade, Grow, IconButton, Typography } from '@material-ui/core';

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

  const [checked, setChecked] = useState(false);
  const [showStartProjectButton, setShowStartProjectButton] = useState(false);
  const [showMoreAboutButton, setShowMoreAboutButton] = useState(false);

  useEffect(() => {
    setChecked(true);
    setTimeout(() => {
      setShowStartProjectButton(true)
      setTimeout(() => {
        setShowMoreAboutButton(true)
      }, 700);
    }, 800);
  }, []);

  return (
    <div className={classes.root} id="home">

      <Box
        className={classes.content}
      >
        <Box
          className={classes.welcomePart}
        >
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={0}
          >
            <h3 className={classes.welcome}>
              Welcome To MySpace
          </h3>

            <Typography
              className={classes.welcomeDescription}
            >
              Solutions that improve people's quality of life,
              simplify their lives and expand possibilities
          </Typography>
          </Collapse>

          <Box className={classes.buttonGroup}>
            <Grow
              in={showStartProjectButton}
              style={{ transformOrigin: '0 0 0' }}
              {...(showStartProjectButton ? { timeout: 1000 } : {})}
            // collapsedHeight={0}
            >
              <Button
                className={classes.button}
                variant="outlined"
              >
                Let's Do It
            </Button>
            </Grow>
            <Grow
              in={showMoreAboutButton}
              style={{ transformOrigin: '0 0 0' }}
              {...(showMoreAboutButton ? { timeout: 1000 } : {})}
            // collapsedHeight={0}
            >
              <Button
                className={classes.button}
                variant="outlined"
              >
                More About
            </Button>
            </Grow>
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
