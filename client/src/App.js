//modules
import React from 'react';
import './App.css';



function App() {
  return (
      <div>
        <div>
          <h1>Navigation Section</h1>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <img src="https://via.placeholder.com/100" />
        </div>
        <div>
          <h1>Featured project Front Page</h1>
          <div>
            <h2>Front Page Project Title</h2>
            <div className="front-page-project-container"></div>
          </div>
        </div>
        <footer>
          <ul>
            <li>Contact Logos go here</li>
          </ul>
        </footer>
      </div> 

      

  );
}

export default App;
