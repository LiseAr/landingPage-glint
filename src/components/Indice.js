import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  number: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '4rem',
    fontWeight: 700,
    lineHeight: 1,
    width: '20vw',
    textAlign: 'center',
  },
}));

const EXECUTING_TIME = 4000;

export default function Indice({ metric }) {

  const classes = useStyles();

  const [count, setCount] = useState(0);

  const steps = metric / EXECUTING_TIME

  useEffect(() => {
    if (count < metric) {
      setCount(count + steps)
    }
  }, [count, metric, steps])

  return (
    <div className={classes.number}>
      {Math.round(count)}
    </div>
  )
}
