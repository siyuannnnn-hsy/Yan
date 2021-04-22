import React, { Component } from 'react'
import { NavBar, Icon,WingBlank, Button} from 'antd-mobile';
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
                    // icon={<Icon type="left" />}
                    
                    // onLeftClick={() => {window.location='/login'}}
                    >注册
                </NavBar>
                <div style={{height:'130px',textAlign:'center'}}>
                    <img src={require('./logo.png').default}
                     style={{height:'100px',width:'100px',marginTop:'25px',marginLeft:'-172px'}} />
                    <i style={{fontSize:22,color:'balck'}} className='iconfont icon-back'></i>
                    <div style={{color:'black',fontSize:'20px',paddingLeft:"-150px",paddingTop:'20px',marginLeft:'-150px'}}>
                        注册成为考研人
                    </div>
                </div>
                <div style={{marginTop:'80px'}}>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        昵称
                        <input style={{marginLeft:'18px',width:'248px'}} value='小黄'/>
                            {/* 小黄 */}
                            {/* </input> */}
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        手机号
                        <input style={{marginLeft:'18px',width:'228px'}} value='12563489523'/>
                            {/* 12563489523 */}
                            {/* </input */}
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        密码
                        <input style={{marginLeft:'18px',width:'248px'}} value='123456'/>
                            {/* 123456 */}
                            {/* </input> */}
                    </div>
                    <div style={{color:'black',float:'left',marginTop:'20px',fontSize:'20px',marginLeft:'22px'}}>我是</div>
                    <input style={{marginLeft:'18px',width:'80px',float:'left',marginTop:'20px',fontSize:'20px'}} value='123456'/>
                    <div style={{color:'black',float:'left',marginTop:'20px',fontSize:'20px',marginLeft:'20px'}}>届考生</div>
                    {/* <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        座右铭
                        <input style={{marginLeft:'18px',width:'228px',fontSize:'15px'}} value='这个人很懒，什么也没有留下'/>
                            
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        专业
                        <input style={{marginLeft:'18px',width:'248px'}} value='软件工程'/>
                           
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'20px',fontSize:'20px'}}>
                        出生日期
                        <input style={{marginLeft:'18px',width:'215px'}} value='2000.01.01'/>
                           
                    </div> */}
                    <Link to={'/'}>
                    <Button style={{marginTop:'80px',backgroundColor:'gray'}}>注册</Button>
                    </Link>
                    
                    </div>
            </div>
        )
    }
}


