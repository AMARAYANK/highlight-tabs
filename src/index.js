import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home';
import Features from './routes/Features';
import About from './routes/About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="Features" element={<Features />} />
      <Route path="About" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
