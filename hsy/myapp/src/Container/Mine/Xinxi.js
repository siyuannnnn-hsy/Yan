import React, { Component } from 'react'

export default class Xinxi extends Component {
    render() {
        return (
            <div>
                <div className='header' style={{height:'30px',color:'black',paddingLeft:'130px',fontSize:'20px',paddingTop:'12px',backgroundColor:'#ffffff'}}>
                    详细信息
                </div>
                {/* <div style={}></div> */}
                <div style={{height:'100px',width:'100px',borderRadius:'50px'
                ,marginTop:'40px',marginLeft:'120px'}}>
                   <img src={require('./1.jpg').default} style={{height:'100px',width:'100px',
                    marginTop:'5px',borderRadius:'100px'}} />
                </div>
                <div >
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
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        座右铭
                        <input style={{marginLeft:'18px',width:'228px',fontSize:'15px'}} value='这个人很懒，什么也没有留下'/>
                            {/* 这个人很懒，什么也没有留下 */}
                            {/* </input> */}
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        专业
                        <input style={{marginLeft:'18px',width:'248px'}} value='软件工程'/>
                            {/* 软件工程 */}
                            {/* </input> */}
                    </div>
                    <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'20px',fontSize:'20px'}}>
                        出生日期
                        <input style={{marginLeft:'18px',width:'215px'}} value='2000.01.01'/>
                            {/* 1999.01.01 */}
                            {/* </input> */}
                    </div>
                    {/* <div className='userName' style={{color:'black',marginTop:'28px',marginLeft:'30px',fontSize:'20px'}}>
                        验证码
                        <input style={{marginLeft:'18px',width:'228px'}} value='软件工程'/>

                        </input>
                    </div> */}
                </div>
            </div>
        )
    }
}
