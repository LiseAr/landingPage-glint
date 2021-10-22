import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Collapse, Divider, Typography } from '@material-ui/core';
import { useState } from 'react';
import Indice from './Indice';
import { useLayoutEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0a80c2',
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
    width: '65vw',
    marginTop: 30,
    // backgroundColor: 'black',
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
    fontSize: '4.0rem',
    fontWeight: 600,
    lineHeight: 1.25,
    textAlign: 'center',
    marginBottom: 40,
  },
  dividerHorizontal: {
    width: '45%',
    backgroundColor: 'rgba(255,255,255,.25)',
    height: 1,
    marginBottom: 40,
  },
  dividerVertical: {
    backgroundColor: 'rgba(255,255,255,.25)',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70vw',
    color: '#010507',
    fontFamily: 'Lora',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.8,
  },
  indices: {
    marginTop: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80vw',
    height: '14vh',
  },
  indice: {
    Width: '20vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  number: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '5.5rem',
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


const PROJECTS_COMPLETED = 30;
const CUPS_OF_COFFE = 2160;
const HOURS_WORKING = 5760;
const IMPACTED_LIVES = 37293;

export default function About() {

  const classes = useStyles();
  const [startCount, setStartCount] = useState(false);
  const [showGreetings, setShowGreetings] = useState(false);

  useLayoutEffect(() => {
    function verifyPosition() {
      if (
        window.pageYOffset > (window.document.getElementById('about').offsetHeight * 0.5)
      ) {
        setShowGreetings(true);
        setTimeout(() => {
          setStartCount(true);
        }, 1200);
      }
    }
    window.addEventListener('scroll', verifyPosition);
    verifyPosition();
    return () => window.removeEventListener('scroll', verifyPosition);
  }, [])

  return (
    <div className={classes.root} id="about">
      <div className={classes.content}>
        <Collapse
          in={showGreetings}
          {...(showGreetings ? { timeout: 1000 } : {})}
          collapsedHeight={10}
        >
          <div className={classes.greeting}>
            <div className={classes.preTitle}>
              Hello There
            </div>
            <div className={classes.title}>
              Our journey is just beginning and look how far we've come
            </div>
            <Divider variant="middle" className={classes.dividerHorizontal} />
            <Typography align='center' className={classes.text}>
              From the beginning we believe that the more we know, the more we can offer. Our journey is then based on overcoming challenges. What you want? We go after the Solution. Feel free to dream that together we can transform the lives of many people.
            </Typography>
          </div>
        </Collapse>
        <Collapse
          in={startCount}
          {...(startCount ? { timeout: 1000 } : {})}
          collapsedHeight={0}
        >
          <Box className={classes.indices}>
            <div className={classes.indice}>
              {startCount &&
                <Indice metric={PROJECTS_COMPLETED} />
              }
              <div className={classes.numberDescription}>
                Projects Completed
            </div>
            </div>
            <Divider orientation="vertical" flexItem className={classes.dividerVertical} />
            <div className={classes.indice}>
              {startCount &&
                <Indice metric={CUPS_OF_COFFE} />
              }
              <div className={classes.numberDescription}>
                Cups of Coffee
            </div>
            </div>
            <Divider orientation="vertical" flexItem className={classes.dividerVertical} />
            <div className={classes.indice}>
              {startCount &&
                <Indice metric={HOURS_WORKING} />
              }
              <div className={classes.numberDescription}>
                Hours of Working
            </div>
            </div>
            <Divider orientation="vertical" flexItem className={classes.dividerVertical} />
            <div className={classes.indice}>
              {startCount &&
                <Indice metric={IMPACTED_LIVES} />
              }
              <div className={classes.numberDescription}>
                Impacted Lives
            </div>
            </div>
          </Box>
        </Collapse>
      </div>
    </div >
  )
}
