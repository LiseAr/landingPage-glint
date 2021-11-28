import React, { useEffect, useState } from 'react'

import { Box, Button, Collapse, Grow, IconButton, Typography } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { useStyles } from './styles';

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
