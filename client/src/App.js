import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link><h1>Home</h1></Link>
        <Link><h1>About</h1></Link>
        <Link><h1>Projects</h1></Link>
        <Link><h1>Fun</h1></Link>
      </div>
    </Router>
  );
}

export default App;
