//modules
import React from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';


function App() {
  return (
      <div>
        <Navigation />
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
