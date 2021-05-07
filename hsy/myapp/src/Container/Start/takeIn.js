import React, { Component } from 'react'
import { NavBar, Icon,WingBlank, Button} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
// import AppPetXinxi from './AppPetXinxi';
var code='PCAE';
let registerValue="";

export default class AppZhuce extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            userId:''
        }
    }

    componentDidMount(){
        // let url = '/userinfo'
            
            fetch('http://localhost:8081/listuser')
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data:res,
                    })
                })
                
            }
         checkIn=()=>{
            var loginname = document.getElementById("userName");
            var password = document.getElementById("pw");
            console.log(loginname.value);
            if(loginname.value!=null){
                console.log('进入第一层循环');
                console.log('获得的具体数据有',this.state.data);
                for(var i=0;i<this.state.data.length;i++){
                    console.log('进入第er层循环');
                    if(loginname.value==this.state.data[i].name && password.value==this.state.data[i].userPW){
                        registerValue = {"userId":this.state.data[i].userId}
                        this.setState({userId:this.state.data[i].userID})
                        console.log('进入第3层循环',this.state.userId);
                        fetch('/listuser', {
                            method: "POST",
                            headers: {
                                "Content-type":"application/json;charset=utf-8",
                            },
                            body:JSON.stringify(registerValue) ,
                       }).then( res => res.text())
                         .then( data => {
                             console.log(data);
                         });
                       
                        alert("success!");
                        window.location = 'http://localhost:3001/Home/:'+this.state.data[i].userID;
                        // window.location = '/tabb'
                    }
                    if(loginname.value===this.state.data[i].userName && password.value!==this.state.data[i].userPassword){
                        alert("error!");
                    }
                    
                    
                }
            }
            else{
                alert("未完成验证");
            }
            // alert('执行了一部分');
            console.log(registerValue.userId)
        }

   
     /* 随机验证码 */
     //声明一个变量用于存储生成的验证码
     
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
    
    //效验验证码(表单被提交时触发)
    check=()=>{
        //获取用户输入的验证码
        var input_code=document.getElementById('vcode').value;
        //alert(input_code+"----"+code);
        if(input_code.toLowerCase()==code.toLowerCase())
        {
            //验证码正确(表单提交)
            this.register();
            window.location='/';
            return true;
        }
        alert("请输入正确的验证码!");
        
        //验证码不正确,表单不允许提交
        return false;
    }
 
    render() {
        
        return (
            <div>
                 <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    // icon={<Icon type="left" />}
                    
                    // onLeftClick={() => {window.location='/login'}}
                    >登录
                </NavBar>
                <div style={{height:'130px',textAlign:'center'}}>
                    <img src={require('./logo.png').default}
                     style={{height:'100px',width:'100px',marginTop:'25px',marginLeft:'-172px'}} />
                    <i style={{fontSize:22,color:'balck'}} className='iconfont icon-back'></i>
                    <div style={{color:'black',fontSize:'20px',paddingLeft:"-150px",paddingTop:'20px',marginLeft:'-150px'}}>
                        登录
                    </div>
                </div>
                <div style={{marginTop:'80px'}}>
                    {/* <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        昵称
                        <input style={{marginLeft:'18px',width:'248px'}} value='小黄'/>
                            
                    </div> */}
                    <div className='userName'
                     style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        手机号
                        <input
                        type='text' 
                        id='userName' 
                        name='userName'
                        style={{marginLeft:'18px',width:'228px'}} placeholder='用户名/手机号'/>
                            {/* 12563489523 */}
                            {/* </input */}
                    </div>
                    <div className='pw'
                     style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        密码
                        <input 
                        type='password'  id='pw' name='pw'
                        style={{marginLeft:'18px',width:'248px'}}placeholder='请输入密码'/>
                            {/* 123456 */}
                            {/* </input> */}
                    </div>
                    <WingBlank>
                {/* height: '250px',background:'#eee' */}
                <div style={{}} >
                    {/* <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-gerenxinxi'></i>
                        <input onChange={this.nameChange} style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='text' id='username' name='username' placeholder='用户名' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-wode'></i></label>
                        <input onChange={this.telChange} style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-chongwuleyuan'></i></label>
                        <input onChange={this.pwdChange} style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    </div> */}
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label>
                            <i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-yanjing'></i>
                            </label>
                        <input style={{width:'50%',lineHeight:3,marginLeft:10,borderRadius:'10px',
                        paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} 
                        type="text" id="vcode" placeholder="验证码"    />
                        <button id="vvcode"  
                        title="看不清，换一张" 
                        onClick={this.changeImg} 
                        style={{background:'#1daea9',width:'30%',float:'right',lineHeight:3,borderRadius:'10px',marginTop:8}}>
                            <span id="code" title="看不清，换一张">获取验证码</span>
                            </button>
                    </div>
                    {/* <Link to='/petxinxi'> */}
                        {/* <input type='submit' style={{width:'100%',height:50,margin:'0 auto',background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='注册'  onClick={this.check}/> */}
                        {/* </Link> */}
                   
                    
                </div>
                </WingBlank>
                    {/* <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        验证码
                        <input type="text" id="vcode" placeholder="验证码" style={{width:'80px'}}/>
                        <span id="code" title="看不清，换一张"></span>
                        <span id="vvcode"  title="看不清，换一张" onclick="changeImg()">换一张</span> */}
                        {/* <input style={{marginLeft:'18px',width:'248px'}} value='123456'/> */}
                            {/* 123456 */}
                            {/* </input> */}
                    {/* </div> */}
                    {/* <div style={{color:'black',float:'left',marginTop:'20px',fontSize:'20px',marginLeft:'22px'}}>我是</div>
                    <input style={{marginLeft:'18px',width:'80px',float:'left',marginTop:'20px',fontSize:'20px'}} value='123456'/>
                    <div style={{color:'black',float:'left',marginTop:'20px',fontSize:'20px',marginLeft:'20px'}}>届考生</div> */}
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
                    {/* <Link to={'/Home'}> */}
                    <Button style={{marginTop:'280px',backgroundColor:'gray'}} onClick={this.checkIn}>登录</Button>
                    {/* </Link> */}
                    <Link to={'/zhuce'}>
                    <Button style={{backgroundColor:'gray'}}>去注册</Button>
                    </Link>
                    </div>
            </div>
        )
    }
}


