import React from 'react';
import { Link } from '@reach/router';

import './Navigation.css';

const Navigation = () => {
    return (
        <div className="nav-container">
          <h1>Navigation Section</h1>
          <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="dashboard">Dashboard</Link>
          </nav>
        </div>
    );
}

export default Navigation;