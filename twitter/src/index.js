import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

// React funciton to get div element.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* React is rendering Home component */}
    <Home />
  </React.StrictMode>
);
