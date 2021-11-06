import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import React from 'react'

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
}))

const EXECUTING_TIME = 500

export default function Indice({ metric }) {

  const classes = useStyles()

  const [count, setCount] = useState(0)

  const stepsLength = (metric / EXECUTING_TIME)

  useEffect(() => {
    if (count === 0) setCount(count + stepsLength)
    else if (count < metric) setCount(count + stepsLength)
  }, [count, stepsLength, metric])

  useEffect(() => {
    return () => setCount(0)
  }, [])

  return (
    <div className={classes.number}>
      {Math.round(count)}
    </div>
  )
}
