import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services/index";
import Works from "./components/Works";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100vh',
    objectFit: 'fill',
    position: 'absolute',
    zIndex: -10,
    opacity: 0.6,
  }
}))

export default function App() {


  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000);
  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={process.env.PUBLIC_URL + "/assets/bg.png"}
      />
      {isVisible && <><SideBar />
        <Home />
        <About />
        <Services />
        <Works />
        <Clients />
        <Contact />
        <Footer /></>}
    </div>
  );
}
