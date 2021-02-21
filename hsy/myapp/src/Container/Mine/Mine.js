import React, { Component } from 'react'
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';


const Item = List.Item;
const Brief = Item.Brief;

export default class Mine extends Component {
    render() {
        return (
            <div>
                <div style={{height:'130px',textAlign:'center'}}>
                    <img src={require('./1.jpg').default} style={{height:'100px',width:'100px',marginTop:'25px',borderRadius:'100px'}} />
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
                    <Item arrow="horizontal" style={{marginTop:'5px'}} multipleLine onClick={() => {}}>
                    退出登录
                    </Item>
                </List>
            </div>
        )
    }
}
