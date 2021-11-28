
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
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
    color: '#0a80c2',
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