//modules
import React from 'react';
import './App.css';
import './components/Navigation/Navigation.css';


//Components
import Navigation from './components/Navigation/Navigation';


function App() {
  const jamList = [
    {id: 'jl1', text: 'Freestyle Session'},
    {id: 'jl2', text: 'King Of What'},
    {id: 'jl3', text: 'Catch Wreck'},
  ];

  return (
      <div>
        <Navigation />
      </div> 
  );
}

export default App;
