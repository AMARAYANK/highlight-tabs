import React from 'react';
import './App.css';
import Tab from './Tab';
import { Link } from "react-router-dom";


function App({children}) {
  
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
        <Tab>
          <Link to="/Home">Home</Link>
        </Tab>
        <Tab>
         <Link to="/Features">Features</Link>
        </Tab>
        <Tab>
         <Link to="/About">About</Link>
        </Tab>
      </div>
      <div className="viewport">
       {children}
      </div>
    </div>
    </div>
  
    
  );
}

export default App;
