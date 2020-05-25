//Modules
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

//Navigation Style
import './Navigation.css';

//Components
import Home from '../Home/Home.js';
import Forum from '../Forum/Forum.js';
import Events from '../Events/Events.js';
import Users from '../users/Users.js';

const Navigation = () => {
    return (
      <Router>
        <div>
          <nav className="nav-bar">

                <Link to="/"><h1>Home</h1></Link>
                <Link to="forum"><h1>Forum</h1></Link>
                <Link to="events"><h1>Events</h1></Link>
             
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
}

export default Navigation; 