import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Divider, IconButton, Typography } from '@material-ui/core';

import FormatPaintIcon from '@material-ui/icons/FormatPaint';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  content: {
    paddingTop: 150,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: '3.5rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  dividerHorizontal: {
    width: '45%',
    backgroundColor: 'rgba(0,0,0,.1)',
    height: 1,
    marginTop: 40,
    marginBottom: 60,
  },
  cardsWrapper: {
    display: 'flex',
    marginBottom: 40,
  },
  card: {
    width: '45vw',
    display: 'flex',
  },
  leftSide: {
    width: '20%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mediaIconWrapper: {
    padding: 0,
    margin: 0,

  },
  icon: {
    color: '#39b54a',
    width: 60,
    height: 60,
  },
  rightSide: {
    width: '80%',
  },
  titleCard: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 20,
  },
  descriptionCard: {
    color: '#757575',
    fontFamily: 'Lora',
    fontSize: 17,
    fontWeight: 400,
    lineHeight: 1.8,
  },
}));

export default function Services() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.titleWrapper}>
          <Typography align='center' className={classes.preTitle}>
            What We Do
          </Typography>
          <Typography align='center' className={classes.title}>
            We’ve got everything you need to launch and grow your business
          </Typography>
        </div>
        <Divider variant="middle" className={classes.dividerHorizontal} />

        <Box className={classes.cardsWrapper}>
          <Box className={classes.card}>
            <div className={classes.leftSide}>
              <IconButton className={classes.mediaIconWrapper}>
                <FormatPaintIcon className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.titleCard}>
                Brand Identity
                </div>
              <div className={classes.descriptionCard}>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </div>
            </div>
          </Box>

          <Box className={classes.card}>
            <div className={classes.leftSide}>
              <IconButton className={classes.mediaIconWrapper}>
                <FormatPaintIcon className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.titleCard}>
                Brand Identity
                </div>
              <div className={classes.descriptionCard}>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </div>
            </div>
          </Box>
        </Box>
        <Box className={classes.cardsWrapper}>
          <Box className={classes.card}>
            <div className={classes.leftSide}>
              <IconButton className={classes.mediaIconWrapper}>
                <FormatPaintIcon className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.titleCard}>
                Brand Identity
                </div>
              <div className={classes.descriptionCard}>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </div>
            </div>
          </Box>

          <Box className={classes.card}>
            <div className={classes.leftSide}>
              <IconButton className={classes.mediaIconWrapper}>
                <FormatPaintIcon className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.titleCard}>
                Brand Identity
                </div>
              <div className={classes.descriptionCard}>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </div>
            </div>
          </Box>
        </Box>
        <Box className={classes.cardsWrapper}>
          <Box className={classes.card}>
            <div className={classes.leftSide}>
              <IconButton className={classes.mediaIconWrapper}>
                <FormatPaintIcon className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.titleCard}>
                Brand Identity
                </div>
              <div className={classes.descriptionCard}>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </div>
            </div>
          </Box>

          <Box className={classes.card}>
            <div className={classes.leftSide}>
              <IconButton className={classes.mediaIconWrapper}>
                <FormatPaintIcon className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.titleCard}>
                Brand Identity
                </div>
              <div className={classes.descriptionCard}>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </div>
            </div>
          </Box>
        </Box>
      </div>
    </div >
  )
}
