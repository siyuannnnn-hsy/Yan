import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch, Link} from 'react-router-dom';
import Home from './Container/Home/Home';
import Mine from './Container/Mine/Mine';
import Study from './Container/Study/Study';
import { Icon } from 'antd-mobile';
import './assets/fonts/iconfont.css';


function App() {
  return (
    <Router>
      <div className="base-content">
        {/* <Route path="/" component={Home} exact /> */}

        <header>研</header>

        <section>
          <Route exact path="/" component={Home} exact/>
          <Route path="/Study" component={Study}/>
          <Route path="/Mine" component={Mine}/>
        </section>

        <footer>
          <Link to={'/'} className='base-footer'>
            <i className="iconfont iconlinggan" style={{fontSize:'30px'}}></i>  
          </Link>
          <Link to={'/Study'} className='base-footer'>
            <i className="iconfont iconxuexi" style={{fontSize:'30px'}}></i>
          </Link>
          <Link to={'/Mine'} className='base-footer'>
            <i className="iconfont iconwode1" style={{fontSize:'30px'}}></i>
          </Link>
        </footer>

      </div>
    </Router>
  );
}

export default App;
