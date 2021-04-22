import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
// import AppPetXinxi from './AppPetXinxi';
// var code='PCAE';

export default class AppZhuce extends Component {
    constructor(){
        super();
        this.state={
            userName:"",
            userTel:"",
            userPassword:""
        }
    }
   
 
    render() {
        
        return (
            <div>
                 <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    icon={<Icon type="left" />}
                    
                    onLeftClick={() => {window.location='/login'}}
                    >注册
                </NavBar>
            </div>
        )
    }
}


