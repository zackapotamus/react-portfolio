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
        <Route path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
