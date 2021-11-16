import React from 'react';
import './App.css';
import Tab from './Tab';
import {  Link, useMatch, useResolvedPath } from "react-router-dom";




function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ background: match ? "#452d88" : "none", color: match ? "#eee" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

function App({children}) {
  
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
            <CustomLink to="/Home">Home</CustomLink>
          </Tab>

          <Tab>
          <CustomLink to="/Features">Features</CustomLink>
          </Tab>
          <Tab>
            <CustomLink to="/About">About</CustomLink>
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
