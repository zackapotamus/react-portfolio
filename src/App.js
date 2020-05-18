import React from "react";
import "../src/css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Portfolio from "./containers/Portfolio";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
