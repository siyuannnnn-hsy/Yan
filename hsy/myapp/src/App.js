import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from './Container/Home/Home';


function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} exact />
      </div>
    </Router>
  );
}

export default App;
