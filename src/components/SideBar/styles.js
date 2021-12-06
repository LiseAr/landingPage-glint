import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: '#0C0C0C',
    padding: 40,
    fontFamily: 'Montserrat',
    width: 280,
    flex: 1,
  },
  menuWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: "sticky",
    top: 10,
    right: 10,
  },
  logo: {
    height: 30,
    margin: 25,
  },
  menuLabelWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0C0C',
    marginRight: 10,
    padding: 0,
    height: 40,
    width: 130,
  },
  menuLabel: {
    color: '#0a80c2',
    fontSize: '0.8rem',
    letterSpacing: '.3rem',

  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  title: {
    color: '#0a80c2',
    fontSize: 11,
    textTransform: 'uppercase',
    fontWeight: 800,
    letterSpacing: '0.2rem',
    marginBottom: 35,
  },
  listItems: {
    color: '#fff',
  },
  item: {
    padding: 0,
  },
  scrollItem: {
    width: '100%',
  },
  itemBtn: {
    paddingTop: 6,
    paddingBottom: 6,
    width: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  itemLabel: {
    fontWeight: 600,
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: 'white',
  },
  footerSideBar: {
    marginTop: 40,
  },
  description: {
    color: 'rgba(180,180,180,0.4)',
    fontSize: 13,
    lineHeight: 2,
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },
  socialMedia: {
    marginTop: 20,
  },
  mediaIconWrapper: {
    padding: 0,
    margin: 0,
  },
  mediaIcon: {
    color: 'rgba(180,180,180,0.4)',
    fontSize: '1.2rem',
    marginRight: 8,
  }
}));
