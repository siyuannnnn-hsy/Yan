import React, { Component } from 'react'
import { NavBar, Icon,WingBlank, Button} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
// import AppPetXinxi from './AppPetXinxi';
var code='PCAE';

export default class AppZhuce extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            iphoneNum:"",
            userPW:""
        }
    }
    
     changeImg=()=>{
        //alert("换图片");
        var arrays=new Array(
            '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'				
        );
        code='';//重新初始化验证码
        //alert(arrays.length);
        //随机从数组中获取四个元素组成验证码
        for(var i=0;i<4;i++){
        //随机获取一个数组的下标
            var r=parseInt(Math.random()*arrays.length);
            code+=arrays[r];
            //alert(arrays[r]);
        }
        //alert(code);
        document.getElementById('code').innerHTML=code;//将验证码写入指定区域
    }		
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            name:e.target.value
        })
    }
    telChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            iphoneNum:e.target.value
        })
    }
    pwdChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            userPW:e.target.value
        })
    }
    check=()=>{
        //获取用户输入的验证码
        var input_code=document.getElementById('vcode').value;
        //alert(input_code+"----"+code);
        if(input_code.toLowerCase()==code.toLowerCase())
        {
            //验证码正确(表单提交)
            this.register();
            // window.location='http://localhost:3001';
            return true;
        }
        alert("请输入正确的验证码!");
        
        //验证码不正确,表单不允许提交
        return false;
    }
    register=()=>{
        console.log(this.state.name);
        const registerValue = {"name":this.state.name,"iphoneNum": this.state.iphoneNum,"userPW": this.state.userPW}
       console.log(registerValue)
        if(this.state.name!="" && this.state.iphoneNum!="" && this.state.userPW!=""){
            fetch('http://localhost:3000/listuser', {
                 method: "POST",
                 headers: {
                     "Content-type":"application/json;charset=utf-8",
                 },
                 body:JSON.stringify(registerValue) ,
            })
            .then( res => res.text())
            .then( data => {
                  console.log(data);
                //   if(data.success){
                //       alert('register OK');
                //   }
            });
        }
        // console.log(registerValue)
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
                    {/* <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        昵称
                        <input style={{marginLeft:'18px',width:'248px'}} value='小黄'/>
                            
                    </div> */}
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        <i style={{fontSize:18}} className='iconfont icon-gerenxinxi'>用户名：</i>
                        <input onChange={this.nameChange} type='text' id='username' name='username' placeholder='昵称' />
                    </div>
                    <div className='iphoneNum' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        <i style={{fontSize:18}} className='iconfont icon-gerenxinxi'>手机号：</i>
                        <input onChange={this.telChange} type='text' id='iphoneNum' name='iphoneNum' placeholder='手机号' />
                    </div>
                    <div className='userPW' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        <i style={{fontSize:18}} className='iconfont icon-gerenxinxi'>密码：</i>
                        <input onChange={this.pwdChange} type='text' id='userPW' name='userPW' placeholder='密码' />
                    </div>
                    
                    {/* <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        手机号
                        <input style={{marginLeft:'18px',width:'228px'}} value='12563489523'/>
                            
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        密码
                        <input style={{marginLeft:'18px',width:'248px'}} value='123456'/>
                            
                    </div> */}
                    <div style={{color:'black',float:'left',marginTop:'20px',fontSize:'20px',marginLeft:'22px'}}>我是</div>
                    <input style={{marginLeft:'18px',width:'80px',float:'left',marginTop:'20px',fontSize:'20px'}} value=''/>
                    <div style={{color:'black',float:'left',marginTop:'20px',fontSize:'20px',marginLeft:'20px'}}>届考生</div>

                    <div  className='userName' style={{color:'black',marginTop:'28px',marginLeft:'0px',fontSize:'20px'}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-yanjing'></i></label>
                        <input type="text" id="vcode" placeholder="验证码"   
                        style={{color:'black',marginTop:'28px',marginLeft:'0px',fontSize:'20px',backgroundColor:'#fff'}} />
                        <button id="vvcode"  title="看不清，换一张" onClick={this.changeImg}>
                             <span id="code" title="看不清，换一张">获取验证码</span></button>
                    </div>
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
                    {/* <Link to={'/'}> */}
                    <Button style={{marginTop:'80px',backgroundColor:'gray'}} onClick={this.check}>注册</Button>
                    {/* </Link> */}
                    
                    </div>
            </div>
        )
    }
}


