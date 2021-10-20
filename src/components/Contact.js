import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/contact-bg.jpg"})`,
    backgroundRepeat: 'no-repeat',
  },
  pageWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(21, 21, 21, 0.8)',
  },
  contentTitle: {
    paddingTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleWrapper: {
    width: '70vw',
    marginBottom: 60,
  },
  preTitle: {
    color: '#39b54a',
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: 1.333,
    letterSpacing: '.15rem',
  },
  title: {
    color: '#fff',
    fontSize: '3.1rem',
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '.0rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '79vw',
    marginBottom: 140,
  },
  formWrapper: {
    width: '66%',
    padding: 45,
    backgroundColor: 'rgba(000, 000, 000, 0.33)',
    display: 'flex',
    flexDirection: 'column',
  },
  formFilds: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputWrapper: {
    marginTop: 30,
    '& .MuiInput-underline:after': {
      borderBottomColor: '#39b54a',
      borderBottomWidth: 1,
    },
    '& .MuiInput-underline:not(.Mui-disabled):before': {
      borderBottomColor: 'rgba(255, 255, 255, 0.07)',
      borderBottomWidth: 1,
    }
  },
  inputForm: {
    fontSize: '.9rem',
    fontWeight: 300,
    color: 'rgba(255, 255, 255, 0.7)',
    paddingBottom: 10,
  },
  titleForm: {
    color: '#fff',
    fontSize: '.8rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.1rem',
    lineHeight: 1.333,
    paddingBottom: 40,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#39b54a',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.2rem',
    borderColor: '#39b54a',
    borderRadius: 0,
    borderWidth: 2,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 40,
    transitionDuration: 1000,
    '&:hover': {
      backgroundColor: '#33A242',
    },
  },
  contactInfo: {
    width: '34%',
    backgroundColor: '#121212',
    backgroundColor: 'black',
    padding: 40,
  },
  subTitleInfo: {
    color: '#fff',
    // fontFamily: 'Montserrat',
    fontSize: '.8rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.1rem',
    lineHeight: 1.333,
  },
  boxInfo: {
    marginBottom: 40,
  },
  titleBox: {
    color: '#39b54a',
    fontSize: '0.97rem',
    fontWeight: 600,
  },
  textBox: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '0.97rem',
    lineHeight: 2,
    width: '70%',
  }
}));

export default function Contact() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.pageWrapper}>

        <div className={classes.contentTitle}>
          <div className={classes.titleWrapper}>
            <Typography align='center' className={classes.preTitle}>
              Contact Us
            </Typography>
            <Typography align='center' className={classes.title}>
              Reach out for a new project or just say hello
            </Typography>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.formWrapper}>

            <Typography className={classes.titleForm}>
              Send Us A Message
            </Typography>

            <div className={classes.formFilds}>
              <TextField
                className={classes.inputWrapper}
                placeholder="Your Name"
                InputProps={{
                  className: classes.inputForm
                }}
              />
              <TextField
                className={classes.inputWrapper}
                placeholder="Your Email"
                InputProps={{
                  className: classes.inputForm
                }}
              />
              <TextField
                className={classes.inputWrapper}
                placeholder="Subject"
                InputProps={{
                  className: classes.inputForm
                }}
              />
              <TextField
                className={classes.inputWrapper}
                placeholder="Your Message"
                InputProps={{
                  className: classes.inputForm
                }}
                multiline
                rows={10}
              />

              <Button className={classes.button} >
                Submit
              </Button>
            </div>
          </div>
          <div className={classes.contactInfo}>
            <Typography className={classes.titleForm}>
              Contact Info
            </Typography>

            <div className={classes.boxInfo}>
              <Typography className={classes.titleBox}>
                Where to Find Us
                </Typography>

              <Typography className={classes.textBox}>
                1600 Amphitheatre Parkway
                Mountain View, CA
                94043 US
              </Typography>
            </div>

            <div className={classes.boxInfo}>
              <Typography className={classes.titleBox}>
                Email Us At
                </Typography>

              <Typography className={classes.textBox}>
                contact@glintsite.com
              </Typography>
              <Typography className={classes.textBox}>
                info@glintsite.com
              </Typography>
            </div>

            <div className={classes.boxInfo}>
              <Typography className={classes.titleBox}>
                Call Us At
                </Typography>

              <Typography className={classes.textBox}>
                Phone: (+63) 555 1212
              </Typography>
              <Typography className={classes.textBox}>
                Mobile: (+63) 555 0100
              </Typography>
              <Typography className={classes.textBox}>
                Fax: (+63) 555 0101
              </Typography>
            </div>

          </div>
        </div>

      </div>
    </div >
  )
}
