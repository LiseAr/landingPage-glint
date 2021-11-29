import React from 'react'
import { Divider, Typography } from '@material-ui/core'

import { useStyles } from './styles';

import Cards from './Cards'

import { data } from './data'

export default function Services() {

  const classes = useStyles();

  const splitData = () => {

    const size = 2;
    let newData = [];
    for (var i = 0; i < data.length; i += size) {
      newData[i] = data.slice(i, i + size)
    }
    return newData;
  }

  return (
    <div className={classes.root} id="services">
      <div className={classes.content}>
        <div className={classes.titleWrapper}>
          <Typography align='center' className={classes.preTitle}>
            What We Do
          </Typography>
          <Typography align='center' className={classes.title}>
            We’ve got everything you need to launch and grow your idea
          </Typography>
        </div>
        <Divider variant="middle" className={classes.dividerHorizontal} />


        {splitData().map((chunk) =>
          <Cards items={chunk} />
        )}

      </div>
    </div >
  )
}
