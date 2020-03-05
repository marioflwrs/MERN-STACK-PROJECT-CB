//Modules
import React from 'react';
import { Link, Router } from '@reach/router';

//Navigation Style
import './Navigation.css';

//Components
import Forum from '../Forum/Forum.js';
import Home from '../Home/Home.js';
import Events from '../Events/Events.js';

const Navigation = () => {
    return (
        <div>
          <nav className="nav-bar">
            <Link to="/"><h1>CypherBreak</h1></Link> {" "}
            <Link to="/Forum"><h1>Forum</h1></Link>
            <Link to="/Events"><h1>Events</h1></Link>
          </nav>

          <Router>
            <Home path="/" />
            <Forum path="/Forum" />
            <Events path="/Events" />
          </Router>
        </div>
    );
}

export default Navigation;