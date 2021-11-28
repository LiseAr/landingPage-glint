import React, { useEffect, useLayoutEffect, useState } from 'react'

import { Box, Collapse, IconButton } from '@material-ui/core';

import FormatPaintIcon from '@material-ui/icons/FormatPaint';

import { useStyles } from './styles';

export default function Cards({ items }) {

  const [showCards, setShowCards] = useState(false)

  useLayoutEffect(() => {
    function verifyPosition() {
      if (
        window.pageYOffset > (window.document.getElementById('services').offsetHeight)
      ) {
        setShowCards(true);
      }
    }
    window.addEventListener('scroll', verifyPosition);
    verifyPosition();
    return () => window.removeEventListener('scroll', verifyPosition);
  }, [])

  const classes = useStyles();

  return (
    <Collapse
      in={showCards}
      {...(showCards ? { timeout: 1000 } : {})}
    // collapsedHeight={10}
    >
      <Box className={classes.cardsWrapper} id="services">
        {items.map((item) => <Box className={classes.card}>
          <div className={classes.leftSide}>
            <IconButton className={classes.mediaIconWrapper}>
              {item.icon}
            </IconButton>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.titleCard}>
              {item.title}
            </div>
            <div className={classes.descriptionCard}>
              {item.description}
            </div>
          </div>
        </Box>
        )}
      </Box>
    </Collapse>
  )
}
