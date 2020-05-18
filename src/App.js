import React from "react";
import "../src/css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
