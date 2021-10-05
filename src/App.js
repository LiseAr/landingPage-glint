import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { CssBaseline } from "@material-ui/core";
import About from "./components/About";

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pexels-sebastian-sørensen-1276518.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}))

export default function App() {
  const classes = useStyles();
  return (<div className={classes.root}>
    {/* <CssBaseline /> */}
    <SideBar />
    <Home />
    <About />
  </div>);
}
