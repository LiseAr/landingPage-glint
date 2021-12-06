import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton, Typography } from '@material-ui/core';

import { useStyles } from './styles';

import { Link as Scroll } from "react-scroll";

import { items } from './menuItems'

export default function SideBar(props) {

  const classes = useStyles();

  const anchor = 'right';

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
        {items.map((item, index) => (
          <ListItem className={classes.item} button key={item.text}>
            <Scroll className={classes.scrollItem} to={item.route} smooth={true} spy={true}>
              <Button
                className={classes.itemBtn}
                onClick={toggleDrawer(anchor, false)}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  className={classes.itemLabel}
                >
                  {item.text}
                </Typography>
              </Button>

            </Scroll>

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
    <div className={classes.menuWrapper} id="sidebar" >
      <div key={anchor} >
        <Box className={classes.menuLabelWrapper}>
          <Button
            onClick={toggleDrawer(anchor, true)}
          >
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
