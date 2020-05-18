import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../src/css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";

function App() {
  return (
    <Router>
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
