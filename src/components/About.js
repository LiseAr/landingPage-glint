import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box, Button, Divider, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#39b54a',
    height: '100vh',
  },
  content: {
    padding: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height: '70vh',
  },
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60vw',
  },
  preTitle: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: 1.333,
    letterSpacing: '.15rem',
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '4.7rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  dividerHorizontal: {
    width: '45%',
    backgroundColor: 'rgba(255,255,255,.25)',
    height: 1,
  },
  dividerVertical: {
    backgroundColor: 'rgba(255,255,255,.25)',
    // height: 2,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '65vw',
    color: '#010507',
    fontFamily: 'Lora',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.8,
  },
  indices: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70vw',
    height: '14vh',
  },
  indice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  number: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '6rem',
    fontWeight: 700,
    lineHeight: 1,
  },
  numberDescription: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.333,
  }
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.greeting}>
          <div className={classes.preTitle}>
            Hello There
        </div>
          <div className={classes.title}>
            We Are Glint
        </div>
        </div>
        <Divider variant="middle" className={classes.dividerHorizontal} />
        <Typography align='center' className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </Typography>
        <Box className={classes.indices}>
          <div className={classes.indice}>
            <div className={classes.number}>
              127
            </div>
            <div className={classes.numberDescription}>
              Awards Received
            </div>
          </div>
          <Divider orientation="vertical" flexItem className={classes.dividerVertical} />
          <div className={classes.indice}>
            <div className={classes.number}>
              1505
            </div>
            <div className={classes.numberDescription}>
              Cups of Coffee
            </div>
          </div>
          <Divider orientation="vertical" flexItem className={classes.dividerVertical} />
          <div className={classes.indice}>
            <div className={classes.number}>
              109
            </div>
            <div className={classes.numberDescription}>
              Projects Completed
            </div>
          </div>
          <Divider orientation="vertical" flexItem className={classes.dividerVertical} />
          <div className={classes.indice}>
            <div className={classes.number}>
              102
            </div>
            <div className={classes.numberDescription}>
              Happy Clients
            </div>
          </div>
        </Box>
      </div>
    </div >
  )
}
