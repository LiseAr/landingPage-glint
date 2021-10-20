import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Typography } from '@material-ui/core';

import { works } from '../data/works.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  titleWrapper: {
    width: '80vw',
  },
  preTitle: {
    color: '#39b54a',
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
    fontSize: '3.5rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  contentTitle: {
    paddingTop: 150,
    paddingBottom: 250,
    width: '100%',
    backgroundColor: '#111111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dividerHorizontal: {
    width: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 1,
    marginTop: 40,
    marginBottom: 60,
  },
  gallery: {
    marginTop: '-15rem',
    width: '90%',
    columns: 2,
    columnGap: 0,
    paddingBottom: 150,
  },
  image: {
    display: 'block',
    width: '100%',
    padding: 0,
    objectFit: 'cover',
  },
}));

export default function Works() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentTitle}>
        <div className={classes.titleWrapper}>
          <Typography align='center' className={classes.preTitle}>
            Recent Works
          </Typography>
          <Typography align='center' className={classes.title}>
            We love what we do, check out some of our latest works
          </Typography>
          <Divider variant="middle" className={classes.dividerHorizontal} />
        </div>
      </div>

      <div className={classes.gallery}>
        {works.map((item) => (
          <img
            className={classes.image}
            src={item.src}
            srcSet={item.src}
            loading="eager"
            height={item.height}
            alt={}
          />))}
      </div>
    </div >
  )
}
