import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// React funciton to get div element.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    {/* StrictMode helps with less compile/run 
    errors forcing you to not make mistakes
    which Plain javascript ignores. */}
    {/* React is rendering Home component */}
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}>  </Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
