import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
// import { NavBar, Icon,WingBlank} from 'antd-mobile';
import { NavBar, Icon,WingBlank} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Mine extends Component {
    render() {
        return (
            <div>
                <header>研</header>
                <div style={{height:'130px',textAlign:'center'}}>
                    <img src={require('./1.jpg').default} style={{height:'100px',width:'100px',
                    marginTop:'25px',borderRadius:'100px'}} />
                    <i style={{fontSize:22,color:'balck'}} className='iconfont icon-back'></i>
                </div>
                <p style={{textAlign:'center',fontSize:'20px'}}>考研人001</p>
                <List >
                    <Link 
                        to={{
                            pathname: '/Mine/Xinxi',
                            state: {  // 页面跳转要传递的数据，如下
                                  data1: {},
                                  data2: []
                            },
                        }}
                    >
                        <Item arrow="horizontal" style={{marginTop:'5px'}} multipleLine onClick={() => {}}>
                        详细信息
                        </Item>
                    </Link>
                    <Link 
                        to={{
                            pathname: '/Mine/Fenshu',
                            state: {  // 页面跳转要传递的数据，如下
                                  data1: {},
                                  data2: []
                            },
                        }}
                    >
                        <Item arrow="horizontal" style={{marginTop:'5px'}} multipleLine onClick={() => {}}>
                        分数统计
                        </Item>
                    </Link>
                    <Link 
                        to={{
                            pathname: '/Mine/Dingdan',
                            state: {  // 页面跳转要传递的数据，如下
                                  data1: {},
                                  data2: []
                            },
                        }}
                    >
                        <Item arrow="horizontal" style={{marginTop:'5px'}} multipleLine onClick={() => {}}>
                        我的订单
                        </Item>
                    </Link>
                    <Link 
                        to={{
                            pathname: '/Mine/Lishi',
                            state: {  // 页面跳转要传递的数据，如下
                                  data1: {},
                                  data2: []
                            },
                        }}
                    >
                        <Item arrow="horizontal" style={{marginTop:'5px'}} multipleLine onClick={() => {}}>
                        历史成绩
                        </Item>
                    </Link>
                    <Link to='/'> 
                    <Item arrow="horizontal" style={{marginTop:'5px'}} multipleLine onClick={() => {}}>
                    退出登录
                    </Item>
                    </Link>
                    
                    
                    {/* <Link to='/login'><span style={{color:'#fff'}}>退出</span></Link> */}
                </List>
                <footer style={{marginBottom:'0',marginTop:'245px'}}>
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
        )
    }
}
