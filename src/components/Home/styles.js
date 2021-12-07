import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    fontFamily: 'Nunito',
    width: '100%',
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