import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'

import { useStyles } from './styles';

import Cards from './Cards'

import { data } from './data'

export default function Services() {

  const classes = useStyles();

  const splitData = () => chunk(data, 2)


  const chunk = (arr, size) => arr.reduce((acc, e, i) =>
  (i % size
    ? acc[acc.length - 1].push(e)
    : acc.push([e]), acc
  ), []
  )

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


        {splitData().map((chunck) =>
          <Cards items={chunck} />
        )}

      </div>
    </div >
  )
}
