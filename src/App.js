import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./component/Navbar";
import Header from "./component/Header";
//import Particles from "react-particles-js"
import { Fragment } from "react";
//import { tsParticles } from "tsparticles";
//import { shape } from "prop-types";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Skillls from "./component/Skillls";
import { projects } from "./component/Data";

function App() {
  return (
    <Fragment className="section">
   
    <Navbar/>
    <Header/>
    <Project/>
    <Skillls/>
    <Contact/>
    </Fragment>
  );
}

export default App;
