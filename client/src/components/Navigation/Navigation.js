import React from 'react';
import { Link, Router } from '@reach/router';
import { render } from "react-dom";
import './Navigation.css';
import Dashboard from '../Dashboard/Dashboard.js';
import Home from '../Home/Home.js';
import Jams from '../Jams/Jams.js';

const Navigation = () => {
    return (
        <div className="nav-container">
          <h1>Navigation Section</h1>
          <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/jams">Jams</Link>
          </nav>

          <Router>
            <Home path="/" />
            <Dashboard path="/dashboard" />
            <Jams path="/jams" />
          </Router>
        </div>
    );
}

export default Navigation;