import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    height: '50vh',
    flexDirection: 'column',
    paddingTop: 100,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    gap: 60,
  },
  box: {
    width: '35vw',
    marginBottom: 20,
  },
  boxPositionOnRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '35vw',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: 1.313,
    fontFamily: 'Montserrat',
    paddingBottom: 60,
  },
  description: {
    color: 'rgba(255,255,255,.4)',
    fontSize: '1.18rem',
    fontWeight: '300',
    lineHeight: 2,
    fontFamily: 'Montserrat',
    paddingBottom: 80,
  },
  whiteText: {
    color: 'rgba(255,255,255)',
    fontSize: '1.18rem',
    fontWeight: '400',
    lineHeight: 2,
    fontFamily: 'Montserrat',
    paddingBottom: 80,
  },
  inputNotified: {
    width: '100%',
    height: 65,
    display: 'flex',
    flexDirection: 'row',
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '65%',
    height: '100%',
    // backgroundColor: '#0000001A',
    backgroundColor: 'black',


    '& .MuiInputBase-input': {
      fontSize: '0.9rem',
      fontWeight: '300',
      // lineHeight: 2,
      fontFamily: 'Montserrat',
    },
    '& .MuiInput-underline': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:before ': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:not(.Mui-disabled):before': {
      borderBottom: 'none',
    }
  },
  inputForm: {
    fontSize: '.9rem',
    fontWeight: 300,
    color: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: 20,
  },
  button: {
    height: '100%',
    width: '35%',
    backgroundColor: '#39b54a',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.3rem',
    borderColor: '#39b54a',
    borderRadius: 0,
    borderWidth: 0,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    transitionDuration: 1000,
    '&:hover': {
      backgroundColor: '#33A242',
    },
  },
  rights: {
    display: 'flex',
    justifyContent: 'center',
    gap: 60,
  },
  copyrightText: {

  },
}))

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>

        <div className={classes.box}>
          <Typography className={classes.title}>
            Glint
          </Typography>

          <Typography className={classes.description}>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </Typography>

        </div>
        <div className={classes.box}>
          <Typography className={classes.title}>
            Get Notified
          </Typography>

          <Typography className={classes.description}>
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.
          </Typography>

          <div className={classes.inputNotified}>
            <TextField
              className={classes.inputWrapper}
              placeholder="Email Address"
              InputProps={{
                className: classes.inputForm
              }}
            />
            <Button className={classes.button} >
              Subscribe
            </Button>
          </div>
        </div>

      </div>
      <div className={classes.rights}>
        <div className={classes.boxPositionOnRight} >
          <Typography className={classes.description}>
            © Copyright Glint 2022
          </Typography>
        </div>
        <div className={classes.box}>
          <Typography className={classes.description}>
            Site Template by <span className={classes.whiteText}>Colorlib</span>
          </Typography>
        </div>
      </div>
    </div >
  )
}
