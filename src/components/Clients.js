import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Typography } from '@material-ui/core';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { works } from '../data/works';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#e6e6e6',
    paddingBottom: 100,
  },
  contentTitle: {
    paddingTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleWrapper: {
    width: '80vw',
  },
  preTitle: {
    color: '#39b54a',
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 1,
    marginTop: 40,
    marginBottom: 60,
  },
  carousel: {
    display: 'flex',
    height: 250,
    width: '80vw',
  },
  image: {
    width: '20vw',
    height: 'auto',
  }
}));

export default function Clients() {

  const classes = useStyles();

  return (
    <div className={classes.root} id="clients">
      <div className={classes.contentTitle}>
        <div className={classes.titleWrapper}>
          <Typography align='center' className={classes.preTitle}>
            Our Clients
          </Typography>
          <Typography align='center' className={classes.title}>
            Glint has been honored to partner up with these clients
          </Typography>
        </div>
      </div>
      <Divider variant="middle" className={classes.dividerHorizontal} />
      <Carousel
        className={classes.carousel}
        // additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={1000}
        // centerMode={false}
        // className=""
        containerClass="container-with-dots"
        // dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        // itemClass=""
        keyBoardControl
        // minimumTouchDrag={80}
        // renderButtonGroupOutside={false}
        // renderDotsOutside={false}
        showDots={true}
        // sliderClass=""
        slidesToSlide={1}
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 4,
          },
        }}
      >
        {works.map((item) =>
          <img
            className={classes.image}
            src={item.src}
            srcSet={item.src}
            alt={""}
          // loading="lazing"
          // height={100}
          />
        )}
      </Carousel>
    </div >
  )
}