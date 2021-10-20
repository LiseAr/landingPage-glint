import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pexels-sebastian-sørensen-1276518.jpg"})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  },
}))

export default function App() {
  const classes = useStyles();
  return (<div className={classes.root}>
    <SideBar />
    <Home />
    <About />
    <Services />
    <Works />
    <Clients />
    <Contact />
    <Footer />
  </div>);
}
