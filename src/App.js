import React from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

//commented code adds React Router capability
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    //<Router>
    //<div className="App">
    <div>
      <Navbar />
      <Skills />
      {/* <Switch> */}
      {/* <Route path="/" exact component={aboutMe} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Experience" component={Experience} /> */}
      <Projects />
      <Experience />
      <Footer />
      {/* </Switch> */}
    </div>
    //<div>
  );
}
//Sets Home page About me as main route
// const aboutMe = () => (
//   <div>
//     <h1>About me</h1>
//   </div>
// );

export default App;
