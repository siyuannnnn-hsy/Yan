import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch, Link} from 'react-router-dom';
import Home from './Container/Home/Home';
import Mine from './Container/Mine/Mine';
import Study from './Container/Study/Study';
import zhuce from './Container/Start/zhuce';
import takeIn from './Container/Start/takeIn';
import { Icon } from 'antd-mobile';
import './assets/fonts/iconfont.css';
import Xinxi from './Container/Mine/Xinxi';
import Fenshu from './Container/Mine/Fenshu';
import Dingdan from './Container/Mine/Dingdan';
import Lishi from './Container/Mine/Lishi';


function App() {
  return (
    <Router>
      <div className="base-content">
        {/* <Route path="/" component={Home} exact /> */}

        {/* <header>研</header> */}

        <section>
          <Route exact path="/" component={Home} exact/>
          <Route path="/Study" component={Study} exact/>
          <Route path="/zhuce" component={zhuce} exact/>
          <Route path="/takeIn" component={takeIn} exact/>

          <Route path="/Mine" component={Mine} exact/>
          <Route path="/Mine/Xinxi" component={Xinxi} exact/>
          <Route path="/Mine/Fenshu" component={Fenshu} exact/>
          <Route path="/Mine/Dingdan" component={Dingdan} exact/>
          <Route path="/Mine/Lishi" component={Lishi} exact/>

        </section>

        {/* <footer>
          <Link to={'/'} className='base-footer'>
            <i className="iconfont iconlinggan" style={{fontSize:'30px'}}></i>  
          </Link>
          <Link to={'/Study'} className='base-footer'>
            <i className="iconfont iconxuexi" style={{fontSize:'30px'}}></i>
          </Link>
          <Link to={'/Mine'} className='base-footer'>
            <i className="iconfont iconwode1" style={{fontSize:'30px'}}></i>
          </Link>
        </footer> */}

      </div>
    </Router>
  );
}

export default App;
