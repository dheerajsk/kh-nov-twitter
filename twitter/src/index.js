import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

// React funciton to get div element.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    {/* StrictMode helps with less compile/run 
    errors forcing you to not make mistakes
    which Plain javascript ignores. */}
    {/* React is rendering Home component */}
    <Home />
  </React.StrictMode>
);
