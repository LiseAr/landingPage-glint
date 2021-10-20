import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import MenuIcon from '@material-ui/icons/Menu'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    color: '#39b54a',
    fontSize: '0.8rem',
    letterSpacing: '.3rem',

  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  title: {
    color: '#39b54a;',
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
    paddingTop: 6,
    paddingBottom: 6,
  },
  itemLabel: {
    fontWeight: 600,
    fontSize: 18,
    fontFamily: 'Montserrat',
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

export default function SideBar(props) {

  const classes = useStyles();

  const anchor = 'right';

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const trigger = useScrollTrigger({
    target: props.window ? window() : undefined
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className={classes.sidebar}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="h1"
        className={classes.title}
      >
        Navigation
      </Typography>
      <List className={classes.listItems}>
        {['Home', 'About', 'Services', 'Works', 'Clients', 'Contact'].map((text, index) => (
          <ListItem className={classes.item} button key={text}>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.itemLabel}
            >
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Box className={classes.footerSideBar}>
        <Typography
          gutterBottom
          className={classes.description}
        >
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.
        </Typography>
      </Box>
      <Box className={classes.socialMedia}>
        <IconButton className={classes.mediaIconWrapper}>
          <FacebookIcon className={classes.mediaIcon} />
          <TwitterIcon className={classes.mediaIcon} />
          <InstagramIcon className={classes.mediaIcon} />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <div className={classes.menuWrapper} >
      {/* <Slide in={!trigger} >
        <img className={classes.logo} src={logo} alt="logo" />
      </Slide> */}

      <div key={anchor} >
        <Box className={classes.menuLabelWrapper}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <h1 className={classes.menuLabel}> MENU </h1>
            <IconButton>
              <MenuIcon className={classes.icon} />
            </IconButton>
          </Button>
        </Box>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          transitionDuration={{ enter: 800, exit: 400 }}
        >
          {list(anchor)}
        </Drawer>
      </div>
    </div>
  );
}
